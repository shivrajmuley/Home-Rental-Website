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
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import axios from "axios";
import { BsForward } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import mode from "../redux/slice/mode";
const AllHome = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let [items, setItems] = useState([]);
  let [properties, setProperties] = useState([]);
  const [categoryColor, setCategoryColor] = useState(0);
  const [productId, setProductId] = useState([]);

  const [wishlistColor, setWishlistColor] = useState([]);

  const [wishlist, setWishlist] = useState([]);
  let emm = localStorage.getItem("profile");
  console.log(emm);
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
  function removeDuplicates(productId) {
    return productId.filter((item, index) => productId.indexOf(item) === index);
  }
  console.log(productId, "after duplicate check");
  function wishlistHandle() {
    setWishlist(removeDuplicates(productId));

    if (localStorage.length > 1) {
      axios
        .post("http://localhost:8800/updateUser/" + emm, {
          wishlist: removeDuplicates(productId),
        })
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
    }
  }

  if (localStorage.length > 1) {
    useEffect(() => {
      axios.get("http://localhost:8800/findEmail/" + emm).then((response) => {
        setWishlistColor(response.data.wishlist);
        setProductId(response.data.wishlist);
      });
    }, []);
  }
  const active = useSelector((state) => state.mode.active);
  useDispatch(mode);
 
  return (
    <>
      <div
        style={{
          color: active === true ? "black" : "white",
          background: active === true ? "white" : "rgb(22, 22, 22)",
        }}
        className="flex flex-row  text-3xl gap-16  bg-black border-black border-b-2 text-white justify-center  py-12 px-16 flex-wrap phones:gap-4 phones:px-8  phones:py-3 phones:text-lg "
      >
        {categories.map((category, index) => {
          const { Icon, label } = category;
          return (
            <div
              style={{
                color: categoryColor === index ? "rgb(249, 115, 22)" : "",
                borderColor: categoryColor === index ? "rgb(249, 115, 22)" : "",
              }}
              className="flex flex-col hover:text-orange-500 items-center text-center"
              onClick={() => {
                filterItems(label);
                setCategoryColor(index);
              }}
            >
              <div>
                <Icon />
              </div>
              <span className="text-lg phones:text-wrap phones:text-sm">
                {label}
              </span>
            </div>
          );
        })}
      </div>

      <section
        style={{
          color: active === true ? "black" : "white",
          background: active === true ? "" : "rgb(45, 45, 45)",
        }}
        className=" flex    justify-evenly flex-wrap py-12 px-32 phones:p-0  phones:gap-y-20 phones:py-14 phones:leading-4 "
      >
        {properties.map((allColl, index) => {
          return (
            <>
              <div className=" flex flex-col mx-2 justify-center  h-full w-[250px] phones:w-32 py-7 phones:h-28 ">
                <Slide
                  autoplay={false}
                  nextArrow={<FaCircleArrowRight className="text-lg " />}
                  prevArrow={<FaCircleArrowLeft className="text-lg " />}
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
                  className="text-sm phones:text-[10px] phones:leading-4"
                >
                  {allColl.category}
                </span>
                <span
                  onClick={() => {
                    navigate(`/properties/${allColl._id}`);
                  }}
                  className="text-sm phones:text-[10px] phones:leading-4"
                >
                  {allColl.type}
                </span>
                <span
                  onClick={() => {
                    navigate(`/properties/${allColl._id}`);
                  }}
                  className="flex text-center items-center gap-2 text-sm phones:text-[10px] phones:leading-4"
                >
                  <p className="font-bold text-base phones:text-[10px]  phones:leading-4">
                    ${allColl.price}
                  </p>{" "}
                  per night
                </span>
                <FaHeart
                  style={{
                    color: wishlistColor.includes(allColl._id)
                      ? "rgb(255, 0, 0)"
                      : "",
                  }}
                  onClick={() => {
                    emm === null
                      ? alert("First Login")
                      : productId.includes(allColl._id)
                      ? productId.forEach(function (value, index) {
                          if (value === allColl._id) {
                            productId.splice(index, 1);
                          }
                          console.log(productId);
                        })
                      : productId.push(allColl._id);

                    wishlistHandle();
                  }}
                  className="text-zinc-200 relative top-[-348px] left-[210px] text-[23px] visited:text-red-600 "
                />
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default AllHome;
