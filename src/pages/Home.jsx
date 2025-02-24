import Soical from "../componets/Soical";
import Photo from "../componets/Photo";
import Stats from "../componets/Stats";
import MyCv from "../componets/myCv";
const Home = () => {
  return (
    <div className="h-full pt-10">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pl-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Front-End Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /><span className="text-accent">Muhammad Ahmed</span></h1>
              <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experience and I am proficient in varous progamming language and technologies.
              </p>
              {/* button */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <MyCv/>
                <div className="mb-8 xl:mb-0">
                    <Soical containerStyle="flex gap-6"
                     iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "/>
                </div>
              </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 shadow-lg rounded-full shadow-accent">
            <Photo/>
          </div>
        </div>
      </div>
    <Stats/>
    </div>
  )
}

export default Home






