/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
// import assets from "../";
import Grid from "../Home/Cards";
import assets from "../../assets/asset";
// import StarBorder from "./Starborder";
const MobileView = () => {
  const [showLoopVideo, setShowLoopVideo] = useState(false);
  const [showDiscoverInVideo, setShowDiscoverInVideo] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState("opacity-100");
  const [discoverVideoOpacity, setDiscoverVideoOpacity] = useState(1);
  const loopVideoRef = useRef(null);
  const discoverInVideoRef = useRef(null);

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
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] md:h-auto md:aspect-video overflow-hidden">
        <video
          src={assets.hero_start_vid}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleStartVideoEnd}
          className={`w-full h-full object-cover absolute top-0 left-0 ${
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
          className={`w-full h-full object-cover absolute top-0 left-0 ${
            showLoopVideo ? "block" : "hidden"
          }`}
        />
      </section>

      {/* Discover Section */}
      <section className="relative w-full h-[100vh] overflow-hidden">
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

        {showButton && (
          <button
            onClick={handleDiscoverClick}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[40px] z-10
              px-6 py-2 bg-white text-black rounded-full hover:bg-opacity-90
              transition-opacity duration-500 ease-in-out ${buttonOpacity}`}
          >
            CLICK
          </button>
          // <StarBorder
          //   as="button"
          //   className="custom-class"
          //   color="cyan"
          //   speed="5s"
          // >
          //   Click here
          // </StarBorder>
        )}

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
          style={{ playbackRate: 2 }}
        />

        {/* Grid Section */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            showGrid ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {showGrid && <Grid />}
        </div>
      </section>
    </div>
  );
};

export default MobileView;
