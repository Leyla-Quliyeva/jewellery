import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full urbanist">
      <div className="relative min-h-105 md:min-h-0">
        <img
          src={assets.home_1}
          alt="Lujiria Home"
          className="absolute inset-0 h-full w-full object-cover md:static md:h-auto"
        />

        <div className="absolute inset-0 bg-white/40 md:hidden" />

        <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 px-6 sm:px-10 md:pl-16 lg:pl-32">
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-xs font-semibold tracking-[3px] text-gray-900 md:text-[15px] md:tracking-[4px]">
              Trend Via Designs
            </span>

            <h1 className="text-3xl font-bold tracking-wide text-black sm:text-4xl lg:text-5xl xl:text-[55px]">
              Diamond Ring Collection
            </h1>

            <p className="text-base font-semibold text-gray-900 md:text-xl">
              Leading The Trend
            </p>
          </div>

          <button className="h-11 cursor-pointer border border-black px-8 text-sm font-medium tracking-widest text-gray-800 transition-colors duration-300 hover:bg-black hover:text-white md:mt-4 md:h-12">
            <Link to="/collection"> SHOP NOW</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
