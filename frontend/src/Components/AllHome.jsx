import React, { useEffect, useState } from "react";
import AllCollection from "../../public/data/AllCollection";
import { FaHeart } from "react-icons/fa";
import { Slide } from "react-slideshow-image";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { categories } from "../../public/data/data";
import * as FaIcons from "react-icons/fa";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import axios from "axios";
const AllHome = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let [items, setItems] = useState([]);
  let [properties, setProperties] = useState([]);
  const [categoryColor, setCategoryColor] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8800/properties")
      .then((response) => {
        setItems(response.data);
        setProperties(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterItems = (label) => {
    if (label === "All") {
      setProperties(items);
    } else {
      const newItems = items.filter((newval) => {
        return newval.category === label;
      });
      setProperties(newItems);
    }
  };

  return (
    <>
      <div className="flex flex-row  text-3xl gap-16  bg-zinc-300 border-black border-b-2 text-black justify-center  py-12 px-16 flex-wrap ">
        {categories.map((category,index) => {
          const { Icon, label } = category;
          return (
            <div
            style={{
              color: categoryColor === index ? "rgb(249, 115, 22)" : "",
              borderColor:
                categoryColor === index ? "rgb(249, 115, 22)" : "",
            }}
              className="flex flex-col hover:text-orange-500 items-center text-center"
              onClick={() => {
                filterItems(label);
                setCategoryColor(index)
              }}
            >
              <div>
                <Icon />
              </div>
              <span className="text-lg">{label}</span>
            </div>
          );
        })}
      </div>

      <section className=" flex   bg-zinc-300 justify-evenly flex-wrap py-12 px-32">
        {properties.map((allColl) => {
          return (
            <div
              onClick={() => {
                navigate(`/properties/${allColl._id}`);
              }}
              className="flex flex-col mx-2 justify-center h-full w-[250px] "
            >
              <Slide>
                {allColl.listingPhotoPaths.map((img) => {
                  return (
                    <img
                      className=" rounded-2xl h-[270px] w-full object-cover"
                      src={img}
                    />
                  );
                })}
              </Slide>
              <h5 className="font-semibold pt-2">
                {allColl.city},{allColl.country}
              </h5>
              <span className="text-sm ">{allColl.category}</span>
              <span className="text-sm ">{allColl.type}</span>
              <span className="flex text-center items-center gap-2 text-sm">
                <p className="font-bold text-base">${allColl.price}</p> per
                night
              </span>
              <FaHeart className="text-zinc-200 relative top-[-348px] left-[210px] text-[23px] visited:text-red-600 " />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default AllHome;
