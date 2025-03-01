// src/components/Login.jsx (or wherever your Login component lives)
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../redux/features/authSlice';
import { useNavigate } from 'react-router-dom'; // For navigation after login

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const error = useSelector((state) => state.auth.error); // Get error from Redux state

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "example" && password === "123") {
      const user = { username, password };
      dispatch(loginSuccess(user)); // Dispatch success action
      navigate('/dashboard'); // Navigate to dashboard
    } else {
      dispatch(loginFailure('Invalid username or password')); // Dispatch failure action
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="container max-w-[400px] max-h-[400px]">
        <h2 className="text-center text-3xl mb-5">Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin} className="w-full">
          <div>
            <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password" // Changed to password type
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;