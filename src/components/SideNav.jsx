// import React from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";

const SideNav = () => {
  return (
    <div className="flex justify-around py-4 border-t-2 border-black absolute bottom-0 left-0 right-0 mx-auto max-w-[768px] shadow-md bg-white z-20">
      <button className="flex flex-col items-center">
        <IoHomeOutline size={30} />
        <p>Home</p>
      </button>
      <button className="flex flex-col items-center">
        <RiAccountCircleLine size={30} />
        <p>Profile</p>
      </button>
    </div>
  );
};

export default SideNav;
