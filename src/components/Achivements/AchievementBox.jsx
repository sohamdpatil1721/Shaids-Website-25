import React, { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const AchievementBox = ({
  achievementname,
  achievementdesc,
  achievementimg,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Phone design */}
      <div
        className={`bg-[#4B2F8A] text-white p-4 sm:hidden rounded-2xl w-full max-w-[320px] flex flex-col items-center transition-all duration-300 ${
          isExpanded ? "scale-105" : "scale-100"
        }`}
      >
        {/* Text Content */}
        <h1 className="font-NordMedium text-md text-center overflow-hidden text-ellipsis whitespace-nowrap">
          {achievementname}
        </h1>

        {/* Image */}
        <img
          src={achievementimg}
          alt="img"
          className="w-full h-auto aspect-video rounded-md self-center my-3"
        />

        {/* Description */}
        <p
          className={`font-Outfit text-sm sm:text-base text-center ${
            isExpanded ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          {achievementdesc}
        </p>

        {/* Expand Button */}
        <button
          onClick={toggleExpand}
          className="mt-3 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all duration-200"
        >
          <ArrowOutwardIcon fontSize="small" className="text-white" />
        </button>
      </div>

      {/* Desktop design */}
      <div
        className={`hidden sm:flex bg-[#4B2F8A] text-white p-6 rounded-2xl w-full max-w-[650px] transition-all duration-300 ${
          isExpanded ? "flex-row" : "flex-col items-center"
        }`}
      >
        {/* Text Section */}
        <div
          className={`flex flex-col justify-between ${
            isExpanded ? "w-1/2 text-left pr-4" : "w-full text-center"
          }`}
        >
          {/* Title */}
          <h1 className="font-NordMedium text-lg overflow-hidden text-ellipsis whitespace-nowrap">
            {achievementname}
          </h1>

          {/* Description */}
          <p
            className={`font-Outfit text-sm sm:text-base text-white/80 mt-2 ${
              isExpanded ? "line-clamp-none" : "hidden"
            }`}
          >
            {achievementdesc}
          </p>
          {isExpanded && (
            <button
              onClick={toggleExpand}
              className={`mt-3 bg-buttonGradient p-2 rounded-xl transition-all duration-200 ${
                isExpanded ? "self-start" : "self-center"
              }`}
            >
              {isExpanded ? (
                "Explore"
              ) : (
                <ArrowOutwardIcon fontSize="small" className="text-white" />
              )}
            </button>
          )}

          {/* Expand Button */}
        </div>

        {/* Image Section */}
        <div
          className={`${
            isExpanded ? "w-1/2" : "w-full h-[200px] my-3"
          } overflow-hidden rounded-md`}
        >
          <img
            src={achievementimg}
            alt="img"
            className="w-full h-full object-cover "
          />
        </div>
        {!isExpanded && (
          <button
            onClick={toggleExpand}
            className={`mt-3 bg-buttonGradient p-2 rounded-xl  transition-all duration-200 self-end ${
              isExpanded ? "self-start" : "self-end"
            }`}
          >
            <ArrowOutwardIcon fontSize="small" className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AchievementBox;
