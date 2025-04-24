import React from "react";
import Hero from "../components/Hero";
import GenderCollections from "../components/GenderCollections";
import NewCollections from "../components/NewCollections";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollections />
      <NewCollections />
    </div>
  );
};

export default Home;
