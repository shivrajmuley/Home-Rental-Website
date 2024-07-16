import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { FaHeart } from "react-icons/fa";
import { Slide } from "react-slideshow-image";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
const TripList = (active) => {
  const [bookData, setBookData] = useState([]);
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const email = localStorage.getItem("profile");
  useEffect(() => {
    axios
      .get("https://home-rental-backend-knmc.onrender.com/booking/" + email)
      .then((response) => setBookData(response.data));
  }, []);
console.log(active.active)
  return (
    <div style={{
      color: active.active === true ? "black" : "white",
      background: active.active === true ? "white" : "rgb(45, 45, 45)",
    }}>
      <Nav />
      <section  className=" flex  min-h-96 flex-col justify-center  my-24 items-center phones:text-center phones:my-4 phones:mx-0">
        <h1 className="text-6xl tracking-wider font-medium phones:text-3xl">
          Your Trip List
        </h1>
        <section className=" flex flex-row mt-16 w-full items-center   justify-evenly flex-wrap py-12 px-32 phones:p-0  phones:gap-y-20 phones:py-14 phones:leading-4 phones:m-0  phones:w-full">
          {bookData.map((bData) => {
            return (
              <>
                {bData.listingId.map((allColl, index) => {
                  return (
                    <>
                      <div className="flex flex-col mx-2 justify-center h-full w-[250px]  phones:w-32 phones:h-28  text-start">
                        <Slide
                          autoplay={false}
                          nextArrow={<FaCircleArrowRight className="text-lg" />}
                          prevArrow={<FaCircleArrowLeft className="text-lg" />}
                        >
                          {allColl.listingPhotoPaths.map((img) => {
                            return (
                              <img
                                onClick={() => {
                                  navigate(`/properties/${allColl._id}`);
                                }}
                                className=" rounded-2xl h-[270px] w-full object-cover phones:h-24 phones:rounded-lg"
                                src={img}
                              />
                            );
                          })}
                        </Slide>
                        <h5
                          onClick={() => {
                            navigate(`/properties/${allColl._id}`);
                          }}
                          className="font-semibold pt-2 phones:text-xs phones:leading-4"
                        >
                          {allColl.city},{allColl.country}
                        </h5>
                        <span
                          onClick={() => {
                            navigate(`/properties/${allColl._id}`);
                          }}
                          className="text-sm phones:text-xs phones:leading-4"
                        >
                          {allColl.category}
                        </span>
                        <span
                          onClick={() => {
                            navigate(`/properties/${allColl._id}`);
                          }}
                          className="text-sm font-bold phones:text-[10px] phones:leading-4"
                        >
                          {bData.startDate + " - " + bData.endDate}
                        </span>
                        <span
                          onClick={() => {
                            navigate(`/properties/${allColl._id}`);
                          }}
                          className="flex text-center items-center gap-2 text-sm phones:text-xs phones:leading-4"
                        >
                          <p className="font-bold text-base phones:text-xs phones:leading-4">
                            ${bData.totalPrice}
                          </p>
                          total
                        </span>
                      </div>
                    </>
                  );
                })}
              </>
            );
          })}
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default TripList;
