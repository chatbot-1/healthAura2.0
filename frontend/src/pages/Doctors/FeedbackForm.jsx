import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = async e => {
    e.preventDefault()

  }

  return (
    <form action="">
      <div>
        <h3 className="text-black text-[16px] leading-6 font-semibold mb-4">
          How would you rate your experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index++;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellow-500"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-black text-[16px] leading-6 font-semibold mb-4">
          Share your feedback or suggestions!!
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-blue-300 w-full px-4 py-3 rounded-md"
          placeholder="Write your message"
          rows="5"
          onChange={e => setReview(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleSubmit} type="submit" className="btn">Submit Feeback</button>
    </form>
  );
};

export default FeedbackForm;
