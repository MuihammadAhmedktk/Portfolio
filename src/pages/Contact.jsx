import { FaPhoneAlt,FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PropTypes from "prop-types";
const services = [
  "Select a service",
  "Web development",
  "UI/UX design",
  "Digital marketing",
  "Graphic design",
];
const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    text:"+(92) 33365823289"
  },
  {
    icon: <MdEmail/>,
    title: "Email",
    text:"muihammad23@gmail.com"
  },
  {
    icon: <FaLocationArrow/>,
    title: "Address",
    text:"Qadir Town near Kohat Encalve Pindi Road Kohat"
  },
]

const Contact = () => {

  const FormInput = ({ type, placeholder }) => (
    <input
      type={type}
      placeholder={placeholder}
      className="h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-1 py-1 text-base placeholder:text-white/60 outline-none"
    />
  );
  FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };
  return (
    <div className="my-6">
      <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px] ">
        {/* form */}
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-5 bg-[#27272c] rounded-lg">
          <h3 className="text-4xl text-accent">Lets work together</h3>
          <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quasi?</p>
       
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <FormInput type="text" placeholder="Your first name" />
          <FormInput type="text" placeholder="Your last name" />
          <FormInput type="email" placeholder="Your email" />
          <FormInput type="phone" placeholder="Your phone" />
  </div>
  <select
    className="w-full h-[48px] rounded-md border border-white/10 bg-primary px-4 text-base text-white placeholder:text-white/10 focus:border-accent outline-none"
  >
    {services.map((service, index) => (
      <option key={index} value={service}  className="text-black bg-white">
        {service}
      </option>
    ))}
  </select>
        <textarea placeholder="Your message" className="h-[200px] flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base palaceceholder:text-white/60 focus:border-accent outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"/>
        <button className="max-40 rounded-lg bg-accent px-2 py-3 text-black w-44">Send Messasge</button>
          </form>
       
        </div>
        {/* icons */}
        <div className="flex-1 flex items-center xl:justify-center xl:order-none mb-8 xl:mb-0 order-1">
          <ul className="flex flex-col gap-10">
              {
                info.map((item,index) =>{
                  return(
                    <li key={index} className="flex items-center gap-6">
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md   flex items-center justify-center gap-5 ">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60">{item.title}</p>
                          <h3 className="text-xl">{item.text}</h3>
                        </div>
                    </li>
                  )
                })
              }
          </ul>
        </div>
      </div>
      
    </div>
    </div>
    
  )
 
}

export default Contact
