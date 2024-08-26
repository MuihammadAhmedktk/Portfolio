
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/your-profile" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/your-profile" },
  { icon: <FaYoutube />, path: "https://youtube.com/channel/your-channel" },
  { icon: <FaTwitter />, path: "https://twitter.com/your-profile" },
];

const Social = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
      {socials.map((items, index) => (
        <Link
          key={index}
          to={{ pathname: items.path }}
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