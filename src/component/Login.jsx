import Header from "./header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      setError("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    navigate("/otp");
  };

  return (
    <div className="relative h-screen w-full">
      
      <Header />

      {/* Background */}
      <img
        className="absolute h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_small.jpg"
        alt="background"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

        <h1 className="text-5xl font-bold mb-4">
          Unlimited movies, TV shows and more
        </h1>

        <h3 className="text-xl mb-6">
          Watch anywhere. Cancel anytime.
        </h3>

        <form className="flex flex-col items-center" onSubmit={handleSubmit}>

          <div className="flex">

            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 w-80 bg-white text-black rounded-l-md outline-none"
            />

            <button
              type="submit"
              className="bg-red-600 px-6 text-lg font-semibold rounded-r-md hover:bg-red-700"
            >
              Get Started
            </button>

          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-500 mt-2">
              {error}
            </p>
          )}

        </form>

      </div>
    </div>
  );
};

export default Login;