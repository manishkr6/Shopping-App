import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searchTerm: ", searchTerm);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-24 bg-gray-800 z-50 flex items-center justify-center transition-all duration-300">
          <form
            onSubmit={handleSearch}
            className="relative flex items-center justify-center w-full"
          >
            <div className="relative w-11/12 max-w-[600px]">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-black text-black"
              />
              {/* search icon */}
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                <HiMagnifyingGlass className="h-6 w-6 hover:cursor-pointer" />
              </button>
            </div>
            {/* close button */}
            <button
              type="button"
              onClick={handleSearchToggle}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 hover:cursor-pointer"
            >
              <HiMiniXMark className="h-6 w-6" />
            </button>
          </form>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={handleSearchToggle}
          className="hover:text-yellow-400 text-xl lg:text-3xl text-white"
        >
          <HiMagnifyingGlass className="hover:cursor-pointer" />
        </button>
      )}
    </>
  );
};

export default SearchBar;
