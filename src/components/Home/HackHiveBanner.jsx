import React from "react";
import { useNavigate } from "react-router-dom";

const HackHiveBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen py-2 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-Outfit text-center cursor-pointer">
      {/* Animated Stars */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`star star-${i + 1} absolute`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            className="size-auto fil0"
          >
            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
          </svg>
        </div>
      ))}

      <p
        className="relative text-lg font-semibold underline active:text-purple-200"
        onClick={() => navigate("/hackhive")}
      >
        Register for HackHive
      </p>

      <style>
        {`
          @keyframes star-pop {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
          }

          .star {
            width: 12px;
            height: auto;
            filter: drop-shadow(0 0 10px #fffdef);
            animation: star-pop 2s infinite ease-in-out;
          }

          /* Stars positioned around the banner text with slight overlap */
          .star-1 { top: -12px; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
          .star-2 { top: 50%; left: -12px; transform: translateY(-50%); animation-delay: 0.4s; }
          .star-3 { top: 50%; right: -12px; transform: translateY(-50%); animation-delay: 0.8s; }
          .star-4 { bottom: -12px; left: 50%; transform: translateX(-50%); animation-delay: 1.2s; }
          .star-5 { top: -10px; left: 30%; animation-delay: 1.6s; }
          .star-6 { bottom: -10px; right: 30%; animation-delay: 2s; }

          .fil0 { fill: #fffdef; }
        `}
      </style>
    </div>
  );
};

export default HackHiveBanner;
