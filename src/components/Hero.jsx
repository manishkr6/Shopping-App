import React from "react";
import home from "../assets/tshirt.png";

const Hero = () => {
  return (
    <div className="w-full h-[40vh] lg:h-[70vh] md:h-[26rem] relative">
      <img
        src={home}
        className="w-full h-full object-cover"
        alt="Hero background"
      />

      {/* <div className="absolute inset-0 flex md:mt-20 items-center justify-center flex-col text-center px-4 sm:px-6">
        <h4 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
          Your Heroic Shopping Adventure Starts Here!
        </h4>

        <p className="text-white text-sm sm:text-base lg:text-lg font-semibold mt-4 sm:mt-6">
          Discover a universe of collectibles, action figures, and memorabilia.
        </p>

        <button className="bg-white text-black px-4 py-2 mt-5 sm:mt-6 rounded-lg hover:bg-yellow-400 hover:cursor-pointer transition duration-300">
          Shop Now
        </button>
      </div> */}
    </div>
  );
};

export default Hero;
