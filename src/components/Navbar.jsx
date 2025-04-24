import React, { useEffect, useRef, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      <nav className="relative bg-gray-800 flex justify-between items-center text-white py-2 px-4 lg:py-2 lg:px-7 md:gap-2 lg:gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-10 h-10 lg:w-15 lg:h-15 rounded"
          />
          <h1 className="lg:text-xl md:text-sm font-semibold">SuperHeroCart</h1>
        </Link>
        <div>
          <ul className="hidden md:flex md:space-x-4 lg:space-x-6 text-[12px] lg:text-[15px] font-medium">
            <li><a href="#" className="hover:text-yellow-400">Marvel Universe</a></li>
            <li><a href="#" className="hover:text-yellow-400">DC Comics</a></li>
            <li><a href="#" className="hover:text-yellow-400">Anime Superheroes</a></li>
            <li><a href="#" className="hover:text-yellow-400">Classic Comics</a></li>
            <li><a href="#" className="hover:text-yellow-400">Sci-Fi & Fantasy</a></li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2.5 lg:gap-4">
          <SearchBar />
          <button className="relative">
            <IoCartOutline className="hover:text-yellow-400 text-xl lg:text-3xl text-white" />
            <span className="absolute -top-2 -right-2 text-black bg-white rounded-full lg:px-2 lg:py-0.5 px-1 lg:font-bold text-[9px] lg:text-xs">
              4
            </span>
          </button>
          <button>
            <FaRegUser className="hover:text-yellow-400 text-xl lg:text-2xl text-white" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <HiBars3BottomRight className="text-2xl" />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 pl-4 left-0 w-1/2 h-full bg-gray-800 text-white transform transition-transform z-50 duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-bold mt-2.5 text-gray-300">Menu</h1>
        <ul className="flex text-gray-400 flex-col pt-7 gap-5 font-medium">
          <li><Link to="#" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Marvel Universe</Link></li>
          <li><Link to="#" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">DC Comics</Link></li>
          <li><Link to="#" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Anime Superheroes</Link></li>
          <li><Link to="#" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Classic Comics</Link></li>
          <li><Link to="#" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Sci-Fi & Fantasy</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;