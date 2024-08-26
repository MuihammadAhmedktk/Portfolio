import PropTypes from "prop-types";

const MyInfo = ({ heading, ExperData, isAboutUs, SkillsData }) => {
    return (
      <div className="grid grid-rows-1 place-content-center items-center  ">
        {heading.map(({ headings, para }, index) => (
          <div key={index} className="flex flex-col gap-[30px] ">
            <h2 className="text-4xl font-bold">{headings}</h2>
            <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{para}</p>
          </div>
        ))}
  
        {isAboutUs ? (
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
          {ExperData?.map((data, index) => {

            return(
              <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <span className="text-white/60">{data.label}</span>
                  <span className="text-xl">{data.field}</span>

              </li>
            )
          }
            // <div key={index} className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            //   {/* Left Section */}
            //   <div >
            //     {[
            //       { label: "Name", value: data.name },
            //       { label: "Experience", value: data.Experience },
            //       { label: "Nationality", value: data.Nationality },
            //       { label: "Freelance", value: data.Freelance },
            //     ].map(({ label, value }, idx) => (
            //       <div key={idx} className="  ">
            //         <div className=" ">
            //           <label className="text-md">{label}</label>
            //         </div>
            //         <div className=" ">
            //           <p>{value}</p>
            //         </div>
            //       </div>
            //     ))}
            //   </div>
        
            //   {/* Right Section */}
            //   <div className="">
            //     {[
            //       { label: "Phone", value: data.Phone },
            //       { label: "Email", value: data.Email },
            //       { label: "Language", value: data.language },
            //     ].map(({ label, value }, idx) => (
            //       <div key={idx} className="   ">
            //         <div className="">
            //           <label className="text-md ">{label}</label>
            //         </div>
            //         <div>{value}</div>
            //       </div>
            //     ))}
            //   </div>
            // </div>


          )}
        </ul>
        
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {ExperData?.map(({ year, heading, text }, index) => (
              <div key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                <p className="text-xs text-accent">{year}</p>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{heading}</h3>
                <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full  bg-accent"></span>
                <p className="text-white/60">{text}</p>
                </div>
                
              </div>
            ))}
          </div>
        )}

        {SkillsData?.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center  gap-4  ">
            {SkillsData.map(({ name, icon }, index) => (
              <div key={index} className="relative group">
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max hidden group-hover:block p-2 bg-gray-800 text-white text-xs rounded-md">
                    {name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white "></div>
                </div>
                {/* Icon */}
                <div className="flex justify-center items-center gap-5 p-10 rounded-lg bg-[#2a2a2e] cursor-pointer">
        <div className="text-6xl group-hover:text-accent group-hover:scale-125 transition-transform duration-300">
          {icon}
        </div>
      </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

MyInfo.propTypes = {
    heading: PropTypes.arrayOf(
        PropTypes.shape({
            headings: PropTypes.string.isRequired,
            para: PropTypes.string.isRequired,
        })
    ).isRequired,
    ExperData: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                year: PropTypes.string,
                heading: PropTypes.string,
                text: PropTypes.string,
            }),
            PropTypes.shape({
                name: PropTypes.string,
                Experience: PropTypes.string,
                Nationality: PropTypes.string,
                Freelance: PropTypes.string,
                Phone: PropTypes.string,
                Email: PropTypes.string,
                language: PropTypes.string,
            }),
        ])
    ),
    isAboutUs: PropTypes.bool.isRequired,
    SkillsData: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};

export default MyInfo;


