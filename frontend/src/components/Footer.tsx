import { assets } from "@/assets/assets";
import { SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-25 ">
      <div className="h-auto flex flex-col items-center p-10 urbanist gap-12 max-sm:text-center max-sm:gap-10 lg:h-100 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
        {/* right */}
        <div className="flex flex-col items-center -mt-7 text-center lg:block lg:text-left">
        <Link to="/">
        <img
          className="w-44 cursor-pointer"
          src={assets.logo}
          alt={"Lujiria logo"}
        />
      </Link>
      
          <p className="w-full text-lg font-medium -mt-7 text-gray-800 lg:w-[75%]">
            Where timeless beauty meets modern elegance.
          </p>
          <div className="flex mt-5 gap-5 cursor-pointer justify-center lg:justify-start">
            <SiInstagram
              size={24}
              className=" hover:text-orange-500 transition"
            />
            <BsTwitter
              size={24}
              className=" hover:text-orange-500 transition"
            />
            <FaFacebook
              size={24}
              className=" hover:text-orange-500 transition"
            />
            <FaPinterest
              size={24}
              className=" hover:text-orange-500 transition"
            />
          </div>
        </div>

        {/* left */}
        <div className="flex cursor-pointer gap-10 tracking-wider justify-center max-sm:flex-col max-sm:items-center max-sm:gap-10 lg:flex-1 lg:items-center lg:pr-30 lg:gap-35">
          {" "}
          <div>
            <h2 className="font-semibold text-[22px] lg:-mt-25">Explore</h2>
            <hr className="w-10 border-black mt-3 max-sm:mx-auto" />
            <ul className="font-medium mt-8 leading-9">
              <li className=" hover:text-orange-500 transition-colors">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/collection">Shop</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/collection"> New Arrivals</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/collection"> Best Sellers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-[22px] lg:-mt-25">
              Customer Care
            </h2>
            <hr className="w-10 border-black mt-3 max-sm:mx-auto" />

            <ul className="font-medium mt-8 leading-9">
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/collection">Shipping & Returns</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                {" "}
                <Link to="/contact"> FAQ</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/contact"> Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[22px] lg:-mt-25">About Us</h2>
            <hr className="w-10 border-black mt-3 max-sm:mx-auto" />

            <ul className="font-medium mt-8 leading-9">
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/collection"> Our Story</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/about"> About Us</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/collection"> Our Collections</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-5 urbanist font-semibold tracking-wide">
        <hr className="w-full mx-auto border-gray-500 mt-3 " />
        <p className="text-center mt-5 text-gray-800">
          {" "}
          © 2026 Lujiria. Powered By Quliyeva Leyla
        </p>
      </div>
    </div>
  );
};

export default Footer;
