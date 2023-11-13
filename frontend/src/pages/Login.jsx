import React, { useState } from "react";
import {Link} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-blue-700">Welcome</span> Back
        </h3>
        <form action="" className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-black placeholder:text-gray-600  cursor-pointer"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-black placeholder:text-gray-600  cursor-pointer"
            />
          </div>

          <div className="mt-7">
            <button
              className="w-full bg-blue-700 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              type="submit"
            >
              Login
            </button>
          </div>

          <p className="mt-5 text-gray-700 text-center">
            Don't have and account?
            <Link to='/sign-up' className="text-blue-700 font-medium"> Sign Up</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
