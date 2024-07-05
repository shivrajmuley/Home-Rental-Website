import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import React, { useEffect, useState } from "react";
import { categories, types, facilities } from "../../public/data/data";
import { FaPlusCircle, FaMinusCircle, FaDollarSign } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import axios from "axios";

const CreateList = () => {
  // Step 1
  const [guestCount, setGuestCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bedCount, setBedCount] = useState(1);
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
  const [categoryColor, setCategoryColor] = useState(-1);
  const [typeColor, setTypeColor] = useState(-1);

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

  const handleINputClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (var i = 0; i < imgFile.length; i++) {
      formData.append("file", imgFile[i]);
    }

    axios
      .post("http://localhost:8800/upload", formData)
      .then((res) => setImageURL(res.data.image_url))
      .catch((err) => console.log(err));
  };

  //fetching data
  const createListHandle = (e) => {
    e.preventDefault();
    console.log(imgFile);

    let listingPhotoPaths = [{}];
    listingPhotoPaths = imageURL;
    console.log(listingPhotoPaths);

    axios
      .post("http://localhost:8800/homeListing", {
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
        amenities,
        amenitiesIcon,
        listingPhotoPaths,
        title,
        description,
        highlight,
        highlightDesc,
        price,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Nav />
      {/* //Step1 */}
      <div className="bg-white px-16">
        <h1 className="text-4xl font-semibold mt-12">Public Your Place</h1>
        <div className="bg-stone-700 text-white mt-12 rounded-xl px-8 py-6">
          <h2 className="text-xl font-semibold  border-gray-400 border-b-[1px] pb-3 mb-8">
            Step 1: Tell us about your place
          </h2>
          <p className="font-medium">
            Which of these categories best describes your place?
          </p>

          {/* Icons */}
          <div className="flex flex-row  text-3xl gap-6  text-white justify-center   py-6 px-16 flex-wrap ">
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
                  className="flex flex-col border-white border-2 rounded-md w-24 h-16 justify-center hover:text-orange-500  hover:border-orange-500 items-center text-center"
                >
                  <Icon />
                  <span className="text-sm">{label}</span>
                </div>
              );
            })}
          </div>

          <p className="font-medium text-xl mt-12">
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
                className="flex border-white border-[1px] w-2/5 py-2 px-4 justify-between items-center gap-36 rounded-lg hover:text-orange-500 hover:border-orange-500 my-4"
              >
                <p className="font-light text-sm">
                  <h5 className="font-medium text-base">{name}</h5>{" "}
                  {description}
                </p>
                <Icon className="text-2xl" />
              </div>
            );
          })}

          <p className="font-medium text-xl mt-12">
            Where's you place located?
          </p>
          <div className="w-1/2  mt-4">
            <div>
              <p className="my-2">Street Address</p>
              <input
                className="w-full px-4 outline-none rounded-md  text-black py-1 h-12"
                type="text"
                placeholder="Street address"
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </div>
            <div className="flex justify-between py-4 gap-y-4 flex-wrap">
              <div className="w-5/12 ">
                <p className="my-2">Appartment,suite,etc.</p>
                <input
                  className="w-full px-4 outline-none rounded-md  text-black py-1 h-12"
                  type="text"
                  placeholder="Apt. Suite,etc. (if applicable)"
                  onChange={(e) => setAptSuite(e.target.value)}
                />
              </div>
              <div className="w-5/12">
                <p className="my-2">City</p>
                <input
                  className="w-full px-4 outline-none rounded-md  text-black py-1 h-12"
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="w-5/12">
                <p className="my-2">Province</p>
                <input
                  className="w-full px-4 outline-none rounded-md  text-black py-1 h-12"
                  type="text"
                  placeholder="Province"
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>
              <div className="w-5/12">
                <p className="my-2">Country</p>
                <input
                  className="w-full px-4 outline-none rounded-md  text-black py-1 h-12"
                  type="text"
                  placeholder="Country"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
          </div>
          <p className="font-medium text-xl mt-6">
            Share some basics about your place
          </p>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center border-white border-[1px] w-max px-5 py-3 rounded-md mt-4">
              <span className="mr-3 font-medium text-xl">Guests</span>
              <FaMinusCircle
                onClick={() => handleMinus(1)}
                className="text-xl hover:text-orange-500"
              />
              <span className="font-bold">{guestCount}</span>
              <FaPlusCircle
                onClick={() => handlePlus(1)}
                className="text-xl hover:text-orange-500"
              />
            </div>
            <div className="flex gap-2 items-center border-white border-[1px] w-max px-5 py-3 rounded-md mt-4">
              <span className="mr-3 font-medium text-xl">Bedrooms</span>
              <FaMinusCircle
                onClick={() => handleMinus(2)}
                className="text-xl hover:text-orange-500"
              />
              <span className="font-bold">{bedroomCount}</span>
              <FaPlusCircle
                onClick={() => handlePlus(2)}
                className="text-xl hover:text-orange-500"
              />
            </div>
            <div className="flex gap-2 items-center border-white border-[1px] w-max px-5 py-3 rounded-md mt-4">
              <span className="mr-3 font-medium text-xl">Beds</span>
              <FaMinusCircle
                onClick={() => handleMinus(3)}
                className="text-xl hover:text-orange-500"
              />
              <span className="font-bold">{bedCount}</span>
              <FaPlusCircle
                onClick={() => handlePlus(3)}
                className="text-xl hover:text-orange-500"
              />
            </div>
            <div className="flex gap-2 items-center border-white border-[1px] w-max px-5 py-3 rounded-md mt-4">
              <span className="mr-3 font-medium text-xl">Bathrooms</span>
              <FaMinusCircle
                onClick={() => handleMinus(4)}
                className="text-xl hover:text-orange-500"
              />
              <span className="font-bold">{bathroomCount}</span>
              <FaPlusCircle
                onClick={() => handlePlus(4)}
                className="text-xl hover:text-orange-500"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Step 2 */}

      <div className="bg-white px-16">
        <div className="bg-stone-700 flex-col text-white mt-12 rounded-xl px-8 py-6">
          <h2 className="text-xl font-semibold  border-gray-400 border-b-[1px] pb-3 mb-8">
            Step 2: Make your place stand out
          </h2>
          <p className="font-medium">
            Tell guests what your place has to offer
          </p>

          <div className="flex flex-row  text-3xl gap-6  text-white justify-center   py-6 px-16 flex-wrap ">
            {facilities.map((faciliti, index) => {
              const { Icon, name } = faciliti;

              return (
                <div
                  style={{
                    color: amenities.includes(faciliti.name)
                      ? "rgb(249, 115, 22)"
                      : "",
                    borderColor: amenities.includes(faciliti.name)
                      ? "rgb(249, 115, 22)"
                      : "",
                  }}
                  onClick={() => {
                    handleSelectAmenities(faciliti.name);
                    amenitiesIcon.push(Icon.name);
                    console.log(Icon)
                  }}
                  className="flex flex-col border-white border-[1px] rounded-md w-40 h-20 justify-center hover:text-orange-500  hover:border-orange-500 items-center text-center"
                >
                  <Icon />
                  <span className="text-sm">{name}</span>
                </div>
              );
            })}
          </div>
          <p className="font-medium my-4">Add some photos of your place</p>
          <div className="flex gap-3 flex-wrap">
            <div className="border-white border-[1px] rounded-md w-80 h-40 items-center flex justify-center flex-col ">
              <MdAddPhotoAlternate className="text-6xl mb-2" />
              <p>Upload from your device</p>
            </div>
            {images.slice(0, 6).map((img) => {
              return (
                <img
                  src={img}
                  className=" w-80 h-40 relative object-cover top-[-16px] rounded-md mt-4"
                />
              );
            })}
          </div>

          <p className="font-medium mt-12">
            What make your place attractive and excisting?
          </p>
          <div className="flex flex-col my-2">
            <label className="my-2">Title</label>
            <input
              type="text"
              placeholder="Title"
              className="w-6/12 h-12 px-4 outline-none text-black rounded-md"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="my-2">Description</label>
            <textarea
              type="text"
              placeholder="Description"
              cols="2"
              rows="2"
              className="w-6/12 h-20 px-4 py-2 outline-none text-black rounded-md"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="my-2">Highlight</label>
            <input
              type="text"
              placeholder="Highlight"
              className="w-6/12 h-12 px-4 outline-none text-black rounded-md"
              onChange={(e) => setHighlight(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="my-2">Highlight Details</label>
            <textarea
              type="text"
              placeholder="Highlight Details"
              cols="2"
              rows="2"
              className="w-6/12 h-20 px-4 py-2 outline-none text-black rounded-md"
              onChange={(e) => setHighlightDesc(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="my-2">Now set your PRICE</label>
            <div className="flex  items-center gap-2">
              <FaDollarSign className="text-4xl" />
              <input
                type="number"
                value={price}
                onClick={handleINputClick}
                min={0}
                className="w-36 h-12 px-4 outline-none appearance-none text-black rounded-md"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={createListHandle}
        className="bg-green-600 text-white text-xl font-semibold px-12 rounded-md py-4 ml-16 mt-8 mb-28 tracking-wider hover:bg-green-950 "
      >
        Create your listing
      </button>
      <input
        type="file"
        multiple
        max={6}
        onChange={handleImgPreview}
        className="bg-black h-40 w-80 opacity-0 z-10 absolute top-[2189px] left-[95px]"
      />
      <Footer />
    </>
  );
};

export default CreateList;
