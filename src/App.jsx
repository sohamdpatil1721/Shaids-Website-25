/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import ThreeBG from "./components/Home/ThreeBG";
import Loader from "./components/Home/Loader";
import MobileView from "./components/Home/MobileView";

const App = () => {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("hasLoaded") ? false : true;
  });

  const [showMain, setShowMain] = useState(false);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        showMain && (
          <div>
            {isMobile ? (
              <>
                <Navbar />
                <MobileView />
              </>
            ) : (
              <>
                <Navbar />
                <ThreeBG setLoading={setLoading} />
              </>
            )}
          </div>
        )
      )}
    </>
  );
};

export default App;
