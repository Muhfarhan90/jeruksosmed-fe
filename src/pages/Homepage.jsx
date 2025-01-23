// import React from 'react'
// import { NavLink } from "react-router-dom";
import Postingan from "../components/Postingan";
import image from "../assets/react.svg";
import NavigationPage from "../components/NavigationPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
const Homepage = () => {
  // const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token) {
      navigate("/login");
      return;
    }
    // Fetch Data Postingan
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://jeruk-sosmed-api-771822095302.asia-southeast2.run.app/api/posts",
          { token },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPosts(response.data);
        setProfile(user);
      } catch (e) {
        console.log(e.response ? e.response.data : e.message);
        setError("Gagal mengambil data, Silahkan coba lagi");
      }
    };
    fetchData();
  }, [navigate]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-[768px] h-screen mx-auto border-l-2 border-r-2 border-black overflow-auto relative">
      {/* Navigasi Following / Global */}
      <NavigationPage />
      <button
        onClick={handleLogout}
        className="py-2 px-4 bg-red-500 text-white rounded-lg absolute top-4 right-4"
      >
        Logout
      </button>
      {/* Create Post */}
      <div className="pt-16">
        <Post
          profile={profile}
          name={profile.author_name}
          email={profile.author_email}
        />
      </div>
      {/* Postingan Total */}
      <div className="">
        <div className="">
          {/* Postingan */}
          {posts.map((post, index) => (
            <Postingan
              key={index}
              profile={image}
              name={post.author.name}
              email={post.author.email}
              message={post.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
