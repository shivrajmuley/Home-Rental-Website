import React from "react";


import { GiPalmTree } from "react-icons/gi";

import { PiWindmillDuotone, PiMountainsFill } from "react-icons/pi";

import { BsBuildingsFill } from "react-icons/bs";
import { FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";

const HomeHero = () => {
  return (
    <React.Fragment>
      <div>
        <div className=" flex  px-6 pt-16  bg-heroBanner h-[70vh] bg-no-repeat bg-cover bg-center">
          <h1 className="text-white font-light w-[900px] text-6xl ">
            Home is where the heart is! Welcome Home. Make Your Memories
          </h1>
        </div>
        <div className="flex bg-black text-white flex-col justify-center items-center pb-12 ">
          <h2 className="font-bold text-4xl my-6">Explore Top Categories</h2>
          <p className="text-center w-[650px]">
            Explore our wide range of vacation rentals that cater to all types
            of travelers. Immerse yourself in the local culture, enjoy the
            comforts of home, and create unforgettable memories in your dream
            destination.
          </p>

          <div className="flex flex-wrap mt-6  justify-center gap-12 px-[200px] items-center">
            <div className=" flex flex-col justify-center items-center bg-island text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center">
              <GiPalmTree />
              <h3 className="text-nowrap text-4xl">Islands</h3>
            </div>
            <div className=" flex flex-col justify-center items-center bg-beachfront text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center">
              <FaUmbrellaBeach />
              <h3 className="text-nowrap text-4xl">Beachfront</h3>
            </div>
            <div className=" flex flex-col justify-center items-center bg-windmill text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center">
              <PiWindmillDuotone />
              <h3 className="text-nowrap text-4xl">Windmills</h3>
            </div>
            <div className=" flex flex-col justify-center items-center bg-iconic text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center">
              <BsBuildingsFill />
              <h3 className="text-nowrap text-4xl">Iconic Cities</h3>
            </div>
            <div className=" flex flex-col justify-center items-center bg-countryside text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center">
              <PiMountainsFill />
              <h3 className="text-nowrap text-4xl">Countryside</h3>
            </div>
            <div className=" flex flex-col justify-center items-center bg-pool text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center">
              <FaSwimmingPool />
              <h3 className="text-nowrap text-4xl">Amazing Pools</h3>
            </div>
          </div>

    
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHero;
