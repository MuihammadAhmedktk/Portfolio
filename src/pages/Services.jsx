// import { useEffect, useState} from "react";
import { PiArrowDownRightLight } from "react-icons/pi";
import { Data } from "../Date";
import { Link } from "react-router-dom";

const Services =()=>{

  return(
    <div className="min-h-[80vh] flex flex-col justify-center my-12 xl:py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {
        Data.map((item,index)=>{
          return(
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline  text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                <Link to={item.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <PiArrowDownRightLight className="text-primary text-3xl"/>
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.heading}</h2>
              {/* description */}
              <p className="text-white/60">{item.text}</p>
              {/* border */}
              <div className="border-b border-white/60 w-full"></div>
            </div>
          )
        })
      }
        </div>
      
      </div>

    </div>
  )

}

export default Services

