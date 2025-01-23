/* eslint-disable react/prop-types */
// import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";

const Postingan = ({ profile, name, email, message }) => {
  return (
    <div className="py-8 px-8 border-b-2 border-gray-300">
      <div className="flex gap-4 max-w-[768px] ">
        <div className="profile flex-shrink-0">
          <img
            src={profile}
            alt=""
            className="w-16 h-16 rounded-full bg-sky-900"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-base font-semibold">
              {name} | <span className="font-normal opacity-60">{email}</span>
            </h1>
          </div>
          <div>
            <p className="text-lg">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-2">
        <MdFavoriteBorder size={30} />
        <MdOutlineMessage size={30} />
      </div>
    </div>
  );
};

export default Postingan;
