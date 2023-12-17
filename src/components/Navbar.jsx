import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[50px] flex justify-center items-center px-4 bg-[rgba(23,62,67,0.8)] text-[#FFFFFF]"
    >
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#3CB371] hover:duration-300 duration-300">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#3CB371] hover:duration-300 duration-300">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#3CB371] hover:duration-300 duration-300">
          <Link to="indexing-services" spy={true} smooth={true} duration={500}>
            Indexing Services
          </Link>
        </li>
        <li className="hover:text-[#3CB371] hover:duration-300 duration-300">
          <Link to="editing-services" spy={true} smooth={true} duration={500}>
            Editing Services
          </Link>
        </li>
        <li className="hover:text-[#3CB371] hover:duration-300 duration-300">
          <Link to="selected-clients" spy={true} smooth={true} duration={500}>
            Selected Clients
          </Link>
        </li>
        <li className="hover:text-[#3CB371] hover:duration-300 duration-300">
          <Link to="testimonials" spy={true} smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className="hover:text-[#3CB371] hover:duration-300 duration-300">
          <Link to="work-samples" spy={true} smooth={true} duration={500}>
            Work Samples
          </Link>
        </li>
        <li className="hover:text-[#3CB371] hover:duration-300 duration-300">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#191970] flex flex-col justify-center items-center"}>
        {/* Add your mobile menu items here */}
      </ul>
    </div>
  );
};

export default Navbar;