/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "../Home/Cards";
import assets from "../../assets/asset";
import Footer from "../Common/Footer";

const MobileView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLoopVideo, setShowLoopVideo] = useState(false);
  const [showDiscoverInVideo, setShowDiscoverInVideo] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState("opacity-100");
  const [discoverVideoOpacity, setDiscoverVideoOpacity] = useState(1);
  const loopVideoRef = useRef(null);
  const discoverInVideoRef = useRef(null);
  const gridSectionRef = useRef(null);

  useEffect(() => {
    // Check if returning from a card
    const searchParams = new URLSearchParams(location.search);
    const isReturning = searchParams.get("returning") === "true";

    if (isReturning) {
      // Show loop video and grid, hide other elements
      setShowLoopVideo(true);
      setShowGrid(true);
      setShowButton(false);
      setShowDiscoverInVideo(false);

      // Start playing the loop video
      if (loopVideoRef.current) {
        loopVideoRef.current.play();
      }

      // Smooth scroll to grid section after a brief delay
      setTimeout(() => {
        gridSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location]);

  const handleStartVideoEnd = () => {
    setShowLoopVideo(true);
    if (loopVideoRef.current) {
      loopVideoRef.current.play();
    }
  };

  const handleDiscoverClick = () => {
    setButtonOpacity("opacity-0");
    setTimeout(() => {
      setShowDiscoverInVideo(true);
      setShowButton(false);
      setDiscoverVideoOpacity(0);
      if (discoverInVideoRef.current) {
        discoverInVideoRef.current.play();
      }
    }, 500);
  };

  const handleDiscoverVideoEnd = () => {
    setShowGrid(true);
    // Add the returning parameter to the current URL
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("returning", "true");
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black sm:-translate-y-[150px]">
        <video
          src={assets.hero_start_vid}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleStartVideoEnd}
          className={`w-full object-cover ${
            showLoopVideo ? "hidden" : "block"
          }`}
        />
        <video
          ref={loopVideoRef}
          src={assets.hero_loop_vid}
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full object-cover ${
            showLoopVideo ? "block" : "hidden"
          }`}
        />
      </section>

      {/* Discover Section */}
      <section
        ref={gridSectionRef}
        className="relative w-full min-h-screen flex items-center justify-center bg-black scroll-mt-16 sm:-translate-y-[150px]"
      >
        {!showGrid && (
          <video
            src={assets.discover_shaids_vid}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              showDiscoverInVideo
                ? "opacity-0"
                : `opacity-${discoverVideoOpacity}`
            }`}
          />
        )}

        {showButton && !showGrid && (
          <button
            onClick={handleDiscoverClick}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-3/4 z-10
              px-6 py-2 bg-buttonGradient text-white rounded-lg hover:bg-opacity-90
              transition-opacity duration-500 ease-in-out ${buttonOpacity} cursor-pointer`}
          >
            CLICK
          </button>
        )}

        {!showGrid && (
          <video
            ref={discoverInVideoRef}
            src={assets.discover_in_vid}
            muted
            playsInline
            preload="auto"
            onEnded={handleDiscoverVideoEnd}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
              showDiscoverInVideo ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Grid Section */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            showGrid ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {showGrid && <Grid />}
        </div>
      </section>
      {/* Footer */}
      <div className="sm:-translate-y-[150px]"></div>
    </div>
  );
};

export default MobileView;
