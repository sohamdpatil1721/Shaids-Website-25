import React from "react";
import { useNavigate } from "react-router-dom";
import Anilsir from "../assets/images/faculty/Anil-sir.jpeg";
import Anjali from "../assets/images/faculty/Anjali-maam.jpeg";
import deepti from "../assets/images/faculty/Deepti-maam.jpeg";
import irin from "../assets/images/faculty/irin.jpg";
import Monal from "../assets/images/faculty/Monal.jpg";
import neha from "../assets/images/faculty/Neha.jpeg";
import poonam from "../assets/images/faculty/poonam.jpg";
import pretty from "../assets/images/faculty/pretty.jpg";
import shraddha from "../assets/images/faculty/shraddha.jpg";
import Swati from "../assets/images/faculty/Swati.jpeg";
import hod from "../assets/images/faculty/hod.jpg";
import arti from "../assets/images/faculty/arti.jpg";
import maam from "../assets/images/faculty/maam.jpg";
import Navbar from "../components/Common/Navbar";

export default function Faculty() {
  const mentors = [
    { name: "Dr.Sanjay Madhukarrao Patil", image: hod, exp: "Professor & HOD" },
    { name: "Dr.Preeti Nitin Jain", image: pretty, exp: "Assistant Professor" },
    {
      name: "Mr.Anil Satyadeo Londhe",
      image: Anilsir,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs.Monal Nilesh Malge",
      image: Monal,
      exp: "Assistant Professor",
    },
    { name: "Mrs.Neha Kunal Kale", image: neha, exp: "Assistant Professor" },
    {
      name: "Mrs. Deepti Jeetu Janjani",
      image: deepti,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Anjali Devi Milind Patil",
      image: Anjali,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Irin Anna Solomone",
      image: irin,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs.Monal Nilesh Malge",
      image: Monal,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Poonam Amit Kamble",
      image: poonam,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Shraddha Anant Narhari(Kawji)",
      image: shraddha,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Amita Priyadarshan Suke",
      image: maam,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Aarti Raman Sonawane",
      image: arti,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Swati Sankesh Parhad",
      image: Swati,
      exp: "Assistant Professor",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-bgGradient flex flex-col items-center  justify-center min-h-screen h-full py-10 px-4">
        {/* Heading */}
        <h1 className="text-white text-2xl font-NordBold md:text-3xl font-bold text-center mb-8">
          FACULTY & MENTORS
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 font-Outfit md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-16">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Responsive Circle Images */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Centered Name */}
              <h6 className="mt-2 text-sm sm:text-base text-white text-center font-semibold">
                {mentor.name}
              </h6>
              {/* Experience */}
              <p className="text-xs sm:text-sm text-gray-300 text-center">
                {mentor.exp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
