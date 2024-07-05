import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="flex justify-between px-8 bg-zinc-300 py-4 border-t-2 border-zinc-400">
      <div className="flex items-center gap-3">
        <img className="h-14" src="images/logo.png" />
        <h1 className="font-bold text-xl">Hub Havens</h1>
      </div>
      <div>
        <h1 className="font-semibold mb-3">Useful Links</h1>
        <p>WishList</p>
        <p>Terms & Conditions</p>
      </div>
      <div>
        <h1 className="font-semibold mb-3">Contact</h1>
        <span className="flex gap-2">
          <IoCallSharp className="text-xl" />
          +4 3441-321-654
        </span>
        <span  className="flex mb-2 gap-2">
          <IoIosMail className="text-xl" />
         support@sdjakfs.com
        </span>

        <img className="w-42 h-6" src="images/creditCards.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
