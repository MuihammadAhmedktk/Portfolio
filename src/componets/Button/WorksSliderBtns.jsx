import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"
import PropTypes from "prop-types"; 

const WorksSliderBtns = ({containerStyles, btnStyles, iconStyles}) => {

    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <button className={btnStyles} onClick={() => swiper.slidePrev()}><PiCaretLeftBold className={iconStyles}/></button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}><PiCaretRightBold className={iconStyles}/></button>
      
    </div>
  )
}
WorksSliderBtns.propTypes = {
    containerStyles: PropTypes.string,
    btnStyles: PropTypes.string,
    iconStyles: PropTypes.string,
};
export default WorksSliderBtns

