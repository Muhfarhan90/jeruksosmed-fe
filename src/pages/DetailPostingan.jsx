// import React from 'react'

import { useEffect, useState } from "react";
import Postingan from "../components/Postingan";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PostComment from "../components/PostComment";
import Comment from "../components/Comment";

const DetailPostingan = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.post(
          `https://jeruk-sosmed-api-771822095302.asia-southeast2.run.app/api/post/${id}`,
          { token },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setDetail(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Gagal mengambil detail postingan, silahkan coba lagi");
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id, token, navigate]);

  console.log(detail);
  if (loading) {
    return <div>Memuat detail postingan...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-[768px] mx-auto border-l-2 border-r-2 border-black overflow-auto relative mt-16">
      {/* Pastikan detail sudah ada sebelum mencoba merender Postingan */}
      {detail ? (
        <Postingan
          profile_image={null} // Ganti dengan URL gambar profil jika tersedia
          name={detail.author.name}
          email={detail.author.email}
          message={detail.content}
          likes={detail.likes.length} // Menampilkan jumlah likes
          postId={detail._id}
          userLiked={detail.likes.includes(detail.author.id)} // Menyesuaikan dengan ID yang benar
        />
      ) : (
        <div>Data tidak ditemukan</div>
      )}
      {detail.comments.map((comment, index) => (
        <Comment
          key={index}
          profile_image={null}
          name={comment.username}
          email={comment.email}
          message={comment.comment}
          // likes={comment.likes.length}
          // postId={comment._id}
          // userLiked={comment.likes.includes(comment.author.id)}
        />
      ))}
      <PostComment postId={id} />
    </div>
  );
};

export default DetailPostingan;
