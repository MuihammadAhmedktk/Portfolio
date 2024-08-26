import PropTypes from "prop-types";

const MultipleButton = ({ Button, setShowData ,activeButton }) => {
  return (
    <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-9 gap-2">
      <div>
        <h2 className="text-2xl md:text-3xl pb-4">Why hire me?</h2>
        <p className="pb-4 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      {Button.map(({ name }, index) => (
        <div key={index}>
          <div 
            className={`flex justify-center items-center mb-4 cursor-pointer rounded-lg text-center py-2 w-full ${
              activeButton === name ? 'bg-accent text-black' : 'bg-[#2a2a2e] hover:bg-accent hover:text-black'
            }`}
            onClick={() => setShowData(name)}
          >
            {name}
          </div>
        </div>
      ))}
    </div>
  );
};

MultipleButton.propTypes = {
  Button: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setShowData: PropTypes.func.isRequired,
  activeButton: PropTypes.string.isRequired,
};

export default MultipleButton;
