import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { FaHeart } from "react-icons/fa";
import { Slide } from "react-slideshow-image";
import { propertiesList } from "../redux/slice/propertyList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const WishList = (active) => {
  let email = localStorage.getItem("profile");
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(propertiesList({ email }));
  }, []);
  let trailData = useSelector((state) => state.propertylist.data);

  console.log(trailData);

  if (trailData == null) {
    return null;
  } else {
    return (
      <div style={{
        color: active.active === true ? "black" : "white",
        background: active.active === true ? "white" : "rgb(45, 45, 45)",
      }}>
        <Nav />

        <section className=" flex min-h-96 flex-col justify-center  my-24 items-center phones:text-center phones:my-4 phones:mx-0 ">
          <h1 className="text-6xl tracking-wider font-medium phones:text-3xl ">
            Your Wish List
          </h1>
          <section className=" flex  mt-16 w-10/12 items-center   justify-evenly flex-wrap py-12 px-32 phones:p-0  phones:gap-y-20 phones:py-14 phones:leading-4 phones:m-0  phones:w-full">
            {trailData.map((allColl, index) => {
              return (
                <>
                  <div className="flex flex-col mx-2 justify-center h-full w-[250px] phones:w-32 phones:h-28  text-start">
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
                      <p className="font-bold text-base phones:text-[10px] phones:leading-4">
                        ${allColl.price}
                      </p>{" "}
                      per night
                    </span>
                    <FaHeart className="text-red-600 relative top-[-348px] left-[210px] text-[23px] visited:text-red-600 " />
                  </div>
                </>
              );
            })}
          </section>
        </section>
        <Footer />
      </div>
    );
  }
};
export default WishList;
