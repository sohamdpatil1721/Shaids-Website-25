import React from "react";

// Import images
import ps1 from "../assets/images/ps/ps1.png";
import ps2 from "../assets/images/ps/ps2.png";
import ps3 from "../assets/images/ps/ps3.png";
import ps4 from "../assets/images/ps/ps4.png";
import ps5 from "../assets/images/ps/ps5.png";
import ps1Pdf from "../assets/Ps_pdfs/HackHive1.pdf";
import ps2Pdf from "../assets/Ps_pdfs/HackHive2.pdf";
import ps3Pdf from "../assets/Ps_pdfs/HackHive3.pdf";
import ps4Pdf from "../assets/Ps_pdfs/HackHive4.pdf";
import ps5Pdf from "../assets/Ps_pdfs/HackHive5.pdf";
export default function Problems() {
  const problems = [
    {
      id: 1,
      title: "Farmer-to-Consumer Marketplace with Price Prediction",
      description:
        "Design a software platform that connects farmers directly to consumers, eliminating intermediaries. Include a feature to predict crop prices based on historical data, weather conditions, and market trends to help farmers make informed selling decisions.",
      image: ps1,
      pdf: ps1Pdf,
    },
    {
      id: 2,
      title: "AI Research Assistant",
      description:
        "Build a web application that helps researchers quickly extract insights from academic papers by leveraging AI to generate summaries and visual representations of key findings.",
      image: ps2,
      pdf: ps2Pdf,
    },
    {
      id: 3,
      title: "Personalized Study Planner",
      description:
        "Design a smart study planner that creates personalized schedules based on a student’s learning style, preferred study hours, and exam schedules.",
      image: ps3,
      pdf: ps3Pdf,
    },
    {
      id: 4,
      title: "Hackathon Management System",
      description:
        "Develop a platform that streamlines hackathon management by managing registrations, team creation, project submissions, leaderboards, and judging.",
      image: ps4,
      pdf: ps4Pdf,
    },
    {
      id: 5,
      title: "Developer Pairing App",
      description:
        "Create a website that helps developers find people with matching coding interests and expertise.",
      image: ps5,
      pdf: ps5Pdf,
    },
  ];

  return (
    <div className="bg-[#0A0E2A] text-white min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-purple-400 text-4xl md:text-5xl font-bold">
          HACKHIVE ‘25
        </h2>
        <p className="text-gray-400 mt-2 text-lg tracking-wide font-bold">
          PROBLEM STATEMENTS
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 space-y-8">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg bg-[#14173A] shadow-lg shadow-[#14173A]/50"
          >
            {/* Image Section */}
            <div className="flex justify-center md:w-1/3">
              <img
                src={problem.image}
                alt={problem.title}
                className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left md:w-2/3">
              <h3 className="text-4xl font-extrabold text-purple-300">
                {problem.id.toString().padStart(2, "0")} .
              </h3>
              <h4 className="text-xl font-semibold text-white mt-2">
                {problem.title}
              </h4>
              <p className="text-gray-300 text-base mt-3">
                {problem.description}
              </p>

              {/* Button */}
              {problem.pdf && (
                <a
                  href={problem.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md text-base 
                  shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50 cursor-pointer"
                >
                  EXPECTED SOLUTION
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
