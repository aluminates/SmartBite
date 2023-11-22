import React from "react";
import img from "../img/smartBiteHomePage.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:h-[calc(100vh-90px)] items-start justify-between home flex flex-col-reverse mt-5 lg:mt-0 gap-4 lg:gap-10">
        <div className="flex flex-col gap-4 md:gap-8 items-center lg:items-start md:ms-7 lg:ml-20 mt-20">
          <p className="text-black text-4xl md:text-7xl font-bold text-center lg:text-left ">
            Grab a bite with SmartBite!
          </p>
          <p className="text-lg md:text-3xl font-medium text-center lg:text-left w-[80%]">
            Discover the top-rated cuisine near you — order online now!
          </p>
          <NavLink to="restaurants">
            <button className="hover:shadow-xl transition-all p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm md:text-base font-bold">
              Explore Nearby Restaurants
            </button>
          </NavLink>
        </div>

        <div className="flex lg:justify-end items-center justify-center mt-10 -ml-20 w-[100%]">
          <img src={img} className="lg:w-[90%] " />
        </div>
      </div>
    </>
  );
}

export default Home;
