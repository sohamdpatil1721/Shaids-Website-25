import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import achievements from "../data/data.js";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import Lottie from "lottie-react";
import achievementsLottie from "../assets/achievements.json";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const slides = Object.values(achievements);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % (slides.length - 2));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 3));
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    setAutoplay(false);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl group bg-bgGradient">
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              currentSlide * (100 / (window.innerWidth >= 768 ? 3 : 1))
            }%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-2">
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 line-clamp-1">
                      {slide.title}
                    </h3>
                    <p className="text-purple-200 text-xs sm:text-sm line-clamp-2 sm:line-clamp-none">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Achievements() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-bgGradient text-white flex flex-col ">
        <div className="container mx-auto px-4 py-12 sm:py-20 flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8 mt-10">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-NordBold text-purple-400">
              ACHIEVEMENTS
            </h1>
            <p className="text-lg sm:text-xl text-purple-200 max-w-xl">
              Our college celebrates top academic rankings, innovative research,
              and impactful community service. We're proud of our students!
            </p>
          </div>
          <Lottie
            animationData={achievementsLottie}
            loop={true}
            className="hidden sm:block w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 h-auto"
          />
        </div>

        <div className="container mx-auto px-4 mt-12 sm:mt-20 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Featured Achievements
          </h2>
          <Carousel />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Achievements;
