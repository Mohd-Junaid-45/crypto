import React from "react";
import banner from "../assets/crypto1.png";

const Homepage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="w-screen h-screen max-w-[1280px] mx-4 flex flex-col items-center justify-items-center gap-14 md:flex md:flex-row md:items-center md:justify-between mt-24 md:mt-0">
        <div className="flex-col text-center md:text-start">
          <div className="space-y-2">
            <p className="text-6xl font-bold">
              Buy & Sell{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                cryptos
              </span>
            </p>
            <p className="text-6xl font-bold">easier than ever</p>
          </div>
          <div>
            <p>with our new finance app you will ever be on track of</p>
            <p>all your transactions in a smart and easy way...</p>
          </div>
          <button className="bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 w-36 text-2xl font-semibold py-1 px-3 rounded-3xl mt-1">
            Crypto
          </button>
        </div>
        <div className="h-[300px] w-[300px] flex items-center md:w-[500px] md:h-[500px]">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
