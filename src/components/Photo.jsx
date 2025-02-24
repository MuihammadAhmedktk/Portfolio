
import  Image from "../assets/photo_1.png"
const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <div className="w-[298px] h-[298px] md:w-[500px] md:h-[500px]  mix-blend-lighten">
            <img src={Image} alt="my image" className="object-cover px-3 md:pl-6"/>
            
        </div>
      
    </div>
  )
}

export default Photo
