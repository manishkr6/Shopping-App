import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import th1 from "../assets/th1.jpg";
import th2 from "../assets/th2.jpg";
import SimilarProduct from "../components/SimilarProduct";

const selectedProduct = {
  name: "T-shirt",
  originalPrice: 79.99,
  price: 49.99,
  description: "A stylish jacket perfect for any occasion.",
  brand: "Fashion Brand",
  material: "cotton",
  size: ["S", "M", "L", "XL"],
  color: ["Red", "Blue", "Green"],
  images: [
    {
      url: th1,
      alt: "Stylish Jacket",
    },
    {
      url: th2,
      alt: "Stylish Jacket 2",
    },
  ],
};

const AboutProduct = () => {
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart successfully!", { duration: 1500 });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl m-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="flex flex-col-reverse md:flex-row w-full md:w-1/2 gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-3 md:gap-4 px-1">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt || `Thumbnail ${index}`}
                  className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer border transition-all duration-300 hover:scale-105 ${
                    mainImage === image.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full">
              <img
                src={mainImage}
                alt="main product"
                className="w-full h-auto object-cover rounded-lg transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Panel */}
          <div className="md:w-1/2 md:ml-4">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">{selectedProduct.name}</h1>
            <p className="text-lg text-gray-600 mb-1 line-through">${selectedProduct.originalPrice}</p>
            <p className="text-xl text-gray-500 mb-4">${selectedProduct.price}</p>

            {/* Color */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.color.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border transition-all duration-200 hover:scale-110 ${
                      selectedColor === color ? "border-4 border-black" : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.8)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border transition-all duration-200 hover:bg-black hover:text-white ${
                      selectedSize === size ? "bg-black text-white" : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={() => handleQuantityChange("minus")}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={() => handleQuantityChange("plus")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 transition-all duration-200 ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "Add to Cart"}
            </button>

            {/* Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <SimilarProduct/>
      </div>
    </div>
  );
};

export default AboutProduct;
