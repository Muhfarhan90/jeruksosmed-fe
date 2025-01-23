/* eslint-disable react/prop-types */
// import React from 'react'

import axios from "axios";
import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
// import axios from "axios";
const Like = ({ profile_id, postId, countLike, userLiked }) => {
  const [like, setLike] = useState(false);
  //  LIKES
  const [totalLikes, setTotalLikes] = useState(countLike);
  const [isLiked, setIsLiked] = useState(userLiked);

  const handleLike = async () => {
    const token = localStorage.getItem("token");
      try {
        
      const response = await axios.post(
        "https://jeruk-sosmed-api-771822095302.asia-southeast2.run.app/api/like",
        {
          token,
          postId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const liked = response.data.post.likes.includes(profile_id);
      liked ? setIsLiked(true) : setIsLiked(false);
      setLike(!like);
      setTotalLikes(response.data.post.likes.length);
    } catch (error) {
      console.log(error);
    }
  };

  return isLiked ? (
    <div className="flex items-center gap-1">
      <button onClick={handleLike}>
        <MdFavorite size={30} className="text-red-500" />
      </button>
      <p className="text-lg">{totalLikes}</p>
    </div>
  ) : (
    <div className="flex items-center gap-1">
      <button onClick={handleLike}>
        <MdFavoriteBorder size={30} />
      </button>
      <p className="text-lg">{totalLikes}</p>
    </div>
  );
};

export default Like;
