import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md"; 
import { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";

const NavList = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/Services' },
  { label: 'Resume', href: '/Resume' },
  { label: 'Work', href: '/Work' },
  { label: 'Contact', href: '/Contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const backdropRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        backdropRef.current && !backdropRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 w-full justify-between py-5 lg:px-10 xl:px-20 px-1">
      <div className="flex justify-start items-center">
        <h1 className="text-3xl font-medium uppercase">
          <NavLink to="/">Muhammad<span className="text-accent">.</span></NavLink>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex xl:flex justify-end items-center">
        <ul className="flex gap-5">
          {NavList.map(({ label, href }, index) => (
            <li key={index} className="flex justify-center items-center">
              <NavLink
                to={href}
                className={({ isActive }) =>
                  isActive
                    ? 'text-accent underline underline-offset-8'
                    : 'hover:text-accent hover:underline hover:underline-offset-8'
                }
              >
                <div className="flex justify-center items-center gap-2">
                  {label}
                </div>
              </NavLink>
            </li>
          ))}
          <li className="flex justify-center items-center py-2 bg-accent text-black rounded-full w-24">
            <NavLink to="/contact" className="text-base font-normal">Hire Me</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden md:block relative">
        <div className="flex justify-end pr-2 z-50">
          {menuOpen ? (
            <MdClose className="text-3xl z-50 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <RxHamburgerMenu className="text-3xl z-50 cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {menuOpen && (
          <div
            ref={backdropRef}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}

        <div
          ref={menuRef}
          className={`fixed  right-10 w-60 border-2 z-50 border-white rounded-xl py-7 bg-[#1C1C22] transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-96 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-6">
            {NavList.map(({ label, href }, index) => (
              <li key={index} className="flex justify-center items-center">
                <NavLink
                  to={href}
                  className="text-xl font-normal hover:text-accent"
                  onClick={toggleMenu}
                >
                  <div className="flex justify-center items-center gap-2">
                    {label}
                  </div>
                </NavLink>
              </li>
            ))}
            <li className="flex justify-center items-center px-4 py-2 bg-accent text-black rounded-full w-28 mx-auto">
              <NavLink to="/contact" className="text-base font-normal" onClick={toggleMenu}>
                Hire Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
