import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-black font-semibold flex items-center gap-2">
          About of
          <span className="text-cyan-600 font-bold text-[24px] leading-9">
            Atul Singh
          </span>
        </h3>
        <p className="text--para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
          maiores dolore. Libero magnam dolorem, optio laborum nihil atque fuga
          reprehenderit odio harum sequi beatae perferendis debitis veniam
          commodi id voluptate suscipit maxime iure molestias reiciendis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nam, a. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Laboriosam, temporibus?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-black font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-cyan-600 text-[15px] leading-6 font-semibold">
                {formateDate("02-07-2008")} - {formateDate("02-07-2012")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-gray-600">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-gray-600">
              Phoenix Hospital, Prayagraj
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-cyan-600 text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2010")} - {formateDate("12-04-2013")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-gray-600">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-gray-600">
              Phoenix Hospital, Prayagraj
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-black font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#f3e6c4]">
            <span className="text-yellow-500 text-[15px] leading-6 font-semibold ">
              {formateDate("02-07-2008")} - {formateDate("02-07-2012")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-gray-600">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-gray-600">
              Phoenix Hospital, Prayagraj
            </p>
          </li>
          <li className="p-4 rounded bg-[#f3e6c4]">
            <span className="text-yellow-500 text-[15px] leading-6 font-semibold ">
              {formateDate("02-07-2008")} - {formateDate("02-07-2012")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-gray-600">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-gray-600">
              Phoenix Hospital, Prayagraj
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
