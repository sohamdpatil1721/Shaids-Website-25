import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import achievements from "../data/data.js";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

function CompetitionCard({ title, description }) {
  return (
    <div className="bg-purple-900/40 rounded-3xl p-6 sm:p-8 backdrop-blur-sm transition-transform hover:scale-105">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 line-clamp-1">
        {title}
      </h3>
      <p className="text-purple-200 text-sm sm:text-base line-clamp-2 sm:line-clamp-none">
        {description}
      </p>
    </div>
  );
}

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
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden group">
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

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-700 text-white p-2 sm:p-3 rounded-full transition-all ${
          currentSlide === 0
            ? "opacity-50 cursor-not-allowed"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 3}
        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-700 text-white p-2 sm:p-3 rounded-full transition-all ${
          currentSlide === slides.length - 3
            ? "opacity-50 cursor-not-allowed"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Progress Dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {Array.from({ length: slides.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setAutoplay(false);
            }}
            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-3 sm:w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Achievements() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-bgGradient text-white">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mt-10">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 font-NordBold text-purple-400">
                ACHIEVEMENTS
              </h1>
              <p className="text-lg sm:text-xl  mb-6 sm:mb-8">
                Our college celebrates top academic rankings, innovative
                research, and impactful community service. We're proud of our
                students!
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-20 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              Featured Achievements
            </h2>
            <Carousel />
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-16 sm:mt-20">
            {Object.values(achievements).map((achievement, index) => (
              <CompetitionCard
                key={index}
                title={achievement.title}
                description={achievement.description}
              />
            ))}
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Achievements;
