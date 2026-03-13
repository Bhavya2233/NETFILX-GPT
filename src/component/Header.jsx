import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-4 z-50">

      <h1 className="text-red-600 text-4xl font-bold">
        NETFLIX
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-600 px-4 py-2 rounded text-white"
      >
        Logout
      </button>

    </div>
  );
};

export default Header;