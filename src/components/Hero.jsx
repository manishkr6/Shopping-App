import React from "react";
import home from "../assets/Home.png";

const Hero = () => {
  return (
    <div className="w-full h-[40vh] lg:h-[90vh] md:h-[36rem] relative">
      <img
        src={home}
        className="w-full h-full object-fit"
        alt="Hero background"
      />

      <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4 sm:px-6 lg:-mt-20">
        <h4 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
          Your Heroic Shopping Adventure Starts Here!
        </h4>

        <p className="text-zinc-300 text-bold md:mb-8 sm:text-base lg:text-xl font-semibold mt-4 sm:mt-6">
          Discover a universe of collectibles, action figures, and memorabilia.
        </p>

        <button className="bg-yellow-500 text-black px-4 py-2 mt-5 sm:mt-6 rounded-lg hover:bg-yellow-400 hover:cursor-pointer transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
