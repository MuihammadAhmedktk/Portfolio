import { useState } from "react";
import PropTypes from "prop-types"; 
import MultipleButton from "../MultipleButton/MultipleButton";
import MyInfo from "../MyInfo/MyInfo";
import { ExperData, EducData, AboutUsData, heading } from "../../Date";
import { FaHtml5, FaCss3, FaJsSquare, FaBootstrap, FaReact } from 'react-icons/fa'; 
import { RiTailwindCssFill } from "react-icons/ri";

const SkillsData = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaBootstrap />, name: 'BootStrap' },
    { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' }
];

const AllInfo = ({ Button }) => {
  const [selectedInfo, setSelectedInfo] = useState({
    heading: heading.Experience, 
    data: ExperData,
    type: 'Experience',
  });
const [activeButton, setActiveButton] = useState('Experience');
  const handleButtonClick = (name) => {
    setActiveButton(name);
    switch (name) {
      case 'Experience':
        setSelectedInfo({
          heading: heading.Experience,
          data: ExperData,
          type: 'Experience',
        });
        break;
      case 'Education':
        setSelectedInfo({
          heading: heading.Education,
          data: EducData,
          type: 'Education',
        });
        break;
      case 'Skills':
        setSelectedInfo({
          heading: heading.Skills,
          data: SkillsData,
          type: 'Skills',
        });
        break;
      case 'About Us':
        setSelectedInfo({
          heading: heading.AboutUs,
          data: AboutUsData,
          type: 'AboutUs',
        });
        break;
      default:
        break;
    }
  };

  const { heading: selectedHeading, data: selectedData, type } = selectedInfo; // Destructured selectedInfo

  return (
    <div className="container mx-auto grid grid-row xl:grid-cols-2 place-content-center ">
      <div className="flex flex-col gap-[60px] ">
        <MultipleButton setShowData={handleButtonClick} Button={Button} activeButton={activeButton} />
      </div>
      <div className="  min-h-[480px]  ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
        <MyInfo
          heading={selectedHeading}
          ExperData={type === 'Skills' ? [] : selectedData}
          isAboutUs={type === 'AboutUs'}
          SkillsData={type === 'Skills' ? selectedData : []}
        />
      </div>
    </div>
  );
};

AllInfo.propTypes = {
  Button: PropTypes.array.isRequired,
};

export default AllInfo;
