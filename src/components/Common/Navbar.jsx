import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Shaids_logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup effect
    };
  }, [isOpen]);

  return (
    <nav className="bg-transparent py-3 fixed z-50 mb-4">
      <div className="w-screen mx-auto flex justify-between px-8 items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer text-white ">
          <Link to="/" className=" cursor-pointer font-NordBold">
            <img src={Shaids_logo} alt="logo" className=" w-auto size-10  " />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white cursor-pointer">
          <li className="hover:text-purple-400 cursor-pointer">
            <Link to="/" className=" cursor-pointer">
              Home
            </Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <Link to="/about-us" className=" cursor-pointer">
              About us
            </Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <Link to="/faculty" className=" cursor-pointer">
              Faculty
            </Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer">
            <Link to="/contact-us" className=" cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-black bg-opacity-60 backdrop-blur-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out flex flex-col items-center justify-center z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon fontSize="large" />
        </button>

        {/* Mobile Menu Links */}
        <ul className="text-white text-2xl space-y-6 text-center">
          <li className="hover:text-purple-400 transition duration-300">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-purple-400 transition duration-300">
            <Link to="/about-us" onClick={() => setIsOpen(false)}>
              About us
            </Link>
          </li>
          <li className="hover:text-purple-400 transition duration-300">
            <Link to="/faculty" onClick={() => setIsOpen(false)}>
              Faculty
            </Link>
          </li>
          <li className="hover:text-purple-400 transition duration-300">
            <Link to="/contact-us" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
