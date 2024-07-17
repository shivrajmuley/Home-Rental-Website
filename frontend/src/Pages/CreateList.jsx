import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import React, { useEffect, useState } from "react";
import { categories, types, facilities } from "../../public/data/data";
import { FaPlusCircle, FaMinusCircle, FaDollarSign } from "react-icons/fa";
import { MdAddPhotoAlternate, MdErrorOutline } from "react-icons/md";
import axios from "axios";
import { Email } from "../redux/slice/fetchEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
const CreateList = (active) => {
  // Step 1
  const [guestCount, setGuestCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bedCount, setBedCount] = useState(1);
  const dispatch = useDispatch();
  const host = useSelector((state) => state.email.data);
  let creator;
  if (host !== null) {
    creator = [
      {
        Name: host.firstName + " " + host.lastName,
        image: host.image,
        email: host.email,
      },
    ];
  }

  let indexguest = 0;

  function handlePlus(indexguest) {
    if (indexguest === 1) {
      setGuestCount(guestCount + 1);
    }
    if (indexguest === 2) {
      setBedroomCount(bedroomCount + 1);
    }
    if (indexguest === 3) {
      setBedCount(bedCount + 1);
    }
    if (indexguest === 4) {
      setBathroomCount(bathroomCount + 1);
    }
  }
  function handleMinus(indexguest) {
    if (indexguest === 1) {
      setGuestCount(guestCount - 1);
      if (guestCount === 1) {
        setGuestCount(1);
      }
    }
    if (indexguest === 2) {
      setBedroomCount(bedroomCount - 1);
      if (bedroomCount === 1) {
        setBedroomCount(1);
      }
    }
    if (indexguest === 3) {
      setBedCount(bedCount - 1);
      if (bedCount === 1) {
        setBedCount(1);
      }
    }
    if (indexguest === 4) {
      setBathroomCount(bathroomCount - 1);
      if (bathroomCount === 1) {
        setBathroomCount(1);
      }
    }
  }
  //select one functions
  const [categoryColor, setCategoryColor] = useState(0);
  const [typeColor, setTypeColor] = useState(0);

  //select multiple functions
  const [amenities, setAmenities] = useState([]);
  const [amenitiesIcon, setAmenitiesIcon] = useState([]);

  const handleSelectAmenities = (facility) => {
    if (amenities.includes(facility)) {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((option) => option !== facility)
      );
    } else {
      setAmenities((prev) => [...prev, facility]);
    }
  };

  //Step2
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [highlight, setHighlight] = useState();

  const [highlightDesc, setHighlightDesc] = useState();
  const [price, setPrice] = useState();
  const [imageURL, setImageURL] = useState([]);
  const [images, setImages] = useState([]);

  const [imgFile, setImgFile] = useState([]);

  function handleImgPreview(e) {
    const selectedFiles = [];
    let targetFiles = e.target.files;
    let imgDetails = [];
    const targetFilesObjects = [...targetFiles];

    targetFilesObjects.map((file) => {
      imgDetails.push(file);
      return selectedFiles.push(URL.createObjectURL(file));
    });

    setImages(selectedFiles);

    setImgFile(imgDetails);
  }
  //const all home listing
  const [category, setCategory] = useState();
  const [type, setType] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [aptSuite, setAptSuite] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [country, setCountry] = useState();
  const [formErr, setFormErr] = useState(false);
  const handleINputClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (var i = 0; i < imgFile.length; i++) {
      formData.append("file", imgFile[i]);
    }

    axios
      .post("https://home-rental-backend-knmc.onrender.com/upload", formData)
      .then((res) => setImageURL(res.data.image_url))
      .catch((err) => console.log(err));
  };

  let email = localStorage.getItem("profile");
  useEffect(() => {
    dispatch(Email({ email }));
  }, []);
  console.log(creator);

  //fetching data
if(email != null){
  const createListHandle = (e) => {
    e.preventDefault();
    console.log(imgFile);

    let listingPhotoPaths = [{}];
    listingPhotoPaths = imageURL;
    console.log(listingPhotoPaths);

    axios
      .post("https://home-rental-backend-knmc.onrender.com/homeListing", {
        creator,
        category,
        type,
        streetAddress,
        aptSuite,
        city,
        province,
        country,
        guestCount,
        bedCount,
        bedroomCount,
        bathroomCount,
       
        amenitiesIcon,
        listingPhotoPaths,
        title,
        description,
        highlight,
        highlightDesc,
        price,
      })
      .then((response) => {
        toast.success("New Home Created");
      })
      .catch((error) => toast.error("Something went wrong "));

    // Error Handle

    setFormErr(true);

    console.log(streetAddress.message);
    console.log(streetAddress);
  };
else{
   toast.error("Please login first  ")
}
}
  return (
    <div
      style={{
        color: active.active === true ? "white" : "rgb(180, 18, 255)",
        background: active.active === true ? "" : "rgb(22, 22, 22)",
      }}
      className="bg-bg2"
    >
      <Nav />
      {/* //Step1 */}
      <div className="px-16 phones:px-2 ">
        <h1 className="text-4xl text-center font-semibold pt-12 phones:text-3xl text-white ">
          Public Your Place
        </h1>
        <div
          style={{
            color: active.active === true ? "black" : "white",
            background: active.active === true ? "" : "rgb(45, 45, 45)",
          }}
          className="bg-gray-100 shadow-2xl text-black mt-12 rounded-xl px-8 py-6"
        >
          <h2 className="text-xl font-semibold  border-gray-400 border-b-[1px] pb-3 mb-8 phones:text-sm phones:pb-1 phones:mb-2">
            Step 1: Tell us about your place
          </h2>
          <p className="font-medium phones:text-xs">
            Which of these categories best describes your place?
          </p>

          {/* Icons */}
          <div
            style={{
              color: active.active === true ? "" : "white",
            }}
            className="flex flex-row  text-3xl gap-6  text-black justify-center   py-6 px-16 flex-wrap phones:p-0 phones:text-lg phones:mt-4 phones:gap-3"
          >
            {categories.map((category, index) => {
              const { Icon, label } = category;

              return (
                <div
                  style={{
                    color: categoryColor === index ? "rgb(249, 115, 22)" : "",
                    borderColor:
                      categoryColor === index ? "rgb(249, 115, 22)" : "",
                  }}
                  onClick={() => {
                    setCategoryColor(index);
                    setCategory(category.label);
                  }}
                  className="flex flex-col border-gray-300 border-2 rounded-md w-24 h-16 justify-center hover:text-orange-500  hover:border-orange-500 items-center text-center phones:w-16 phones:h-14 "
                >
                  <Icon />
                  <span className="text-sm phones:text-[10px] leading-3">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="font-medium text-xl mt-12 phones:text-xs">
            What type of place will guests have?
          </p>
          {/* types */}
          {types.map((type, index) => {
            const { Icon, name, description } = type;

            return (
              <div
                style={{
                  color: typeColor === index ? "rgb(249, 115, 22)" : "",
                  borderColor: typeColor === index ? "rgb(249, 115, 22)" : "",
                }}
                onClick={() => {
                  setTypeColor(index);
                  setType(type.name);
                }}
                className="flex border-gray-300 border-[1px] w-2/5 py-2 px-4 justify-between items-center gap-36 rounded-lg hover:text-orange-500 hover:border-orange-500 my-4 phones:h-20 phones:w-full  phones:gap-0"
              >
                <p className="font-light text-sm phones:text-[10px] phones:leading-3">
                  <h5 className="font-medium text-base phones:text-xs">
                    {name}
                  </h5>{" "}
                  {description}
                </p>
                <Icon className="text-2xl phones:text-2xl" />
              </div>
            );
          })}

          <p className="font-medium text-xl mt-12 phones:text-xs">
            Where's you place located?
          </p>
          <div className="w-1/2  mt-4 phones:text-xs phones:w-full">
            <div>
              <p className="my-2">Street Address</p>
              <input
                className="w-full px-4 outline-none rounded-md  text-black py-1 h-12 phones:h-9"
                type="text"
                placeholder="Street address"
                onChange={(e) => setStreetAddress(e.target.value)}
              />

              {formErr === true ? (
                streetAddress === "" || streetAddress === undefined ? (
                  <div className="flex mt-[1px] justify-between items-center text-center w-max gap-2 text-white bg-red-600 px-6 py-1">
                    <MdErrorOutline className="text-xl" />
                    <span className="font-sans ">
                      {" "}
                      Street Add. is Required!
                    </span>
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between py-4 gap-y-4 flex-wrap">
              <div className="w-5/12 ">
                <p className="my-2">Appartment,suite,etc.</p>
                <input
                  className="w-full px-4 outline-none rounded-md  text-black py-1 h-12 phones:h-9"
                  type="text"
                  placeholder="Apt. Suite,etc. (if applicable)"
                  onChange={(e) => setAptSuite(e.target.value)}
                />
              </div>
              <div className="w-5/12">
                <p className="my-2">City</p>
                <input
                  className="w-full px-4 outline-none rounded-md  text-black py-1 h-12 phones:h-9"
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
                {formErr === true ? (
                  city === undefined || city === "" ? (
                    <div className="flex mt-[1px] justify-between items-center text-center w-max gap-2 text-white bg-red-600 px-6 py-1 ">
                      <MdErrorOutline className="text-xl" />
                      <span className="font-sans     phones:text-wrap phones:w-10">
                        {" "}
                        City is Required!
                      </span>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  "  "
                )}
              </div>
              <div className="w-5/12">
                <p className="my-2">Province</p>
                <input
                  className="w-full px-4 outline-none rounded-md  text-black py-1 h-12 phones:h-9"
                  type="text"
                  placeholder="Province"
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>
              <div className="w-5/12">
                <p className="my-2">Country</p>
                <input
                  className="w-full px-4 outline-none rounded-md  text-black py-1 h-12 phones:h-9"
                  type="text"
                  placeholder="Country"
                  onChange={(e) => setCountry(e.target.value)}
                />
                {formErr === true ? (
                  country === undefined || country === "" ? (
                    <div className="flex mt-[1px] justify-between items-center text-center w-max gap-2 text-white bg-red-600 px-6 py-1">
                      <MdErrorOutline className="text-xl" />
                      <span className="font-sans phones:text-wrap phones:w-10">
                        {" "}
                        Country is Required!
                      </span>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  "  "
                )}
              </div>
            </div>
          </div>
          <p className="font-medium text-xl mt-6 phones:text-xs">
            Share some basics about your place
          </p>
          <div className="flex gap-6 phones:gap-3 phones:mt-3 phones:flex-wrap">
            <div className="flex gap-2 items-center border-gray-400 border-[1px] w-max px-5 py-3 rounded-md mt-4 phones:w-24 phones:h-10 phones:text-xs phones:m-0 phones:px-1">
              <span className="mr-3 font-medium text-xl phones:text-[10px] phones:m-0">
                Guests
              </span>
              <FaMinusCircle
                onClick={() => handleMinus(1)}
                className="text-xl hover:text-orange-500 phones:text-lg"
              />
              <span className="font-bold ">{guestCount}</span>
              <FaPlusCircle
                onClick={() => handlePlus(1)}
                className="text-xl hover:text-orange-500 phones:text-lg"
              />
            </div>
            <div className="flex gap-2 items-center border-gray-400 border-[1px] w-max px-5 py-3 rounded-md mt-4 phones:w-24 phones:h-10 phones:text-xs phones:m-0 phones:px-1">
              <span className="mr-3 font-medium text-xl phones:text-[10px] phones:m-0">
                Bedrooms
              </span>
              <FaMinusCircle
                onClick={() => handleMinus(2)}
                className="text-xl hover:text-orange-500 phones:text-lg"
              />
              <span className="font-bold phones:text-xs">{bedroomCount}</span>
              <FaPlusCircle
                onClick={() => handlePlus(2)}
                className="text-xl hover:text-orange-500 phones:text-lg"
              />
            </div>
            <div className="flex gap-2 items-center border-gray-400 border-[1px] w-max px-5 py-3 rounded-md mt-4 phones:w-24 phones:h-10 phones:text-xs phones:m-0 phones:px-2">
              <span className="mr-3 font-medium text-xl phones:text-[10px] phones:m-0">
                Beds
              </span>
              <FaMinusCircle
                onClick={() => handleMinus(3)}
                className="text-xl hover:text-orange-500 phones:text-lg"
              />
              <span className="font-bold">{bedCount}</span>
              <FaPlusCircle
                onClick={() => handlePlus(3)}
                className="text-xl hover:text-orange-500 phones:text-lg"
              />
            </div>
            <div className="flex gap-2 items-center border-gray-400 border-[1px] w-max px-5 py-3 rounded-md mt-4 phones:w-24 phones:h-10 phones:text-xs phones:m-0 phones:px-0">
              <span className="mr-3 font-medium text-xl phones:text-[10px] phones:m-0">
                Bathrooms
              </span>
              <FaMinusCircle
                onClick={() => handleMinus(4)}
                className="text-xl hover:text-orange-500 phones:text-lg"
              />
              <span className="font-bold">{bathroomCount}</span>
              <FaPlusCircle
                onClick={() => handlePlus(4)}
                className="text-xl hover:text-orange-500 phones:text-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Step 2 */}

      <div className="  pt-16  px-16  phones:px-2 ">
        <div
          style={{
            color: active.active === true ? "black" : "white",
            background: active.active === true ? "" : "rgb(45, 45, 45)",
          }}
          className="bg-gray-100 shadow-2xl flex-col text-black pt-12 rounded-xl px-8 py-6"
        >
          <h2 className="text-xl font-semibold  border-gray-400 border-b-[1px] pb-3 mb-8 phones:text-sm">
            Step 2: Make your place stand out
          </h2>
          <p className="font-medium phones:text-xs">
            Tell guests what your place has to offer
          </p>

          <div
            style={{
              color: active.active === true ? "" : "white",
            }}
            className="flex flex-row  text-3xl gap-6  text-black justify-center   py-6 px-16 flex-wrap phones:gap-2 phones:p-0 phones:m-3 "
          >
            {facilities.map((faciliti, index) => {
              return (
                <div
                  style={{
                    color: amenities.includes(faciliti.name)
                      ? "rgb(0, 0, 0)"
                      : "",
                    borderColor: amenities.includes(faciliti.name)
                      ? "rgb(249, 115, 22)"
                      : "",
                    backgroundColor: amenities.includes(faciliti.name)
                      ? "rgb(255, 204, 168)"
                      : "",
                  }}
                  onClick={() => {
                    handleSelectAmenities(faciliti.name);
                    amenitiesIcon.push({
                      name: faciliti.name,
                      icon: faciliti.Icon,
                    });
                    console.log(faciliti.Icon);
                  }}
                  className="flex flex-col border-gray-400 border-[1px] rounded-md w-24 h-20 justify-center hover:text-orange-500  hover:border-orange-500 items-center text-center phones:text-sm phones:w-16 phones:h-16"
                >
                  <img src={faciliti.Icon} className="h-10 w-9" />
                  <span className="text-xs phones:text-[10px] phones:leading-3 ">
                    {faciliti.name}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="font-medium my-4 phones:text-sm">
            Add some photos of your place (max - 6 Images)
          </p>
          <div className="flex gap-3 flex-wrap">
            <div className="border-gray-400 border-[1px] rounded-md w-80 h-40 items-center flex justify-center flex-col phones:text-[10px] phones:w-24 phones:h-20 phones:text-center">
              <MdAddPhotoAlternate className="text-6xl mb-2 phones:text-2xl" />
              <p>Upload from your device</p>
            </div>
            {images.slice(0, 6).map((img) => {
              return (
                <img
                  src={img}
                  className=" w-80 h-40 relative object-cover top-[-16px] rounded-md mt-4 phones:w-24 phones:h-20"
                />
              );
            })}
          </div>

          <p className="font-medium mt-12 phones:text-sm phones:mt-3">
            What make your place attractive.active and excisting?
          </p>
          <div className="flex flex-col my-2 phones:text-xs">
            <label className="my-2">Title</label>
            <input
              type="text"
              placeholder="Title"
              className="w-6/12 h-12 px-4 outline-none text-black rounded-md phones:h-10 phones:w-full"
              onChange={(e) => setTitle(e.target.value)}
            />
            {formErr === true ? (
              title === undefined || title === "" ? (
                <div className="flex mt-[1px] justify-between items-center text-center w-max gap-2 text-white bg-red-600 px-6 py-1">
                  <MdErrorOutline className="text-xl" />
                  <span className="font-sans "> Title is Required!</span>
                </div>
              ) : (
                ""
              )
            ) : (
              "  "
            )}
          </div>
          <div className="flex flex-col my-2 phones:text-xs">
            <label className="my-2">Description</label>
            <textarea
              type="text"
              placeholder="Description"
              cols="2"
              rows="2"
              className="w-6/12 h-20 px-4 py-2 outline-none text-black rounded-md phones:h-24 phones:w-full"
              onChange={(e) => setDescription(e.target.value)}
            />
            {formErr === true ? (
              description === undefined || description === "" ? (
                <div className="flex mt-[1px] justify-between items-center text-center w-max gap-2 text-white bg-red-600 px-6 py-1">
                  <MdErrorOutline className="text-xl" />
                  <span className="font-sans "> Description is Required!</span>
                </div>
              ) : (
                ""
              )
            ) : (
              "  "
            )}
          </div>
          <div className="flex flex-col my-2 phones:text-xs">
            <label className="my-2">Highlight</label>
            <input
              type="text"
              placeholder="Highlight"
              className="w-6/12 h-12 px-4 outline-none text-black rounded-md phones:h-10 phones:w-full"
              onChange={(e) => setHighlight(e.target.value)}
            />
            {formErr === true ? (
              highlight === undefined || highlight === "" ? (
                <div className="flex mt-[1px] justify-between items-center text-center w-max gap-2 text-white bg-red-600 px-6 py-1">
                  <MdErrorOutline className="text-xl" />
                  <span className="font-sans "> Highlight is Required!</span>
                </div>
              ) : (
                ""
              )
            ) : (
              "  "
            )}
          </div>
          <div className="flex flex-col my-2 phones:text-xs">
            <label className="my-2">Highlight Details</label>
            <textarea
              type="text"
              placeholder="Highlight Details"
              cols="2"
              rows="2"
              className="w-6/12 h-20 px-4 py-2 outline-none text-black rounded-md phones:h-10 phones:w-full"
              onChange={(e) => setHighlightDesc(e.target.value)}
            />
            {formErr === true ? (
              highlightDesc === undefined || highlightDesc === "" ? (
                <div className="flex mt-[1px] justify-between items-center text-center w-max gap-2 text-white bg-red-600 px-6 py-1">
                  <MdErrorOutline className="text-xl" />
                  <span className="font-sans ">
                    {" "}
                    Highlight Description is Required!
                  </span>
                </div>
              ) : (
                ""
              )
            ) : (
              "  "
            )}
          </div>
          <div className="flex flex-col my-2 phones:text-xs">
            <label className="my-2">Now set your PRICE</label>
            <div className="flex  items-center gap-2">
              <FaDollarSign className="text-4xl phones:text-2xl" />
              <input
                type="number"
                value={price}
                onClick={handleINputClick}
                min={0}
                className="w-36 h-12 px-4 outline-none appearance-none text-black rounded-md phones:h-10 phones:w-6/12"
                onChange={(e) => setPrice(e.target.value)}
              />
              {formErr === true ? (
                price === undefined || price === "" ? (
                  <div className="flex mt-[1px] justify-between items-center text-center w-max gap-2 text-white bg-red-600 px-6 py-1">
                    <MdErrorOutline className="text-xl" />
                    <span className="font-sans "> Price is Required!</span>
                  </div>
                ) : (
                  ""
                )
              ) : (
                "  "
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={
        createListHandle
        }
        className="bg-green-600 text-white text-xl font-semibold px-12 rounded-md py-4 ml-16 mt-8 mb-28 tracking-wider hover:bg-green-950 phones:text-base phones:ml-8"
      >
        Create your listing
      </button>
      <input
        type="file"
        multiple
        max={6}
        onChange={handleImgPreview}
        className="bg-black h-40 w-80 opacity-0 z-10 relative top-[-858px] left-[-247px] phones:left-10 phones:top-[-647px] phones:w-24 phones:h-20 phones:left-[-233px] "
      />
      <input
        type="file"
        multiple
        max={6}
        onChange={handleImgPreview}
        className="bg-black opacity-0 sPhone:hidden relative top-[-820px] w-24 h-20 left-[-56px] "
      />
      <ToastContainer autoClose={1000} bodyClassName="bg-white text-xl" />
      <Footer />
    </div>
  );
};

export default CreateList;
