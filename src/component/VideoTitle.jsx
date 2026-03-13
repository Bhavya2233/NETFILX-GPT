const VideoTitle = ({ title, overview }) => {

  return (

    <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center px-24 text-white bg-linear-to-r from-black z-20">

      <h1 className="text-6xl font-bold mb-6">
        {title}
      </h1>

      <p className="w-1/3 text-lg mb-6">
        {overview}
      </p>

      <div className="flex gap-4">

        <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-300">
          ▶ Play
        </button>

        <button className="bg-gray-500 bg-opacity-70 px-8 py-3 rounded-md">
          More Info
        </button>

      </div>

    </div>

  );
};

export default VideoTitle;