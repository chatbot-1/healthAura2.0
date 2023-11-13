import React, { useState } from "react";
import {Link} from 'react-router-dom'
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";

const Signup = () => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: ""
  });


  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = async (event) => {
    const file = event.target.files[0]
    // console.log(file)
  }

  const submitHandler  = async event => {
    event.preventDefault()
  }

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-col-2">
          <div className="hidden lg:block bg-blue-700  rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-blue-700">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-black placeholder:text-gray-600  cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-black placeholder:text-gray-600  cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Create a password"
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-black placeholder:text-gray-600  cursor-pointer"
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-black font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInput}
                    className="text-gray-700 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient" selected>
                      Select
                    </option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-black font-bold text-[16px] leading-7">
                  What's your gender:
                  <select
                    name="role"
                    value={formData.gender}
                    onChange={handleInput}
                    className="text-gray-700 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="" selected>
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="cannot">Can't say</option>
                    <option value="mechanic">Mechanic</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-700 flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full " />
                </figure>
                <div className="relative w-[185px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    value={formData.photo}
                    onChange={handleFile}
                    accept=".jpg, .jpeg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-black font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Profile Picture
                  </label>
                </div>
              </div>

              <div className="mt-7">
            <button
              className="w-full bg-blue-700 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
              type="submit"
            >
              Register
            </button>
          </div>

          <p className="mt-5 text-gray-700 text-center">
            Already have and account?
            <Link to='/log-in' className="text-blue-700 font-medium"> Login</Link>
          </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
