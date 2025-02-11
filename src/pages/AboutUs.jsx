import React from "react";
import { Bot, Users, Dumbbell, Palette } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import qr from "../assets/images/qrcode.jpg";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
function AboutUS() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-bgGradient text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 flex items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold mb-6">
              A LITTLE
              <br />
              ABOUT SHAIDS
            </h1>
            <p className="text-xl leading-relaxed">
              Welcome to SHAIDS, the Student Hive for Artificial Intelligence
              and Data Science! Founded in 2023, SHAIDS is a student-led
              initiative dedicated to building a vibrant community passionate
              about AI and Data Science.
            </p>
          </div>
          <div className="hidden lg:block">
            <DotLottieReact
              src="https://lottie.host/3c5af9dd-5ed6-46b7-b58a-362963ca32c0/EtbiFCKYgr.lottie"
              loop
              autoplay
              width={400}
              height={400}
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-[#4c2a9e] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">OUR VISION</h2>
            <p className="text-2xl max-w-3xl mx-auto">
              At SHAIDS, we enhance college life with technical, cultural, and
              sports activities, helping students develop skills, showcase
              creativity, and grow holistically.
            </p>
          </div>
        </section>

        {/* Explore Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            EXPLORE WITH US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExploreCard
              icon={<Bot className="w-12 h-12 text-[#4c2a9e]" />}
              title="Technical Growth"
              description="Explore AI and Data Science with workshops, hackathons, and expert talks."
            />
            <ExploreCard
              icon={<Palette className="w-12 h-12 text-[#4c2a9e]" />}
              title="Cultural Creativity"
              description="Showcase talents through events, exhibitions, and talent shows."
            />
            <ExploreCard
              icon={<Dumbbell className="w-12 h-12 text-[#4c2a9e]" />}
              title="Sports & Fitness"
              description="Stay active with tournaments and fitness activities."
            />
            <ExploreCard
              icon={<Users className="w-12 h-12 text-[#4c2a9e]" />}
              title="Community Building"
              description="Join a network of like-minded peers for collaboration and support."
            />
          </div>
        </section>

        <section className="bg-[#4c2a9e] py-16">
          <div className="container mx-auto px-4">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left column - Image */}
              <div className="sm:w-1/2 w-full">
                <DotLottieReact
                  src="https://lottie.host/0066b891-36e4-4145-9f5e-eba692ff85a5/GyU5FJJsCk.lottie"
                  loop
                  autoplay
                />
              </div>

              {/* Right column - Content */}
              <div className="lg:w-2/3 lg:pl-12 space-y-8">
                {/* First section - Get Involved */}
                <div className="flex flex-row items-center lg:block gap-4">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    GET <span className="text-[#b19eff]">INVOLVED</span> WITH US
                  </h2>
                </div>

                {/* Second section - Description */}
                <div>
                  <p className="text-xl lg:text-2xl">
                    Join SHAIDS and explore endless possibilities! Whether
                    you're into AI, creativity, or sports, there's a place for
                    you.
                  </p>
                </div>

                {/* Third section - Magazine and QR */}
                <div className="flex   lg:items-center gap-4 ">
                  <h2 className="text-3xl lg:text-4xl font-bold ">
                    SHAIDS <span className="text-[#b19eff]">MAGAZINE</span>
                  </h2>
                  <img
                    src={qr}
                    alt="Join SHAIDS QR Code"
                    className="size-24 sm:size-32 "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

function ExploreCard({ icon, title, description }) {
  return (
    <div className="bg-[#151630] p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
      <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
  );
}

export default AboutUS;
