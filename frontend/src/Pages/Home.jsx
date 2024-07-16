import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

import HomeHero from "../Components/HomeHero";
import AllHome from "../Components/AllHome";
import HomeNav from "../Components/HomeNav";

const Home = () => {
  return (
    <div>
      <HomeNav />
      <HomeHero />
      <AllHome />
      <Footer />
    </div>
  );
};

export default Home;
