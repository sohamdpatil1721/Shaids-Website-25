/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const Card = ({ title, delay = 0, lottieSrc, href }) => {
  return (
    <div
      className="flex flex-col items-center rounded-xl backdrop-blur-xl bg-white/10 border border-white/10 shadow-xl shadow-black/40 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:bg-white/15"
      style={{
        animation: `cardPopDepth 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
        animationDelay: `${delay}ms`,
        opacity: 0,
        transform: "scale(0.4)",
      }}
    >
      <div className="w-full h-auto">
        <DotLottieReact
          src={lottieSrc}
          width={36}
          height={36}
          loop
          autoplay
          className="drop-shadow-lg"
        />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center bg-indigo-950/100 rounded-lg p-3 space-y-2">
        <h2 className="text-lg font-semibold text-white/95 mb-2 tracking-tight">
          {title}
        </h2>

        <Link
          to={href}
          className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white/90 text-sm font-medium hover:from-purple-600/50 hover:to-blue-600/40 transition-all duration-300 text-center border border-white/15 hover:border-white/25"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  delay: PropTypes.number,
  lottieSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Info = [
  {
    title: "Team",
    delay: 0,
    lottieSrc:
      "https://lottie.host/5a7bbb4e-feb8-4e73-acbe-01795cb24c81/scA1Z2Gc6R.lottie",
    href: "/team",
  },
  {
    title: "Events",
    delay: 200,
    lottieSrc:
      "https://lottie.host/dccce0ee-94e1-46ca-b5d2-f6a539043191/aznFnjSDOz.lottie",
    href: "/event",
  },
  {
    title: "Academics",
    delay: 600,
    lottieSrc:
      "https://lottie.host/ae06fa59-3bc1-4326-aa0d-053f39a131bf/Gc2ODEKx8t.lottie",
    href: "/academics",
  },
  {
    title: "Achievements",
    delay: 400,
    lottieSrc:
      "https://lottie.host/38209cd9-3a10-4ae6-b141-136dc27ecb42/C1KJqPHSEc.lottie",
    href: "/achievements",
  },
];

const Grid = ({ teams = Info }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#050729] to-[#030722] flex items-center justify-center">
      <div className="w-full max-w-lg px-4">
        <div className="grid grid-cols-2 gap-6">
          {teams.map((team, index) => (
            <Card key={index} {...team} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cardPopDepth {
          0% {
            opacity: 0;
            transform: scale(0.3);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};

Grid.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      delay: PropTypes.number,
      lottieSrc: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default Grid;
