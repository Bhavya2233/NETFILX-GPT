import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  if (!movies) return null;

  return (
    <div className="px-10 py-6">

      <h2 className="text-white text-2xl mb-4">
        {title}
      </h2>

      <div className="flex overflow-x-scroll gap-4 scrollbar-hide">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster_path}
          />
        ))}

      </div>

    </div>
  );
};

export default MovieList;