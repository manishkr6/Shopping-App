import React from "react";
import { Link } from "react-router-dom";
import sm1 from "../assets/sm1.jpg";
import sm2 from "../assets/sm2.jpg";
import sm3 from "../assets/sm3.jpg";
import sm4 from "../assets/sm4.jpg";
import sm5 from "../assets/sm5.jpg";
import sm6 from "../assets/sm6.jpg";
import sm7 from "../assets/sm7.jpg";
import sm8 from "../assets/sm8.jpg";
import sm9 from "../assets/sm9.jpg";
import sm10 from "../assets/sm10.jpg";

const similarProducts = [
  { name: "Classic White Tee", price: 39.99, image: sm1 },
  { name: "Graphic Print Tee", price: 29.99, image: sm2 },
  { name: "Oversized Black Tee", price: 34.99, image: sm3 },
  { name: "Vintage Washed Tee", price: 42.99, image: sm4 },
  { name: "Striped Casual Tee", price: 31.99, image: sm5 },
  { name: "Cotton Comfort Tee", price: 27.99, image: sm6 },
  { name: "Tie-Dye Tee", price: 36.99, image: sm7 },
  { name: "Minimal Logo Tee", price: 33.99, image: sm8 },
  { name: "Longline Fit Tee", price: 38.99, image: sm9 },
  { name: "Retro Vibes Tee", price: 30.99, image: sm10 },
];

const SimilarProduct = () => {
  return (
    <section className="w-full mt-12 py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Similar T-shirts</h2>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">
            Explore our collection of stylish T-shirts curated just for you.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-2">
          {similarProducts.map((product, index) => (
            <Link
              to={`/aboutProduct`}
              key={index}
              className="min-w-[250px] mb-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProduct;
