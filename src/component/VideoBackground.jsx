import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );

  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (

    <div className="w-screen h-screen overflow-hidden">

      <iframe
        className="w-screen h-screen object-cover scale-125"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?autoplay=1&mute=1&controls=0&loop=1"
        }
        title="YouTube video player"
        allow="autoplay"
      />

    </div>

  );
};

export default VideoBackground;