import React from "react";
import Footer from "../Components/Footer"
import Nav from "../Components/Nav"


import HomeHero from "../Components/HomeHero";
import AllHome from "../Components/AllHome";

const Home = () => {
  return (
    <div>
      <Nav />
      <HomeHero />
      <AllHome />
      <Footer />
    </div>
  );
};

export default Home;
