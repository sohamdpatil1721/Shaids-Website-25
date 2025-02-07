import React from "react";
import img1 from "../assets/images/milestone/img1.jpg";
import img2 from "../assets/images/milestone/img2.jpg";
import img3 from "../assets/images/milestone/img3.jpg";
import img4 from "../assets/images/milestone/img4.jpg";
import img5 from "../assets/images/milestone/img5.jpg";
import img6 from "../assets/images/milestone/img6.jpg";
import img7 from "../assets/images/milestone/img7.jpg";
import img8 from "../assets/images/milestone/img8.jpg";
import img9 from "../assets/images/milestone/img9.jpg";
import img10 from "../assets/images/milestone/img10.jpg";
import Navbar from "../components/Common/Navbar";

const Milestone = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#0a0b1e] min-h-screen flex flex-col items-center p-6 md:p-10">
        {/* Title */}
        <h1 className="text-purple-400 text-4xl md:text-6xl font-NordBold mb-6 text-center md:text-left">
          Milestone
        </h1>

        {/* Description */}
        <p className="text-white text-center md:text-left font-Outfit max-w-3xl md:max-w-6xl mb-8">
          Milestone is the annual event of your college, bringing together
          students, faculty, and industry professionals for a vibrant
          celebration of innovation, talent, and achievement. It features a mix
          of technical competitions, cultural performances, workshops, and guest
          lectures, providing a platform for students to showcase their skills
          and creativity. The event fosters learning, networking, and
          collaboration, making it a highlight of the academic year.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 max-w-6xl">
          <img
            src={img1}
            alt="Milestone Event 1"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img2}
            alt="Milestone Event 2"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img3}
            alt="Milestone Event 3"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img4}
            alt="Milestone Event 4"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img5}
            alt="Milestone Event 5"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          {/* <img src={img6} alt="Milestone Event 6" className="w-full h-48 object-cover rounded-lg shadow-lg" /> */}
          <img
            src={img7}
            alt="Milestone Event 7"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img8}
            alt="Milestone Event 8"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img9}
            alt="Milestone Event 9"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={img10}
            alt="Milestone Event 10"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Milestone;
