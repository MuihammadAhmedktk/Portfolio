
import  Image from "../assets/Photo_1.png"
const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <div className="w-[298px] h-[298px] xl:w-[500px] xl:h-[500px] mix-blend-lighten">
            <img src={Image} alt="my image" className="object-cover"/>
            
        </div>
      
    </div>
  )
}

export default Photo
