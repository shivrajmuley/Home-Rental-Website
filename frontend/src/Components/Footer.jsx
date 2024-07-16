import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import mode from "../redux/slice/mode";
const Footer = () => {
  const dispatch = useDispatch();
  dispatch(mode);
  const active = useSelector((state) => state.mode.active);
  console.log(active);
  return (
    <footer
      style={{
        color: active === true ? "rgb(0, 0, 0)" : "white",
        background: active === true ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
      }}
      className="flex shadow-xl justify-between px-8 bg-black py-4 border-t-2 border-zinc-400 phones:text-xs phones:p-1"
    >
      <div className="flex items-center gap-3 ">
        <img
          className="h-14 phones:h-8"
          src="https://home-rental-backend-knmc.onrender.com/uploads/profile_1720951341682.jpg"
        />
        <h1 className="font-bold text-xl phones:text-sm">Hub Havens</h1>
      </div>
      <div>
        <h1 className="font-semibold mb-3">Useful Links</h1>
        <NavLink className="phones:text-[10px]" to="/wishlist">
          WishList
        </NavLink>
        <p className="phones:text-[10px]">Terms & Conditions</p>
      </div>
      <div>
        <h1 className="font-semibold mb-3">Contact</h1>
        <span className="flex gap-2">
          <IoCallSharp className="text-xl phones:text-xs" />
          +4 3441-321-654
        </span>
        <span className="flex mb-2 gap-2 phones:text-xs">
          <IoIosMail className="text-xl phones:text-sm" />
          support@sdjakfs.com
        </span>

        <img
          className="w-42 h-6 phones:w-24 phones:h-4"
          src="images/creditCards.png"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
