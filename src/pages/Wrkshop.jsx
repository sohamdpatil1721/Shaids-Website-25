import React from "react";
import img1 from "../assets/images/workshop/abhijeet.jpg";
import img2 from "../assets/images/workshop/ayush.jpg";
import img3 from "../assets/images/workshop/bhumika.jpg";
import img4 from "../assets/images/workshop/chetana.jpg";
import img5 from "../assets/images/workshop/sahil.jpg";
import img6 from "../assets/images/workshop/raaj.jpg";
import img7 from "../assets/images/workshop/volunteer3.jpg";
import img8 from "../assets/images/workshop/frame.jpg";
import img9 from "../assets/images/workshop/volunteer2.jpg";
import Navbar from "../components/Common/Navbar";

const Wrkshop = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#0a0b1e] min-h-screen flex flex-col items-center p-6 md:p-10">
        {/* Title */}
        <h1 className="text-purple-400 text-4xl md:text-6xl text-center md:text-left font-NordBold mb-6">
          WORKSHOP
        </h1>

        {/* Description */}
        <p className="text-white text-center md:text-left font-Outfit max-w-3xl md:max-w-6xl mb-8">
          Beyond Bytes is an immersive workshop designed to bridge the gap
          between imagination and innovation. Hosted under the visionary Shaids
          Department, this hands-on session dives into cutting-edge technology,
          equipping participants with practical skills and creative insights.{" "}
          <br />
          Join us to push boundaries, explore new dimensions in tech, and take
          your expertise beyond the ordinary!
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl">
          {[img1, img8, img2, img3, img4, img5, img6, img7, img9].map(
            (img, index) => (
              <img
                key={index}
                src={img}
                alt={`Workshop ${index + 1}`}
                className="w-full aspect-video object-cover rounded-lg shadow-md"
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Wrkshop;
