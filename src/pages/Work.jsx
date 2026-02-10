import { PiArrowUpRightLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import weldingImage from '../assets/imge_1.png'
import weldingImage2 from '../assets/img_2.png'
import blogImage2 from '../assets/blog_img_2.png'
import raAdmin from '../../src/assets/raAdmin.jpg'
import raMain from "../assets/raAdmin.jpg"
import { useState } from "react";
import WorksSliderBtns from "../components/Button/WorksSliderBtns";

const Projects =[
  {
      num:"01",
      category:"Portfolio",
      title:"GnWelding Portfolio",
      desc:"Professional welding services specializing in precision welding, fabrication, and repairs. Quality craftsmanship for industrial, commercial, and custom projects",
      stack:[{name:"Tailwind Css"},  {name:"React"},],
      Image: weldingImage,
      Image1:weldingImage2,
      live:"https://gnwelding.netlify.app/",
      github:"",
  },
  {
      num:"02",
      category:"Blog",
      title:"Trend Scribe",
      desc:"Welcome to Trend Scribe, your go-to platform for insightful articles and fresh perspectives. We cover topics ranging from technology and lifestyle to health and education. Explore, learn, and share your thoughts with us!.",
      stack:[{name:"Tailwind Css"}, {name:"React"}, {name:"TypeScript"}, {name:"Node ts"}, {name:"ExpressJs"}, {name:"MongoDB"}],
      Image:blogImage2,
      Image1:blogImage2,
      live:"https://trendscribe-3y6o.onrender.com",
      github:"",
  },
  {
   num:"03",
      category:"Finanace",
      title:"Rafapay",
      desc:"RafaPay is a digital platform that empowers Pakistani and their households by simplifying savings, investments, and budgeting through our innovative Rafapay Committees and personalized coaching. We aim to provide an inclusive, secure, and user-friendly experience to take control of their financial lives.",
      stack:[{name:"Tailwind Css"}, {name:"React"}, {name:"TypeScript"}, {name:"Node ts"}, {name:"ExpressJs"}, {name:"MongoDB"}],
      Image:raAdmin,
      Image1:raMain,
      live:"https://committee-1neu.onrender.com",
      github:"",
  },
  //  {
  //  num:"04",
  //     category:"Blog",
  //     title:"Trend Scribe",
  //     desc:"Welcome to Trend Scribe, your go-to platform for insightful articles and fresh perspectives. We cover topics ranging from technology and lifestyle to health and education. Explore, learn, and share your thoughts with us!.",
  //     stack:[{name:"Tailwind Css"}, {name:"React"}, {name:"TypeScript"}, {name:"Node ts"}, {name:"ExpressJs"}, {name:"MongoDB"}],
  //     Image:blogImage2,
  //     Image1:blogImage2,
  //     live:"https://trendscribe-3y6o.onrender.com",
  //     github:"",
  // }

]

const Work = () => {
  const [project ,setProject] = useState(Projects[0]);
  const handleSlideChange = (Swiper) => {
          const currentSlide = Swiper.activeIndex;
          setProject(Projects[currentSlide]);}
  return (
    <div className="max-h-[80vh] flex flex-col xl:mt-[2rem] lg:mt-[25rem] md:mt-[18rem] sm:mt-[15rem] xs:mt-[15rem] mt-[12rem] justify-center">
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
                        leading-none transition-all duration-500'>{project.title}</h2>
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
                      {/* Live Link */}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <div className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                            <PiArrowUpRightLight className="text-white text-4xl group-hover:text-accent" />
                          </div>
                        </a>
                      )}
                      
                      {/* GitHub Link */}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <div className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                            <FaGithub className="text-white text-4xl group-hover:text-accent" />
                          </div>
                        </a>
                      )}
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
                  <div className="relative w-[100%] ">
                    <img
                      src={project.Image}
                      className=" object-cover w-[100vw]"
                      alt="Project"

                    />
                     <img
                      src={project.Image1}
                      className=" object-cover w-[100vw]"
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
