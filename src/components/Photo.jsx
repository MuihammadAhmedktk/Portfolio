
import  Image from "../assets/Photo_1.png"
const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <div className="w-[298px] h-[298px] md:w-[420px] md:h-[420px]  mix-blend-lighten">
            <img src={Image} alt="my image" className="object-cover "/>
        </div>
      
    </div>
  )
}

export default Photo
