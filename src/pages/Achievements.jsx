import React, { useEffect, useState } from "react";
import Navbar from "../components/Common/Navbar";
import useEmblaCarousel from "embla-carousel-react";
import AchievementBox from "../components/Achivements/AchievementBox";
import achievements from "../data/data.js"; // Import the data

const Achievements = () => {
  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel({
    loop: false,
    speed: 15,
    slidesToScroll: 1,
    dragFree: true,
  });

  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel({
    loop: false,
    speed: 15,
    slidesToScroll: 1,
    align: "start", // Align the slides to the start
    dragFree: true,
  });

  const [expandedSlide, setExpandedSlide] = useState(null); // State for tracking clicked slide

  useEffect(() => {
    if (emblaApiMobile) {
      emblaApiMobile.reInit();
    }
    if (emblaApiDesktop) {
      emblaApiDesktop.reInit();
    }
  }, [emblaApiMobile, emblaApiDesktop]);

  const handleSlideClick = (index) => {
    setExpandedSlide(expandedSlide === index ? null : index); // Toggle expansion
  };

  const achievementsArray = Object.values(achievements);

  return (
    <div className="bg-bgGradient flex flex-col min-h-screen h-full overflow-x-hidden">
      <Navbar />
      {/* Header Section */}
      <div className="p-10 pb-5 mt-20">
        {/* Mobile Design */}
        <div className="flex flex-col gap-8 sm:hidden mb-10">
          <h1 className="text-white text-3xl font-NordBold self-center">
            Achievements
          </h1>
          <img
            src="src/assets/images/achievements_page.png"
            alt="Achievements"
            className="size-36 self-center"
          />
          <p className="text-[#A576DF] text-center text-lg font-Outfit font-semibold">
            Our college celebrates top academic rankings, innovative research,
            and impactful community service. We’re proud of our students!
          </p>
        </div>
        {/* Desktop & Tablet Design */}
        <div className="sm:flex hidden mb-10 w-full justify-around">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-white text-6xl font-NordBold">Achievements</h1>
            <p className="text-[#A576DF] text-xl leading-relaxed max-w-xl text-left mx-auto font-Outfit flex flex-col">
              Our college celebrates top academic rankings, innovative research,
              and impactful community service.{" "}
              <span>We’re proud of our students!</span>
            </p>
          </div>
          <img
            src="src/assets/images/achievements_page.png"
            alt="Achievements"
            className="size-72 object-cover object-center"
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="sm:hidden">
        {/* Mobile Carousel */}
        <div className="embla" ref={emblaRefMobile}>
          <div className="embla__container flex gap-4">
            {achievementsArray.map((achievement, index) => (
              <div key={index} className="embla__slide w-[85%] sm:w-[90%] mx-auto p-4">
                <AchievementBox
                  achievementname={achievement.title}
                  achievementdesc={achievement.description}
                  achievementimg={achievement.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop & Tablet Carousel */}
      <div className="hidden sm:flex items-center w-full justify-around">
        <div className="embla flex justify-center" ref={emblaRefDesktop}>
          <div className="embla__container flex gap-4">
            {achievementsArray.map((achievement, index) => (
              <div
                key={index}
                className={`embla__slide ${
                  expandedSlide === index ? "w-[500px]" : "w-[300px]"
                } cursor-pointer p-4`}
                onClick={() => handleSlideClick(index)}
              >
                <AchievementBox
                  achievementname={achievement.title}
                  achievementdesc={achievement.description}
                  achievementimg={achievement.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
