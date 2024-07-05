import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";

const Nav = () => {
  const [dropDown, setDropDown] = useState(false);
  const [proImg, setProImg] = useState();

  function logout() {
    window.localStorage.clear();
    window.location.reload();
  }

  console.log(localStorage.length);

  let emm = localStorage.getItem("profile");

  if (localStorage.length > 1) {
    useEffect(() => {
      axios
        .get("http://localhost:8800/findEmail/" + emm)
        .then((response) => setProImg(response.data.image));
      console.log("yes");
    }, []);
  }

  return (
    <React.Fragment>
      <nav className="flex sticky top-0 z-10 justify-between px-12 py-2 items-center bg-black text-white">
        <Link to="/" className="flex items-center gap-3 ">
          <img className="h-14" src="images/logo.png" />
          <h1 className="font-bold text-xl">Hub Havens</h1>
        </Link>
        <div className="flex bg-white p-2 rounded-md px-8 justify-between text-gray-400 items-center">
          <input
            className="text-black outline-none"
            type="text"
            placeholder="Search...."
          />
          <FaSearch />
        </div>
        <div className="flex items-center  gap-1">
          <Link to="/create-list" className="px-6 text-lg">
            Become A Host
          </Link>
          {localStorage.length > 0 ? (
            <img className="h-9 w-9 object-cover rounded-2xl" src={proImg} />
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
              <div className="bg-white border-black border-[1px] text-black flex flex-col px-1 py-1 rounded-md absolute top-16 right-12">
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
                  to="/triplist"
                  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600"
                >
                  Reservation List
                </NavLink>
                <NavLink
                  to="/create-list"
                  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600"
                >
                  Become A Host
                </NavLink>
                <div  className=" px-3 rounded-sm hover:bg-gray-300 hover:text-orange-600" onClick={logout}>Logout</div>
              </div>
            ) : (
              <div className="bg-white border-black border-[1px] text-black flex flex-col px-1 py-1 rounded-md absolute top-16 right-12">
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
