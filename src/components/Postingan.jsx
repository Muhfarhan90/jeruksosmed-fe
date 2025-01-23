/* eslint-disable react/prop-types */
// import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import Like from "./Like";
// import axios from "axios";
// import { useState } from "react";

const Postingan = ({profile_id, profile_image, name, email, message, likes, postId, userLiked }) => {
  
  return (
    <div className="py-8 px-8 border-b-2 border-gray-300">
      <div className="flex gap-4 max-w-[768px] ">
        <div className="profile flex-shrink-0">
          <img
            src={profile_image}
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
        <Like profile_id={profile_id} postId={postId} countLike={likes.length} userLiked={userLiked}/>
        <MdOutlineMessage size={30} />
      </div>
    </div>
  );  
};

export default Postingan;
