import React from 'react';
import Lottie from 'lottie-react';

const EventButton = ({ heading, animationData, onClick, className, sizeClass, headingPosition = "bottom" }) => {
  return (
    <button 
      onClick={onClick} 
      className={`relative bg-gradient-to-b from-[#330066] to-[#660099] p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl ${className}`}
    >
      {/* Render heading at the top if headingPosition is 'top' */}
      {headingPosition === "top" && (
        <div className="absolute top-4 left-0 right-0 text-center text-white font-NordBold">
          {heading}
        </div>
      )}

      {/* Lottie Animation */}
      <div className={`flex justify-center items-center ${sizeClass}`}>
        <Lottie 
          animationData={animationData} 
          loop={true} 
          className="w-full h-full" 
        />
      </div>

      {/* Render heading at the bottom if headingPosition is 'bottom' */}
      {headingPosition === "bottom" && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-white font-NordBold">
          {heading}
        </div>
      )}
    </button>
  );
};

export default EventButton;


