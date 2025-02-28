import { PiArrowDownRightLight } from "react-icons/pi";
import { Data } from "../Date";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center  xl:py-3">
      <div className="container mx-auto flex justify-center">
        <div className=" max-h-[50vh] overflow-y-auto overscroll-contain scroll-smooth scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-500 p-4">
          <div className="grid grid-cols-2 gap-[40px]">
            {Data.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    to={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <PiArrowDownRightLight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Heading */}
                <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.heading}
                </h2>
                {/* Description */}
                <p className="text-white/60 h-full">{item.text}</p>
                {/* Border */}
                <div className="border-b border-white/60 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
