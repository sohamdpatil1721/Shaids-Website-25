/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import ThreeBG from "./components/Home/ThreeBG";
import Loader from "./components/Home/Loader";
import MobileView from "./components/Home/MobileView";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("hasLoaded") ? false : true;
  });

  const [showMain, setShowMain] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setShowMain(true), 600);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  useEffect(() => {
    if (loading) {
      sessionStorage.setItem("hasLoaded", "true");
    }
  }, [loading]);

  return (
    <>
      <SpeedInsights />
      <Analytics />
      {
        <div className="bg-bgGradient min-h-screen">
          <Navbar className="relative z-50" />
          <div className="relative z-40 text-white pt-16"></div>
          <div className="relative z-0">
            {isMobile ? (
              <>
                <MobileView />
              </>
            ) : (
              <ThreeBG />
            )}
          </div>
        </div>
      }
    </>
  );
};

export default App;
