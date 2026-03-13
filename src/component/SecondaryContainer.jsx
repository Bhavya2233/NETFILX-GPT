import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (

    <div className="bg-black -mt-40 relative z-20">

      <MovieList
        title="Now Playing"
        movies={movies.nowPlayingMovies}
      />

      <MovieList
        title="Trending"
        movies={movies.trendingMovies}
      />

      <MovieList
        title="Top Rated"
        movies={movies.topRatedMovies}
      />

      <MovieList
        title="Popular"
        movies={movies.popularMovies}
      />

    </div>

  );
};

export default SecondaryContainer;