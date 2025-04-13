import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GenderCollections from "../components/GenderCollections";
import NewCollections from "../components/NewCollections";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Hero />
      <GenderCollections />
      <NewCollections />
      <Footer />
    </div>
  );
};

export default Home;
