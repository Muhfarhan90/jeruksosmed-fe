/* eslint-disable react/prop-types */
// import React from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const SideNav = ({ profile, username, email }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };
  return (
    <div className="flex xl:flex-col justify-around py-4 border-t-2 xl:border-none border-black absolute bottom-0 left-0 right-0 mx-auto max-w-[768px] xl:min-w-[200px] xl:p-4 xl:gap-4 bg-white z-20">
      <div className="hidden xl:flex xl:gap-4">
        <img src={profile} alt="profile" className="w-[50px] h-[50px] rounded-full" />
        <div>
          <h1>{username}</h1>
          <p>{email}</p>
        </div>
      </div>
      <button className="flex flex-col xl:flex-row xl:gap-2  items-center">
        <IoHomeOutline size={30} />
        <p>Home</p>
      </button>
      <button className="flex flex-col xl:flex-row xl:gap-2 items-center">
        <RiAccountCircleLine size={30} />
        <p>Profile</p>
      </button>
      <button
        onClick={handleLogout}
        className="py-2 px-4 bg-red-500 text-white rounded-lg hidden xl:flex"
      >
        Logout
      </button>
    </div>
  );
};

export default SideNav;
