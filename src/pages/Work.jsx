import { PiArrowUpRightLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import thumb1 from '../assets/thumb1.png'

import { useState } from "react";
import WorksSliderBtns from "../componets/Button/WorksSliderBtns";

const Projects =[
  {
      num:"01",
      category:"Frontend",
      title:"Frontend Project",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stack:[{name:"HTML 5"}, {name:"CSS 3"}, {name:"JavaScript"}, {name:"React"}],
      Image: thumb1,
      live:"",
      github:"",
  },
  {
      num:"02",
      category:"Frontend",
      title:"Frontend Project",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stack:[{name:"HTML 5"}, {name:"CSS 3"}, {name:"JavaScript"}, {name:"React"}],
      Image:thumb1,
      live:"",
      github:"",
  }

]

const Work = () => {
  const [project ,setProject] = useState(Projects[0]);
  const handleSlideChange = (Swiper) => {
          const currentSlide = Swiper.activeIndex;
          setProject(Projects[currentSlide]);}
  return (
    <div className="min-h-[80vh] flex flex-col py-12 justify-center xl:px-0">
    <div className="container mx-auto ">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-8xl leading-none  text-outline font-extrabold ">
                            {project.num}
                        </div>
                        {/* category */}
                        <h2 className='text-[42px] font-bold text-white capitalize group-hover:text-accent 
                        leading-none transition-all duration-500'>{project.category} Project</h2>
                        {/* descprition */}
                        <p className=' text-white/60'>{project.desc}</p>
                        {/* stack */}
                        <ul className='flex gap-4'>
                            {project.stack.map((item,index) => {
                                 return(
                                <li key={index} className="tex-xl text-accent">
                                {item.name}
                                {index !== project.stack.length-1 && ','}
                                </li>
                                );
                            })}
                        </ul>
                        <div className='border border-white/20'></div>
                        {/* button */}
                        <div className='flex items-center gap-4'>
                            <div className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group' ><a  href="#"><PiArrowUpRightLight className="text-white text-4xl group-hover:text-accent"/></a></div>
                            <div className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group' ><a  href="#"><FaGithub className="text-white text-4xl group-hover:text-accent"/></a></div>
                        </div>
                    </div>
                    
                    </div>

            <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {Projects.map((project, index) => {
                return  <SwiperSlide key={index} className="w-full">
                <div className=" w-full relative group flex justify-center items-center bg-pink-50/20 ">
                {/* overlay */}
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                {/* image */}
                  <div className="relative w-full ">
                    <img
                      src={project.Image}
                      className=" object-cover"
                      alt="Project"

                    />
                  </div>
                </div>
              </SwiperSlide>
               
                })}
              <WorksSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
            </div>
    </div>
 </div>
  )
}

export default Work
