/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import React from 'react'

import axios from "axios";
import { useState } from "react";

const PostComment = ({postId}) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handlePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const response = await axios.post(
        "https://jeruk-sosmed-api-771822095302.asia-southeast2.run.app/api/addComment",
        {
          comment: content,
          token,
          postId,
          userId: user.author_id,
          email: user.author_email,
          username: user.author_name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setSuccess("Comment Berhasil");
      setError("");
      setContent("");
    } catch (e) {
      console.log(e.response ? e.response.data : e.message);
      setError("Comment Gagal, Silahkan coba lagi");
    }
  };
  return (
    <div className="fixed bottom-0 flex items-center gap-4 min-w-[768px] py-8 px-8 border-t-2 border-b-2 border-black">
      <img src="" alt="" className="w-16 h-16 rounded-full bg-sky-900" />
      <form action="" onSubmit={handlePost} className="flex items-center gap-4">
        <textarea
          name=""
          id=""
          className="border border-gray-400 w-[400px]"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}
        <button type="submit" className="py-2 px-4 bg-sky-900 text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default PostComment;
