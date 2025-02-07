import React from "react";
import image1 from "../assets/images/technitude/img1.jpg";
import image2 from "../assets/images/technitude/img2.jpg";
import image3 from "../assets/images/technitude/img3.jpg";
import image10 from "../assets/images/technitude/img10.jpg";
import image5 from "../assets/images/technitude/img5.jpg";
import image6 from "../assets/images/technitude/img6.jpg";
import image7 from "../assets/images/technitude/img7.jpg";
import image8 from "../assets/images/technitude/img8.jpg";
import image9 from "../assets/images/technitude/img9.jpg";
import Navbar from "../components/Common/Navbar";

const Technitude = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#0a0b1e] min-h-screen flex flex-col items-center p-6 md:p-10">
        {/* Title */}
        <h1 className="text-purple-400 text-4xl md:text-6xl text-center md:text-left font-NordBold mb-6">
          Technitude
        </h1>

        {/* Description */}
        <p className="text-white text-center md:text-left font-Outfit max-w-3xl md:max-w-6xl mb-8">
          Technitude is an electrifying techfest hosted by our college under the
          esteemed Shaids Department. It’s a dynamic platform where technology
          enthusiasts, innovators, and aspiring minds come together to showcase
          their skills, explore the latest tech trends, and engage in exciting
          competitions and workshops. <br />
          Join us to experience the future of tech, today!
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
          <img
            src={image10}
            alt="Technitude Event 1"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image6}
            alt="Technitude Event 2"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image8}
            alt="Technitude Event 3"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image1}
            alt="Technitude Event 4"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image2}
            alt="Technitude Event 5"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image3}
            alt="Technitude Event 6"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image5}
            alt="Technitude Event 7"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image7}
            alt="Technitude Event 8"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image9}
            alt="Technitude Event 9"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Technitude;
