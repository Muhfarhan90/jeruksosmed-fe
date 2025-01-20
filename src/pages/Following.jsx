// import React from 'react'
import Postingan from "../components/Postingan";
import profile from "../assets/react.svg";
import NavigationPage from "../components/NavigationPage";
const Following = () => {
  return (
    <div className="max-w-[768px] h-screen mx-auto border-l-2 border-r-2 border-black overflow-auto relative">
      {/* Navigasi Following / Global */}
      <NavigationPage />
      {/* Postingan Total */}
      <div className="pt-16">
        <div>
          {/* Postingan */}
          <Postingan
            profile={profile}
            name="dias norman"
            email="diasnorman@gmail.com"
            message="jaosd oaosjdajsip japsjpasjdo japosjdpa jopasjpoajs pajs pda lorem10 asdjasjd jasdpjaopsd opajspdo"
          />
        </div>
        <div>
          {/* Postingan */}
          <Postingan
            profile={profile}
            name="dias norman"
            email="diasnorman@gmail.com"
            message="jaosd oaosjdajsip japsjpasjdo japosjdpa jopasjpoajs pajs pda lorem10 asdjasjd jasdpjaopsd opajspdo"
          />
        </div>
        <div>
          {/* Postingan */}
          <Postingan
            profile={profile}
            name="dias norman"
            email="diasnorman@gmail.com"
            message="jaosd oaosjdajsip japsjpasjdo japosjdpa jopasjpoajs pajs pda lorem10 asdjasjd jasdpjaopsd opajspdo"
          />
        </div>
        <div>
          {/* Postingan */}
          <Postingan
            profile={profile}
            name="dias norman"
            email="diasnorman@gmail.com"
            message="jaosd oaosjdajsip japsjpasjdo japosjdpa jopasjpoajs pajs pda lorem10 asdjasjd jasdpjaopsd opajspdo"
          />
        </div>
        <div>
          {/* Postingan */}
          <Postingan
            profile={profile}
            name="dias norman"
            email="diasnorman@gmail.com"
            message="jaosd oaosjdajsip japsjpasjdo japosjdpa jopasjpoajs pajs pda lorem10 asdjasjd jasdpjaopsd opajspdo"
          />
        </div>
      </div>
    </div>
  );
};

export default Following;
