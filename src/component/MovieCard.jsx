const MovieCard = ({ poster }) => {
  return (
    <div className="w-40 mr-4">
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster}
        alt="movie"
      />
    </div>
  );
};

export default MovieCard;