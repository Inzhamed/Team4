import React, { useState } from 'react';
import Logo from "../assets/google-icon-logo 1.png";
import Header from "./header";

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted with data:', formData);
  };

  const handleForgotPassword = () => {
    // Add your "Forgot Password" logic here
    console.log('Forgot Password clicked');
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md overflow-hidden w-full max-w-md">
        <div className="px-6 py-8">
        <Header/>
          <h2 className="text-2xl font-bold mb-4">Welcome Doctor!</h2>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
<div className="inline-flex  items-center">
            {/* Remember Me Checkbox */}
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-sm">Remember Me</span>
              </label>
            </div>
{/* Forgot Password Link */}
<div className="mt-4 text-sm text-gray-600">
            <span
              className="cursor-pointer underline"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </span>
          </div>
</div>
            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Sign Up
            </button>
          </form>

          
          {/* Sign Up with Google Button */}
          <button
            className="inline-flex mt-4 w-full   py-2 rounded-md  focus:outline-none border-solid-black"
            onClick={() => console.log('Sign up with Google')}
          >
            <img
              src={Logo}
              alt="Logo"
              className="mx-auto mb-2"
            />
            Sign Up with Google
          </button>

        </div>
      </div>
    </div>
  );
};

export default Form;
