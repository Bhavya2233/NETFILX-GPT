import Header from "./header"

const Otp = () => {
  return (
    <div className="relative h-screen w-full">
      
      <Header/>

      {/* Background */}
      <img
        className="absolute h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_small.jpg"
        alt="background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* OTP Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        <div className="bg-black bg-opacity-75 p-10 rounded-md w-96 text-white">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Verify OTP
          </h1>

          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full p-3 mb-4 bg-amber-50 text-black rounded outline-none"
          />

          <button className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700">
            Verify
          </button>

          <p className="text-gray-400 mt-4 text-sm text-center">
            Didn't receive OTP? <span className="text-white cursor-pointer">Resend</span>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Otp