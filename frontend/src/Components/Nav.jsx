import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { MdOutlineDarkMode ,MdDarkMode   } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {toggleSwitch} from "../redux/slice/mode";
const Nav = () => {
  const [dropDown, setDropDown] = useState(false);
  const [proImg, setProImg] = useState();
const dispatch = useDispatch()
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
  const active = useSelector((state) => state.mode.active);
  
  function toggleSwitchHandler() {
    dispatch(toggleSwitch());
}
  return (
    <React.Fragment>
      <nav style={{  color: active === true ? "rgb(0, 0, 0)" : "",
         background: active === true ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
      }} className="flex shadow-lg sticky top-0 z-20 justify-between px-12 py-2 items-center text-white phones:px-0 phones:text-xs phones:overscroll-x-auto">
        <Link to="/" className="flex items-center gap-3  phones:px-0">
          <img
            className="h-14 phones:h-8"
            src="http://localhost:8800/uploads/profile_1720951341682.jpg"
          />
          <h1 className="font-bold text-xl phones:text-xs">Hub Havens</h1>
        </Link>

        <div className="flex items-center  gap-1">
        {active === true?      <MdDarkMode onClick={toggleSwitchHandler}   className=" text-2xl"/> :
        <MdOutlineDarkMode  onClick={toggleSwitchHandler} className=" text-2xl"/>}
          <Link to="/create-list" className="px-6 text-lg phones:text-[10px]">
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
              <div className="bg-white border-black border-[1px] text-black flex flex-col px-1 py-1 rounded-md absolute top-16 right-12 phones:right-3 phones:top-12">
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
