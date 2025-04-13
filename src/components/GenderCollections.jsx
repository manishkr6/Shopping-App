import React from "react";
import w1 from "../assets/w1.webp";
import m1 from "../assets/m1.webp";
import k1 from "../assets/k1.webp";
import { Link } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

const GenderCollections = () => {
  const collections = [
    { img: w1, title: "Women's Collection" },
    { img: m1, title: "Men's Collection" },
    { img: k1, title: "Kid's Collection" },
  ];

  return (
    <section className="w-full md:mt-5 bg-gray-200">
      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Shop Hero Styles for Everyone
        </h2>
        <p className="text-gray-600 text-center mt-3 text-sm sm:text-base">
          Dive into exclusive superhero-inspired outfits and merchandise for
          women, men, and kids—perfect for fans of all ages.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-8">
          {collections.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md text-center relative group"
            >
              <Link
                to={`/collections/${item.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[28rem] lg:h-[32rem] object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute w-[15rem] bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-md shadow-lg text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-2 text-gray-700">
                    <p className="text-sm sm:text-base text-gray-600">
                      Shop Now
                    </p>
                    <FaHandPointRight />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenderCollections;
