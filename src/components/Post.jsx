/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react";
import axios from "axios";
const Post = ({ profile, name, email }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const response = await axios.post(
        "https://jeruk-sosmed-api-771822095302.asia-southeast2.run.app/api/post",
        {
          content,
          token,
          author_id: user.author_id,
          author_email: user.author_email,
          author_name: user.author_name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setSuccess("Create Post Berhasil");
      setError("");
      setContent("");
    } catch (e) {
      console.log(e.response ? e.response.data : e.message);
      setError("Create Post Gagal, Silahkan coba lagi");
    }
  };

  return (
    <div className="flex items-center gap-4 max-w-[768px] py-8 px-8 border-t-2 border-b-2 border-black">
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
        <form onSubmit={handlePost} className="flex gap-8 w-full">
          <textarea
            type="text"
            className="bg-gray-200 py-3 px-2 rounded-lg w-[400px]"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-lg"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
