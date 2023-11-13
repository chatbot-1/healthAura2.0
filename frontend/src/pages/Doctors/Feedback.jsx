import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="mt-50px">
        <h4 className="text-[20px] leading-[30px] font-bold text-black mb-[30px]">
          Total reviews (272)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full ">
              <img className="w-full" src={avatar} alt="" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-blue-800 font-bold">
                Aditya Singh
              </h5>
              <p className="text-[14px] leading-6 text-black">
                {formateDate("10-10-2022")}
              </p>
              <p className="text--para mt-3 font-medium text-[15px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat quod vero modi fuga quas minima!
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>

      {!showForm && (
        <div className="text-center">
          <div className="text-center">
            <button className="btn" onClick={() => setShowForm(true)}>
              Give Feedback
            </button>
          </div>
        </div>
      )}
      {
        showForm && <FeedbackForm/>
      }
    </div>
  );
};

export default Feedback;
