import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Shaids_logo from "../../assets/images/logo.png";
import HackHiveButton from "../HackHIveButton";
import StarBorder from "../../blocks/Animations/StarBorder/StarBorder";
import { Button } from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location (pathname)

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

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "hover:text-purple-600 text-purple-400 cursor-pointer whitespace-nowrap"
      : "hover:text-purple-400 cursor-pointer whitespace-nowrap";
  };

  return (
    <nav className="bg-transparent py-3 fixed z-50">
      <div className="relative w-screen mx-auto flex justify-between px-6 items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer text-white ">
          <Link to="/" className=" cursor-pointer font-NordBold">
            <img src={Shaids_logo} alt="logo" className="w-auto size-10" />
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <HackHiveButton />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white cursor-pointer text-lg  items-center w-auto  ">
          <li className={getLinkClass("/")}>
            <Link to="/" className=" cursor-pointer">
              Home
            </Link>
          </li>
          <li className={getLinkClass("/about-us")}>
            <Link to="/about-us" className=" cursor-pointer">
              About us
            </Link>
          </li>
          <li className={getLinkClass("/faculty")}>
            <Link to="/faculty" className=" cursor-pointer">
              Faculty
            </Link>
          </li>
          <li className={getLinkClass("/contact-us")}>
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
          <li className={getLinkClass("/")}>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className={getLinkClass("/about-us")}>
            <Link to="/about-us" onClick={() => setIsOpen(false)}>
              About us
            </Link>
          </li>
          <li className={getLinkClass("/faculty")}>
            <Link to="/faculty" onClick={() => setIsOpen(false)}>
              Faculty
            </Link>
          </li>
          <li className={getLinkClass("/contact-us")}>
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
