import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadPfp";
import { BASE_URL, token } from "../../utils/config";
import { toast } from "react-toastify";
import HashLoader from 'react-spinners/HashLoader'

const ProfileSetting = ({user}) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType:"",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({name:user.name, email:user.email, password:user.password, photo:user.photo, gender:user.gender, bloodType:user.bloodType})
  }, [user])

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/users/profile/me");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
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
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-black placeholder:text-gray-600  cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Blood Type"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleInput}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-700 text-[16px] leading-7 text-black placeholder:text-gray-600  cursor-pointer"
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                

                <label className="text-black font-bold text-[16px] leading-7">
                  What's your gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInput}
                    className="text-gray-700 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="cannot">Can't say</option>
                    <option value="mechanic">Mechanic</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {formData.photo && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-700 flex items-center justify-center">
                    <img
                      src={formData.photo}
                      alt=""
                      className="w-full rounded-full "
                    />
                  </figure>
                )}
                <div className="relative w-[185px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    // value={formData.photo}
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
                disabled={loading && true}
                  className="w-full bg-blue-700 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                  type="submit"
                >
                  {loading ? <HashLoader size={25} color="#ffffff"/> : 'Update'}
                </button>
              </div>
            </form>
    </div>
  )
}

export default ProfileSetting