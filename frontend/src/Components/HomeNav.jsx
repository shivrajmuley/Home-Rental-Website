import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "../redux/slice/mode";
const Nav = () => {
  const [dropDown, setDropDown] = useState(false);
  const [proImg, setProImg] = useState();
  const [key, setKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const active = useSelector((state) => state.mode.active);

  function toggleSwitchHandler() {
    dispatch(toggleSwitch());
  }
  //search functionallity
  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearchResult([]);
          return;
        }
        const res = await axios.get("https://home-rental-backend-knmc.onrender.com/properties", {
          params: { key: key, limit: 3 },
        });
        setSearchResult(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [key]);

  function logout() {
    window.localStorage.clear();
    window.location.reload();
  }

  console.log(localStorage.length);

  let emm = localStorage.getItem("profile");

  if (localStorage.length > 1) {
    useEffect(() => {
      axios
        .get("https://home-rental-backend-knmc.onrender.com/findEmail/" + emm)
        .then((response) => setProImg(response.data.image));
      console.log("yes");
    }, []);
  }

  return (
    <React.Fragment>
      <nav
        style={{
          color: active === true ? "white" : "",
          background: active === true ? "" : "rgb(22, 22, 22)",
        }}
        className="flex shadow-xl sticky top-0 z-20 justify-between px-12 py-2  items-center bg-bg2 text-white phones:px-0 phones:text-xs phones:overscroll-x-auto "
      >
        <Link to="/" className="flex items-center gap-3 phones:px-0 ">
          <img className="h-14 phones:h-8" src="https://home-rental-backend-knmc.onrender.com/uploads/logo.png" />
          <h1 className="font-bold text-xl phones:text-xs">Hub Havens</h1>
        </Link>
        <div
          style={{ borderColor: active === true ? "rgb(0, 2, 143) " : "" }}
          className="flex bg-white p-2 rounded-md px-8 justify-between text-gray-400 items-center phones:px-3 border-2 "
        >
          <input
            className="text-black w-60 z-10 outline-none phones:w-28"
            type="text"
            placeholder="Search...."
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <FaSearch />
          {searchResult && searchResult.length > 0 && (
          <div className="relative left-[-112.5%]">
            <div className="bg-white absolute w-80 top-4  pt-6 text-black  flex flex-col gap-1 overflow-y-auto h-72 px-2   phones:left-[3px] phones:top-3 phones:w-[148px] ">
              {searchResult.map((proper) => {
                return (
                  <NavLink
                    to={`/properties/${proper._id}`}
                    className="flex gap-3  text-center items-center"
                  >
                    <div>
                      <img
                        className="h-10 w-10 object-cover phones:w-8 phones:h-6  "
                        src={proper.listingPhotoPaths[0]}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm  phones:text-[10px] phones:leading-3">
                        {proper.city + " , " + proper.country}
                      </p>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
        </div>
       
        <div className="flex items-center  gap-1 phones:gap-0 ">
          {active === true ? (
            <MdDarkMode onClick={toggleSwitchHandler} className=" text-2xl" />
          ) : (
            <MdOutlineDarkMode
              onClick={toggleSwitchHandler}
              className=" text-2xl"
            />
          )}
          <Link
            to="/create-list"
            className="px-6 text-lg phones:text-xs phones:px-2"
          >
            Become A Host
          </Link>
          {localStorage.length > 0 ? (
            <img
              onClick={() => setDropDown(!dropDown)}
              className="h-9 w-9 object-cover rounded-2xl phones:h-6 phones:w-6 "
              src={proImg}
            />
          ) : (
            <FaRegUser
              onClick={() => setDropDown(!dropDown)}
              className="text-xl"
            />
          )}

          <IoMdArrowDropdown
            onClick={() => setDropDown(!dropDown)}
            className="text-xl"
          />
          {dropDown &&
            (localStorage.length > 0 ? (
              <div className="bg-white border-black border-[1px] text-black flex flex-col px-1 py-1 rounded-md absolute top-16 right-12 ">
                <NavLink
                  to="/triplist"
                  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600"
                >
                  Trip List
                </NavLink>
                <NavLink
                  to="/wishlist"
                  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600"
                >
                  Wish List
                </NavLink>
                <NavLink
                  to="/propertylist"
                  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600"
                >
                  Property List
                </NavLink>

                <NavLink
                  to="/create-list"
                  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600"
                >
                  Become A Host
                </NavLink>
                <div
                  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600"
                  onClick={logout}
                >
                  Logout
                </div>
              </div>
            ) : (
              <div className="bg-white border-black border-[1px] text-black flex flex-col px-1 py-1 rounded-md absolute top-16 right-12 phones:right-3 phones:top-12">
                <NavLink
                  to="/login"
                  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/SignUp"
                  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600"
                >
                  Sign Up
                </NavLink>
              </div>
            ))}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
