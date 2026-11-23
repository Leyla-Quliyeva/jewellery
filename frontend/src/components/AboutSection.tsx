import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="urbanist mt-8 flex flex-col items-center justify-between gap-8 p-6 font-semibold sm:p-8 md:mt-15 md:flex-row md:gap-6 md:p-10">
      {/* Left */}
      <div className="w-full md:w-1/2 md:pl-4 lg:pl-10">
        <h3 className="text-3xl sm:text-4xl lg:text-[40px]">
          Desire Meets A New <br className="hidden md:block" />
          Style
        </h3>
        <p className="mt-5 max-w-lg text-left text-sm leading-7 sm:text-base md:mt-7 md:text-justify">
          Jewelry has always been more than just an accessory. It reflects
          personality, elegance, and individuality. Throughout history, it has
          become an essential part of personal style. At Lujiria, we believe
          every detail tells a story. Our collections celebrate beauty,
          confidence, and timeless elegance, adding a touch of sophistication to
          every moment.
        </p>
        <button className="mt-8 h-11 cursor-pointer border border-black bg-black px-8 text-sm font-medium tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-black md:mt-14 md:h-12">
          <Link to="/collection"> SHOP NOW</Link>
        </button>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2">
        <img
          className="mx-auto h-150 w-full max-w-162.5 object-cover"
          src={assets.aboutsection}
          alt="aboutsection_img"
        />
      </div>
    </section>
  );
};

export default AboutSection;
