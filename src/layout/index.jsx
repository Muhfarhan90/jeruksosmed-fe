// import React from 'react'

import { Outlet } from "react-router-dom";
import NavigationPage from "../components/NavigationPage";
// import SideNav from "../components/SideNav";

const index = () => {
  return (
    <div>
      <NavigationPage />
      <Outlet />
    </div>
  );
};

export default index;
