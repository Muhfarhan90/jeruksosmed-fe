// import React from "react";
import { NavLink } from "react-router-dom";
const NavigationPage = () => {
  return (
    <div className="py-4 flex justify-around text-xl font-semibold fixed top-0 left-0 right-0 mx-auto max-w-[768px] shadow-md bg-white bg-opacity-50">
      <div>
        <NavLink
          to={"/following"}
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8" : ""
          }
        >
          Following
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8" : ""
          }
        >
          Global
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationPage;
