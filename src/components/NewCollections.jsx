import React from "react";
import { Link } from "react-router-dom";
import new1 from "../assets/new1.jpg";
import new2 from "../assets/new3.jpg";
import new3 from "../assets/new7.jpg";
import new4 from "../assets/new6.jpg";
import new5 from "../assets/new5.jpg";
import new6 from "../assets/new2.jpg";
import new7 from "../assets/new4.jpg";

const products = [
  { image: new1, name: "Urban Fit Tee", price: 29.99 },
  { image: new2, name: "Graphic Vibes Tee", price: 34.99 },
  { image: new3, name: "Classic Black Tee", price: 24.99 },
  { image: new4, name: "Retro Style Tee", price: 39.99 },
  { image: new5, name: "Tie-Dye Cool Tee", price: 31.99 },
  { image: new6, name: "Street Edge Tee", price: 27.99 },
  { image: new7, name: "Minimal Design Tee", price: 22.99 },
];

const NewCollections = () => {
  return (
    <section className="w-full mt-5 bg-gray-200 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-3 lg:px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            New Collections
          </h2>
          <p className="mt-3 text-gray-600 md:text-[17px] sm:text-base max-w-md mx-auto">
            Fresh tees, bold vibes — style your everyday with our newest T-shirt drops.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-1">
          {products.map((product, index) => (
            <Link
              to={`/aboutProduct`}
              key={index}
              className="min-w-[250px] sm:min-w-[300px] bg-white rounded-2xl m-4 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">Price: ${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
