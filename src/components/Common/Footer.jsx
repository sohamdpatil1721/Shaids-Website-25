import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full text-white">
      <hr className="border-t border-white opacity-50 mb-8"/>
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-96">
        
        {/* Left Section */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <div className="flex items-center space-x-3">
            <img src="./src/assets/images/logo.svg" alt="SHAIDS Logo" className="h-16 w-16"/>
            <h2 className="text-2xl font-semibold">SHAIDS.</h2>
          </div>
          <p className="mt-2 text-base font-Outfit">
            Empowering DMCE in AI & Data Science through innovation.<br />
            Join us in learning and collaboration.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-left w-full md:w-1/2">
          <h3 className="text-lg font-semibold">DATTA MEGHE COLLEGE OF ENGINEERING</h3>
          <p className="text-base">
            SEC-3, AIROLI, NAVI MUMBAI<br />
            MAHARASHTRA - 400708, INDIA
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a href="https://www.instagram.com/dmceairoli.official/" className="text-pink-400 hover:text-pink-500 text-xl">
              <Instagram />
            </a>
            <a href="https://github.com/SHAIDS-DMCE" className="text-gray-400 hover:text-gray-500 text-xl">
              <GitHub />
            </a>
            <a href="https://www.linkedin.com/company/shaids-dmce/" className="text-blue-500 hover:text-blue-600 text-xl">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="py-2 text-center flex-col">
        <Link to="/credits">Our Developers!</Link>
        <p className="text-xs font-Outfit">© 2025 DMCE SHAIDS. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
