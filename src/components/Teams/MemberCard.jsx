import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Skeleton from "@mui/material/Skeleton";

const MemberCard = ({ name, designation, instagramUrl, linkedinUrl, avatar, loading }) => {
  return (
    <div className="bg-[#5D3E98] rounded-lg  flex flex-col items-center shadow-[0_0_30px_rgba(93,62,152,0.3)] px-8 py-10 w-full  max-w-[250px] mx-auto font-Outfit h-full">
      {/* Avatar */}
      <div className="bg-white rounded-full p-1 w-24 h-24 overflow-hidden mb-3">
        {loading ? (
          <Skeleton variant="circular" width={96} height={96} />
        ) : (
          <img src={avatar} alt={name} className="w-full h-full object-cover rounded-full" />
        )}
      </div>

      {/* Member Info */}
      <div className="text-center space-y-1">
        {loading ? (
          <Skeleton variant="text" width={100} height={20} />
        ) : (
          <p className="text-white text-base">{name}</p>
        )}
        {loading ? (
          <Skeleton variant="text" width={120} height={15} />
        ) : (
          <p className="text-white/80 text-sm">{designation}</p>
        )}
      </div>

      {/* Social Links - Tighter spacing */}
      <div className="flex gap-2 justify-center mt-8">
        {loading ? (
          <Skeleton variant="circular" width={24} height={24} />
        ) : (
          instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <InstagramIcon fontSize="small" />
            </a>
          )
        )}
        {loading ? (
          <Skeleton variant="circular" width={24} height={24} />
        ) : (
          linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <LinkedInIcon fontSize="small" />
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default MemberCard;