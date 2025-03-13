import { useNavigate } from "react-router-dom";

const HackHiveButton = () => {
  const navigate = useNavigate();

  return (
    <div className="relative inline-block">
      {/* Animated Stars */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`star star-${i + 1} absolute`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 784.11 815.53"
            className="size-auto fil0"
          >
            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
          </svg>
        </div>
      ))}

      {/* Button with Navigation */}
      <button
        onClick={() => navigate("/hackhive")}
        className="relative size-full rounded-full flex justify-center items-center px-6 py-2 cursor-pointer gap-3 bg-gradient-to-t from-purple-500 to-indigo-600 transition-all duration-500 ease-in-out transform overflow-hidden border-2 border-transparent"
      >
        <span className="font-semibold text-white text-base">HackHive</span>
        <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-50 animate-border-move shadow-[0_0_8px_rgba(159,122,234,0.8)]"></div>
      </button>

      <style>
        {`
          @keyframes border-move {
            0% { clip-path: inset(0 0 98% 0); }
            25% { clip-path: inset(0 98% 0 0); }
            50% { clip-path: inset(98% 0 0 0); }
            75% { clip-path: inset(0 0 0 98%); }
            100% { clip-path: inset(0 0 98% 0); }
          }
          .animate-border-move {
            animation: border-move 3s linear infinite;
          }
          
          @keyframes star-pop {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
          }

          .star {
            width: 12px;
            height: auto;
            filter: drop-shadow(0 0 10px #fffdef);
            animation: star-pop 2s infinite ease-in-out;
          }

          /* Stars placed closer to the button with slight overlap */
          .star-1 { top: -10px; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
          .star-2 { top: 50%; left: -10px; transform: translateY(-50%); animation-delay: 0.4s; }
          .star-3 { top: 50%; right: -10px; transform: translateY(-50%); animation-delay: 0.8s; }
          .star-4 { bottom: -10px; left: 50%; transform: translateX(-50%); animation-delay: 1.2s; }
          .star-5 { top: -8px; left: 30%; animation-delay: 1.6s; }
          .star-6 { bottom: -8px; right: 30%; animation-delay: 2s; }

          .fil0 { fill: #fffdef; }
        `}
      </style>
    </div>
  );
};

export default HackHiveButton;
