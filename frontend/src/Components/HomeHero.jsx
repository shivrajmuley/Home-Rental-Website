import React from "react";


import { GiPalmTree } from "react-icons/gi";

import { PiWindmillDuotone, PiMountainsFill } from "react-icons/pi";

import { BsBuildingsFill } from "react-icons/bs";
import { FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import mode from "../redux/slice/mode";


const HomeHero = () => {
  const active = useSelector((state) => state.mode.active);
  useDispatch(mode);
  return (
    <React.Fragment>
      <div> 
        <div   className=" flex   px-6 pt-16  bg-heroBanner h-[70vh] bg-no-repeat bg-cover bg-center">
          <h1 className="text-white font-light w-[900px] text-6xl phones:text-5xl">
            Home is where the heart is! Welcome Home. Make Your Memories
          </h1>
        </div>
        <div  style={{
          color: active === true ? "black" : "white",
          background: active === true ? "white" : "rgb(45, 45, 45)",
        }} className="flex  bg-white  text-black flex-col justify-center items-center  ">
          <h2 className="font-bold text-4xl my-6 phones:text-xl phones:my-2">Explore Top Categories</h2>
          <p className="text-center w-[650px] phones:text-[8px] phones:w-72 ">
            Explore our wide range of vacation rentals that cater to all types
            of travelers. Immerse yourself in the local culture, enjoy the
            comforts of home, and create unforgettable memories in your dream
            destination.
          </p>

          <div className="flex shadow-lg pb-8 flex-wrap mt-6  justify-center gap-12 px-[200px] items-center phones:p-0">
            <div className="shadow-xl flex flex-col justify-center items-center bg-island text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center phones:w-28 phones:h-28 phones:text-3xl">
              <GiPalmTree />
              <h3 className="text-nowrap text-4xl phones:text-xl">Islands</h3>
            </div>
            <div className="shadow-xl flex flex-col justify-center items-center bg-beachfront text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center phones:w-28 phones:h-28 phones:text-3xl">
              <FaUmbrellaBeach />
              <h3 className="text-nowrap text-4xl phones:text-xl">Beachfront</h3>
            </div>
            <div className="shadow-xl flex flex-col justify-center items-center bg-windmill text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center phones:w-28 phones:h-28 phones:text-3xl">
              <PiWindmillDuotone />
              <h3 className="text-nowrap text-4xl phones:text-xl">Windmills</h3>
            </div>
            <div className="shadow-xl flex flex-col justify-center items-center bg-iconic text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center phones:w-28 phones:h-28 phones:text-3xl">
              <BsBuildingsFill />
              <h3 className="text-nowrap text-4xl phones:text-xl phones:text-wrap">Iconic Cities</h3>
            </div>
            <div className="shadow-xl flex flex-col justify-center items-center bg-countryside text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center phones:w-28 phones:h-28 phones:text-3xl ">
              <PiMountainsFill />
              <h3 className="text-nowrap text-4xl phones:text-xl phones:text-wrap">Countryside</h3>
            </div>
            <div className="shadow-xl flex flex-col text-center justify-center items-center bg-pool text-5xl rounded-xl text-white w-[250px] h-[200px]  bg-no-repeat bg-cover bg-center phones:w-28 phones:h-28 phones:text-3xl">
              <FaSwimmingPool />
              <h3 className="text-nowrap  text-4xl phones:text-xl phones:text-wrap">Amazing Pools</h3>
            </div>
          </div>

    
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHero;
