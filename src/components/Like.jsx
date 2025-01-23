/* eslint-disable react/prop-types */
// import React from 'react' (already imported)

import axios from "axios";
import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Like = ({ postId, countLike, userLiked }) => {
  const [totalLikes, setTotalLikes] = useState(countLike);
  const [isLiked, setIsLiked] = useState(userLiked);

  const handleLike = async () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

    if (!token) {
      console.error("Token tidak ditemukan, silahkan login kembali");
      return;
    }

    const endpoint = "https://jeruk-sosmed-api-771822095302.asia-southeast2.run.app/api/like";

    try {
      const response = await axios.post(endpoint, { token, postId }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Update like status and total likes based on response
      setIsLiked(response.data.post.likes.includes(user.author_id));
      setTotalLikes(response.data.post.likes.length);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button onClick={handleLike}>
        {isLiked ? (
          <MdFavorite size={30} className="text-red-500" />
        ) : (
          <MdFavoriteBorder size={30} />
        )}
      </button>
      <p className="text-lg">{totalLikes}</p>
    </div>
  );
};

export default Like;