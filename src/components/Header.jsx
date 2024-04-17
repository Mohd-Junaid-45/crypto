import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo3 from "../assets/linkedin.svg";
import logo2 from "../assets/twitter.svg";
import logo1 from "../assets/Vector.svg";
import junaidlogo from "../assets/junaidlogo.svg";
import { MenuIcon } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[66px] w-full flex items-center justify-center mt-7">
      <header className="w-screen max-w-[1280px] mx-4 flex justify-between items-center">
        <img className="" src={junaidlogo} alt="" />

        <div className="hidden md:flex">
          <ul className="flex items-center gap-10 ">
            <li className="hover:text-white hover:font-medium hover:scale-105 transition-all duration-200 text-[20px] font-medium text-[#A7A7A7] cursor-pointer        ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-white hover:font-medium hover:scale-105 transition-all duration-200 text-[20px] font-medium text-[#A7A7A7] cursor-pointer">
              <Link to={"/crypto"}>Crypto</Link>
            </li>
            <li className="hover:text-white hover:font-medium hover:scale-105 transition-all duration-200 text-[20px] font-medium text-[#A7A7A7] cursor-pointer">
              <Link to={"/trending"}>Trending</Link>
            </li>
            <li className="hover:text-white hover:font-medium hover:scale-105 transition-all duration-200 text-[20px] font-medium text-[#A7A7A7] cursor-pointer">
              <Link to={"/saved"}>Saved</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 box-border">
          <button
            onClick={navigate("/login")}
            className="text-[20px] font-medium text-white cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-2 py-[6px] rounded-lg"
          >
            login
          </button>
          <button
            onClick={navigate("/signup")}
            className="text-[20px] font-medium text-white cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-2 py-[6px] rounded-lg"
          >
            SignUp
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;

{
  /* <div className="flex gap-4 max-sm:hidden">
<a href="https://github.com/Junaid-45">
  <img
    className="hover:scale-125 transition-all duration-200 cursor-pointer"
    src={logo1}
    alt=""
  />
</a>
<a href="https://twitter.com/junaidd_45">
  <img
    className="hover:scale-125 transition-all duration-200 cursor-pointer"
    src={logo2}
    alt=""
  />
</a>
<a href="https://www.linkedin.com/in/mohd-junaid-421332284/">
  <img
    className="hover:scale-125 transition-all duration-200 cursor-pointer"
    src={logo3}
    alt=""
  />
</a>
</div> */
}
