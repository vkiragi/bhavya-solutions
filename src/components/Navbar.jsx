import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[50px] flex items-center justify-center bg-[rgba(23,62,67,0.8)] text-[#FFFFFF]">
      {/* Desktop menu */}
      <ul className="hidden md:flex justify-center space-x-4">
        <li className="hover:text-[#3CB371] duration-300">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#3CB371] duration-300">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#3CB371] duration-300">
          <Link to="indexing-services" spy={true} smooth={true} duration={500}>
            Indexing Services
          </Link>
        </li>
        <li className="hover:text-[#3CB371] duration-300">
          <Link to="editing-services" spy={true} smooth={true} duration={500}>
            Editing Services
          </Link>
        </li>
        <li className="hover:text-[#3CB371] duration-300">
          <Link to="selected-clients" spy={true} smooth={true} duration={500}>
            Selected Clients
          </Link>
        </li>
        <li className="hover:text-[#3CB371] duration-300">
          <Link to="testimonials" spy={true} smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className="hover:text-[#3CB371] duration-300">
          <Link to="work-samples" spy={true} smooth={true} duration={500}>
            Work Samples
          </Link>
        </li>
        <li className="hover:text-[#3CB371] duration-300">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[rgba(23,62,67,0.8)] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="indexing-services"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Indexing Services
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="editing-services"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Editing Services
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="selected-clients"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Selected Clients
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Testimonials
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="work-samples"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Work Samples
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
