// import React from 'react'
// import { NavLink } from "react-router-dom";
import Postingan from "../components/Postingan";
import profile from "../assets/react.svg";
import NavigationPage from "../components/NavigationPage";
import { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "../components/SideNav";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  // const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jeruk-sosmed-api-771822095302.asia-southeast2.run.app/api/posts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data);
      } catch (e) {
        console.log(e.response ? e.response.data : e.message);
        setError("Gagal mengambil data, Silahkan coba lagi");
      }
    };
    fetchData();
  }, [navigate]);
  const handleLogout = () => {
    localStorage.removeItem("token");
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
      {/* Postingan Total */}
      <div className="pt-16">
        <div>
          {/* Postingan */}
          {posts.map((post, index) => (
            <Postingan
              key={index}
              profile={profile}
              name={post.author.name}
              email={post.author.email}
              message={post.content}
            />
          ))}
        </div>
      </div>
      {/* SideNav */}
      <SideNav />
    </div>
  );
};

export default Homepage;
