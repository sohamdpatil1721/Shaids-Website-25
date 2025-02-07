import React from "react";
import "react-multi-carousel/lib/styles.css";
import EventButton from "../components/Events/EventButton1";
import { useNavigate } from "react-router-dom";
import mile1 from "../assets/images/mile1.json";
import technitudeAnimation from "../assets/images/mile.json";
import wrkshop from "../assets/images/wrkshop.json";
import Navbar from "../components/Common/Navbar";

export default function Events() {
  const navigate = useNavigate();

  const handleTechnitudeClick = () => {
    navigate("/Technitude");
  };

  const handleMilestoneClick = () => {
    navigate("/milestone");
  };

  const handleWorkshopClick = () => {
    navigate("/workshop");
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Navbar />
      <div className="bg-bgGradient flex flex-col justify-center min-h-screen h-full ">
        <div className="p-10 pb-5">
          {/* for mobile device */}
          <div className="flex flex-col items-center gap-6 sm:hidden text-center">
            <h2 className="text-white text-2xl font-NordBold">
              Welcome to SHAIDS Events Hub!
            </h2>

            {/* Event Components BELOW Heading, ABOVE Text */}
            <div className="grid grid-cols-1 gap-5">
              <EventButton
                heading="Technitude"
                animationData={technitudeAnimation}
                onClick={handleTechnitudeClick}
                className="h-[200px] w-[200px] rounded-tr-[80px]"
                sizeClass="h-[150px] w-[150px]"
                headingPosition="bottom"
              />
              <EventButton
                heading="Milestone"
                animationData={mile1}
                onClick={handleMilestoneClick}
                className="h-[200px] w-[200px] rounded-bl-[80px]"
                sizeClass="h-[150px] w-[150px]"
                headingPosition="top"
              />
              <EventButton
                heading="Workshop"
                animationData={wrkshop}
                onClick={handleWorkshopClick}
                className="h-[200px] w-[200px] rounded-tl-[80px]"
                sizeClass="h-[150px] w-[150px]"
                headingPosition="bottom"
              />
            </div>

            <h4 className="text-white text-lg font-NordBold">
              Explore. Innovate. Connect
            </h4>
            <p className="text-[#A576DF] text-sm font-Outfit font-semibold px-4">
              Join us for engaging workshops, inspiring seminars, and exclusive
              networking opportunities.
              <span className="block text-[#A576DF]">
                Empower your future in AI & Data Science with SHAIDS.
              </span>
            </p>
          </div>
          {/* for tablets & desktops */}
          <div className="sm:flex items-center gap-10 hidden p-10 mb-10 justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-5xl 2xl:text-5xl font-NordBold justify-right">
                Welcome to <h1 className="text-[#A576DF]"> SHAIDS Events </h1>{" "}
                Hub! <br />
              </h1>

              <h4 className="text-white text-2xl 2xl:text-3xl font-NordBold justify-right">
                {" "}
                Explore. Innovate. Connect
              </h4>

              <h5 className="text-white  text-left text-lg 3xl:text-xl font-Outfit font-semibold">
                Join us for engaging workshops,
                <br />
                inspiring seminars, and exclusive networking opportunities.
                <br />
                <h5 className="text-[#A576DF]">
                  {" "}
                  Empower your future in AI & Data <br />
                  Science with SHAIDS.{" "}
                </h5>
              </h5>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-6xl">
              <EventButton
                heading="Technitude"
                animationData={technitudeAnimation}
                onClick={handleTechnitudeClick}
                className="h-[330px] w-[275px] rounded-tr-[138px] mt-[100px]"
                sizeClass="h-[250px] w-[250px]"
                headingPosition="bottom"
              />

              <div className="grid gap-5">
                <EventButton
                  heading="Milestone"
                  animationData={mile1}
                  onClick={handleMilestoneClick}
                  className="h-[255px] w-[225px]  rounded-bl-[138px] "
                  sizeClass="h-[180px] w-[180px] "
                  headingPosition="top"
                />
                <EventButton
                  heading="Workshop"
                  animationData={wrkshop}
                  onClick={handleWorkshopClick}
                  className="h-[255px] w-[225px] rounded-tl-[138px]"
                  sizeClass="h-[180px] w-[180px]"
                  headingPosition="bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
