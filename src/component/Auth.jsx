import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Auth = () => {

  const navigate = useNavigate()

  const [isSignin,setIsSignin] = useState(true)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(email === "" || password === ""){
      setError("Enter email and password")
      return
    }

    setError("")
    navigate("/browse")
  }

  return (
    <div className="relative h-screen w-full">
    
      {/* Background */}
      <img
        className="absolute h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_small.jpg"
        alt="bg"
      />

      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Login Card */}
      <div className="absolute inset-0 flex items-center justify-center">

        <form
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-80 p-12 rounded-md w-96 text-white"
        >

          <h1 className="text-3xl mb-6 font-bold">
            {isSignin ? "Sign In" : "Sign Up"}
          </h1>

          <input
            type="text"
            placeholder="Email"
            className="w-full p-3 mb-4 text-black bg-amber-50 rounded"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 text-black bg-amber-50 rounded"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 mb-4">
              {error}
            </p>
          )}

          <button className="w-full bg-red-600 py-3 rounded hover:bg-red-700">
            {isSignin ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle button */}
          <p className="text-gray-400 mt-6">

            {isSignin ? "New to Netflix?" : "Already have an account?"}

            <span
              className="text-white cursor-pointer ml-2 hover:underline"
              onClick={()=>setIsSignin(!isSignin)}
            >
              {isSignin ? "Sign Up Now" : "Sign In"}
            </span>

          </p>

        </form>

      </div>

    </div>
  )
}

export default Auth