
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MuihammadAhmedktk" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/muhammad-ahmed-80033119a/" },

];

const Social = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
      {socials.map((items, index) => (
        <Link
          key={index}
          to={items.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {items.icon}
        </Link>
      ))}
    </div>
  );
};

Social.propTypes = {
  containerStyle: PropTypes.string.isRequired,
  iconStyles: PropTypes.string.isRequired,
};

export default Social;