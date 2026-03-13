import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TRENDING_MOVIES } from "../utils/constants";
import { addTrendingMovies } from "../store/moviesSlice";

const useTrendingMovies = () => {

  const dispatch = useDispatch();

  const getTrendingMovies = async () => {

    const data = await fetch(
      TRENDING_MOVIES,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

};

export default useTrendingMovies;