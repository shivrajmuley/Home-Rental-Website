import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import DynamicIcons from "../Components/DynamicIcons";
import { useParams } from "react-router-dom";
import { fetchBook } from "../redux/slice/bookingSlice";

import { fetchProperty } from "../redux/slice/fetchProperties";

const Properties = (active) => {
  const dispatch = useDispatch();
  const [startDa, setStartDa] = useState();

  const email = localStorage.getItem("profile");
  const properti = useSelector((state) => state.property.data);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  let msDiff = state[0].endDate.getTime() - state[0].startDate.getTime();
  let countDays = Math.floor(msDiff / (1000 * 60 * 60 * 24));

  const [pictures, setPictures] = useState([]);
  console.log(pictures);
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    dispatch(fetchProperty({ id: params.id }));
  }, []);

  if (properti == null) {
    return null;
  } else {
    return (
       <div style={{
        color: active.active === true ? "black" : "white",
        background: active.active === true ? "white" : "rgb(45, 45, 45)",
      }}>
        <Nav />

        <section className="mx-40 my-12 flex flex-col  phones:m-0 phones:mx-3 phones:mt-4">
          <div className="flex justify-between">
            <h1 className="font-semibold text-4xl phones:text-lg">{properti.title}</h1>
          </div>

          <div className="flex gap-2 flex-wrap my-4">
            {properti.amenities
              ? properti.listingPhotoPaths.map((img) => {
                  return <img src={img} className="h-44 w-72 object-cover phones:h-20 phones:w-36" />;
                })
              : " "}
          </div>
          <p className="font-medium text-xl py-2 phones:text-sm">
            {properti.type} in {properti.city}, {properti.country}
          </p>

          <span className="text-sm font-normal  phones:text-xs">
            {properti.guestCount} guests - {properti.bedroomCount} bedroom -{" "}
            {properti.bedCount} bed - {properti.bathroomCount} bathroom
          </span>

          <div className="flex items-center gap-4 border-stone-400 border-t-[2px]  border-b-[2px] py-3 my-5">
            <img
              src={properti.creator[0].image}
              className="h-16 w-16 object-cover"
            />
            <p className="font-medium text-xl phones:text-xs">
              Hosted by {properti.creator[0].Name}
            </p>
          </div>

          <div className=" border-stone-400 pb-5 border-b-[2px]">
            <p className="font-medium text-xl phones:text-sm">Description</p>

            <span className="text-sm font-normal w-8/12 py-3 font-light phones:text-xs">
              {properti.description}
            </span>
          </div>
          <div className=" border-stone-400 pb-5 border-b-[2px]">
            <p className="font-medium text-xl mt-6">{properti.highlight}</p>
            <span className="text-sm font-normal w-8/12 py-3 font-light  phones:text-xs">
              {properti.highlightDesc}
            </span>
          </div>
          <div className="flex  justify-between phones:flex-col">
            <div>
              <p className="font-medium text-3xl mt-6 mb-6 phones:text-lg">
                What this place offers?
              </p>
              <div className="flex flex-wrap gap-7 items-center text-center">
                <div className="flex flex-row text-xl items-center  gap-6 mr-20 w-1/3 ">
                  <div className="flex flex-col">
                    <DynamicIcons />
                  </div>
                  <div className="flex flex-col text-nowrap text-start ">
                    {properti.amenities
                      ? properti.amenities.map((faciliti) => {
                          return (
                            <span className=" my-[10px] text-2xl">
                              {faciliti}
                            </span>
                          );
                        })
                      : " "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-2xl mt-6 mb-6 text-nowrap phones:text-lg">
                How long do you want to stay?
              </p>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
              <p className="font-semibold text-3xl phones:text-lg">
                ${properti.price} x {countDays} night
              </p>
              <p className="font-semibold text-3xl phones:text-lg">
                Total price : ${properti.price * countDays}
              </p>

              <span className="font-normal my-3 text-sm phones:text-xs">
                Start Date : {state[0].startDate.toDateString()}
              </span>

              <span className="font-normal text-sm phones:text-xs">
                End Date : {state[0].endDate.toDateString()}
              </span>

              <button
                onClick={() => {
                  dispatch(
                    fetchBook({
                      startDate: state[0].startDate.toDateString(),
                      endDate: state[0].endDate.toDateString(),
                      totalPrice: properti.price * countDays,
                      customerId: email,
                      listingId: properti,
                    })
                  );
                  {     
                    properti.price * countDays != 0
                      ?    toast.success("Successfully Booked")
                      :    toast.error("Please select the Date ")
                   }
                }}
                className="bg-green-600 text-white text-lg font-semibold px-28 rounded-md py-3  my-8 tracking-wider hover:bg-green-950 "
              >
                BOOKING
              </button>
                <ToastContainer autoClose={1000} bodyClassName="bg-white text-xl" />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
};

export default Properties;
