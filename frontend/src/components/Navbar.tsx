import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between -mt-7.5 -mb-11 font-semibold">
      <Link to="/">
        <img
          className="w-44 cursor-pointer"
          src={assets.logo}
          alt={"Lujiria logo"}
        />
      </Link>

      <ul className="hidden sm:flex gap-10 text-base text-black text-[18px] urbanist ">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1 ">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Sağ İkonlar */}
      <div className="flex items-center  gap-6 cursor-pointer">
        <Search className="w-6 h-6 text-black hover:text-gray-600" />

        {/* User Dropdown Menyu */}
        <div className="relative group">
          <User className="w-6 h-6 text-black hover:text-gray-600" />

          {/* Dropdown pəncərəsi  */}
          <div className="absolute right-0 pt-3 hidden group-hover:block dropdown-menu">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Səbət */}
        <Link to="/cart" className="relative p-3">
          <ShoppingBag className="w-6 h-6 text-black hover:text-gray-600" />
        </Link>

        <Menu
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Burger menu */}
      <div
        className={`fixed inset-0 z-500 overflow-hidden bg-white transition-all ${visible ? `w-full ` : `w-0`}`}
      >
        <div className="flex flex-col text-black ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <X className=" h-4  rotate-180" />
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 "
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 "
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 "
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 "
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
