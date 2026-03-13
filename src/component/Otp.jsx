import Header from "./Header"
import { useNavigate } from "react-router-dom"

const Otp = () => {

  const navigate = useNavigate()

  const handleVerify = ()=>{
    navigate("/browse")
  }

  return (
    <div className="relative h-screen w-full">

      <Header/>

      <img
        className="absolute h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_small.jpg"
        alt="bg"
      />

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="bg-black bg-opacity-80 p-10 rounded-md text-white w-96">

          <h1 className="text-3xl mb-6">Enter OTP</h1>

          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full p-3 mb-4 text-black bg-amber-50 rounded"
          />

          <button
            onClick={handleVerify}
            className="w-full bg-red-600 py-3 rounded"
          >
            Verify
          </button>

        </div>

      </div>

    </div>
  )
}

export default Otp