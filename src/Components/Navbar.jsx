import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img onClick={()=>navigate(-1)} 
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Arrow Left"
          />
          <img onClick={()=>navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Arrow Right"
          />
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
          >
            Explore Premium
          </Link>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            S
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Link
          to="/"
          className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer"
        >
          All
        </Link>
        <Link
          to="/music"
          className="bg-black px-4 py-1 rounded-2xl cursor-pointer"
        >
          Music
        </Link>
        <Link
          to="/podcasts"
          className="bg-black px-4 py-1 rounded-2xl cursor-pointer"
        >
          Podcasts
        </Link>
      </div>
    </>
  );
};

export default Navbar;
