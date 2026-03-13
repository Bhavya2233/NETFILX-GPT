import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  const getMovies = async () => {

    const data = await fetch(
      NOW_PLAYING_MOVIES,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

};

export default useNowPlayingMovies;