import React, { useState } from "react";
import { Download } from "lucide-react";
import papers from "../data/academics"; // Import the data file
import Lottie from "lottie-react";
import academic from "../assets/academic.json";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

const semesters = Object.keys(papers); // Extract semester names from the keys

const App = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the papers based on the selected semester and search query
  const filteredPapers =
    selectedSemester && papers[selectedSemester]
      ? papers[selectedSemester].filter((paper) =>
          paper.subject.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#11163E] to-black text-white">
      <Navbar />
      
      {/* Header */}
      <header className="bg-opacity-90 backdrop-blur-sm bg-[#1a1f4d] border-b border-purple-900">
        <div className="container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
          {/* Lottie Animation */}
          <div className="flex-shrink-0">
            <Lottie
              animationData={academic}
              loop={true}
              className="w-[100px] md:w-[120px] h-[120px] md:h-[140px] max-w-full"
            />
          </div>

          {/* Title */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-NordBold leading-tight">
              Academic <br className="hidden md:block" /> Resources
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8 flex-grow">
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Semester Selector */}
          <select
            className="w-full pl-3 pr-4 py-2.5 bg-[#1a1f4d] border font-Outfit border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setSelectedSemester(e.target.value || null)}
            value={selectedSemester || ""}
          >
            <option value="">Select Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>

        {/* Papers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredPapers.map((paper, index) => (
            <div
              key={`${selectedSemester}-${index}`}
              className="bg-[#1a1f4d] border border-purple-700 rounded-lg p-4 md:p-6"
            >
              <div className="flex justify-between items-center mb-2 md:mb-4">
                <h3 className="text-lg md:text-xl font-Outfit text-purple-300">
                  {paper.subject}
                </h3>
                <a
                  href={paper.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-purple-900 rounded-full"
                >
                  <Download className="w-5 h-5 text-purple-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Papers Found */}
        {filteredPapers.length === 0 && selectedSemester && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No question papers found for the selected semester or search query.
            </p>
          </div>
        )}
      </main>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
};

export default App;
