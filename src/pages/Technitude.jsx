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
import Footer from "../components/Common/Footer";


const Technitude = () => {
  return (
    <div className="bg-bgGradient min-h-screen flex flex-col items-center   w-full overflow-hidden">
      <Navbar />

      {/* Title */}
      <h1 className="text-purple-400 text-3xl sm:text-4xl md:text-6xl mt-16 text-center font-NordBold mb-6">
        Technitude
      </h1>

      {/* Description */}
      <p className="text-white text-center sm:text-left font-Outfit max-w-3xl md:max-w-6xl mb-8 px-4 leading-relaxed">
        Technitude is a high-energy, two-day technical event packed with fun,
        challenges, and exciting competitions! It’s where technology meets
        thrill, bringing together students to test their skills, compete in
        unique tech-based games, and enjoy an electrifying atmosphere.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full px-4">
        {[
          image10,
          image6,
          image8,
          image1,
          image2,
          image3,
          image5,
          image7,
          image9,
        ].map((img, index) => (
          <div
            key={index}
            className="w-full h-40 sm:h-48 md:h-56 flex justify-center mb-16"
          >
            <img
              src={img}
              alt={`Technitude Event ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Technitude;
