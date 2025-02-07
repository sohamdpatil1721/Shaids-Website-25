import React, { useState } from "react";
import Lottie from "lottie-react";
import Footer from "../components/Common/Footer";
import MemberCard from "../components/Teams/MemberCard";
import teamAnimation from "../assets/animations/team/team-animation.json";
import Navbar from "../components/Common/Navbar";
import Sai_Patil from "../assets/images/team-members-23-24/sai-patil-president.jpg";
import Vedant_Dal from "../assets/images/team-members-23-24/vedant-dal-general-secretary.jpg";
import Ajink_Gupta from "../assets/images/team-members-23-24/ajink-gupta-co-general-secretary.jpg";
import Yash_Dhole from "../assets/images/team-members-23-24/yash-dhole-convener.jpg";
import Yash_Bhangale from "../assets/images/team-members-23-24/yash-bhangale-tech-head.jpg";
import Soham_Jadhav from "../assets/images/team-members-23-24/soham-jadhav-cultural-head.jpg";
import Shivam_Dagadu from "../assets/images/team-members-23-24/shivam-dagadu-sports-head.jpg";
import Chinmayee_Mayekar from "../assets/images/team-members-23-24/chinmaiee-mayekar-graphics-head.jpg";
import Harsh_Jain from "../assets/images/team-members-23-24/harsh-jain-treasurer.jpg";
import Prakruti_Khandagale from "../assets/images/team-members-23-24/prakruti-khandagale-sponsorship-head.jpg";
import Raj_Sawant from "../assets/images/team-members-23-24/raj-sawant-publicity-head.jpg";
import Atharva_Sawant from "../assets/images/team-members-23-24/atharva-sawant-social-media-head.jpg";
import Vedang_Bandi from "../assets/images/team-members-23-24/vedang-bandi-planning-head.jpg";
import Sahil_Jadhav from "../assets/images/team-members-24-25/sahil-jadhav-president.jpg";
import Raj_Sangle from "../assets/images/team-members-24-25/raj-sangle-general-secretary.jpg";
import Siddhi_Kambli from "../assets/images/team-members-24-25/siddhi-kambli-co-general-secretary.png";
import Sadashiv_Sawant from "../assets/images/team-members-24-25/sadashiv-sawant-treasurer.jpg";
import Samruddhi_Naralkar from "../assets/images/team-members-24-25/samruddhi-naralkar-convener.jpg";
import Ayush_Bhosale from "../assets/images/team-members-24-25/ayush-bhosale-tech-head.jpg";
import Aryan_Gawade from "../assets/images/team-members-24-25/aryan-gawade-graphics-head.jpg";
import Rutuja_Wavdhane from "../assets/images/team-members-24-25/rutuja-wavdhane-publicity-head.jpg";
import Anushka_Jagadale from "../assets/images/team-members-24-25/anushka-jagadale-publicity-head.jpg";
import Shraddha_Nimunkar from "../assets/images/team-members-24-25/shraddha-nimunkar-cultural-head.jpg";
import Piyush_Dokle from "../assets/images/team-members-24-25/piyush-dokle-social-media-head.jpg";
import Rishita_Chavan from "../assets/images/team-members-24-25/rishita-chavan-sports-head.jpg";
import Sairaj_Unde from "../assets/images/team-members-24-25/sairaj-unde-sports-head.jpg";
import Anuj_Jadhav from "../assets/images/team-members-24-25/anush-jadhav-documentation-head.jpg";
import Nimisha_Patil from "../assets/images/team-members-24-25/nimisha-patil-documentation-head.jpg";
import Mandar_Salvi from "../assets/images/team-members-24-25/mandar-salvi-sponsorship-head.jpg";
import Bhumika_Bandkar from "../assets/images/team-members-24-25/bhumika-bandkar-sponsorship-head.png";

const currentLeads = [
  {
    name: "Sahil Jadhav",
    designation: "President",
    avatar: Sahil_Jadhav,
    instagramUrl: "https://www.instagram.com/_.sahil4565_/",
    linkedinUrl: "https://www.linkedin.com/in/sahil-jadhav-49b318289/",
  },
  {
    name: "Raj Sangle",
    designation: "General Secretary",
    avatar: Raj_Sangle,
    instagramUrl: "https://www.instagram.com/orewa_rrraaj/",
    linkedinUrl: "https://www.linkedin.com/in/raj-sangle-2257a9273/",
  },
  {
    name: "Siddhi Kambli",
    designation: "Co-General Secretary",
    avatar: Siddhi_Kambli,
    instagramUrl: "https://www.instagram.com/siddhikambli09/",
    linkedinUrl: "https://www.linkedin.com/in/siddhi-kambli-987a40304/",
  },
  {
    name: "Sadashiv Sawant",
    designation: "Treasurer",
    avatar: Sadashiv_Sawant,
    instagramUrl: "https://www.instagram.com/wayne_sawant_69_/",
    linkedinUrl: "https://www.linkedin.com/in/sadashiv-sawant-351707229/",
  },
  {
    name: "Samruddhi Naralkar",
    designation: "Convener",
    avatar: Samruddhi_Naralkar,
    instagramUrl: "https://www.instagram.com/naralkarsamruddhi/",
    linkedinUrl: "https://in.linkedin.com/in/samruddhi-naralkar-a9a422288/",
  },
  {
    name: "Ayush Bhosale",
    designation: "Tech Head",
    avatar: Ayush_Bhosale,
    instagramUrl: "https://www.instagram.com/ayush._.bhosale/",
    linkedinUrl: "https://www.linkedin.com/in/aryan-gawade-9476a831b/",
  },
  {
    name: "Aryan Gawade",
    designation: "Graphics Head",
    avatar: Aryan_Gawade,
    instagramUrl: "https://www.instagram.com/not.so.weird/",
    linkedinUrl: "https://www.linkedin.com/in/aryan-gawade-9476a831b/",
  },
  {
    name: "Rutuja Wavdhane",
    designation: "Planning Head",
    avatar: Rutuja_Wavdhane,
    instagramUrl: "https://www.instagram.com/rutwa_24/",
    linkedinUrl: "https://www.linkedin.com/in/rutuja-wavdhane-630790301/",
  },
  {
    name: "Anushka Jagadale",
    designation: "Publicity Head",
    avatar: Anushka_Jagadale,
    instagramUrl: "https://www.instagram.com/anuxcr/",
    linkedinUrl: "https://www.linkedin.com/in/anushka-jagadale-0636a5299/",
  },
  {
    name: "Shraddha Nimunkar",
    designation: "Cultural Head",
    avatar: Shraddha_Nimunkar,
    instagramUrl: "https://www.instagram.com/_shraddha.9__/",
    linkedinUrl: "https://www.linkedin.com/in/shraddha-nimunkar-1948862b8/",
  },
  {
    name: "Piyush Dokle",
    designation: "Social Media Head",
    avatar: Piyush_Dokle,
    instagramUrl: "https://www.instagram.com/stranger.deb/",
    linkedinUrl: "https://www.linkedin.com/in/piyush-dokle-970684284/",
  },
  {
    name: "Rishita Chavan",
    designation: "Sports Head",
    avatar: Rishita_Chavan,
    instagramUrl: "https://www.instagram.com/rishi_ta__28/",
    linkedinUrl: "https://www.linkedin.com/in/rishita-chavan-353978299/",
  },
  {
    name: "Sairaj Unde",
    designation: "Sports Head",
    avatar: Sairaj_Unde,
    instagramUrl: "https://www.instagram.com/saiii_20_/",
    linkedinUrl: "https://www.linkedin.com/in/sairaj-unde-87a39031b/",
  },
  {
    name: "Anuj Jadhav",
    designation: "Documentation Head",
    avatar: Anuj_Jadhav,
    instagramUrl: "https://www.instagram.com/anujjj_j/",
    linkedinUrl: "https://www.linkedin.com/in/anuj-jadhav-39a51328a/",
  },
  {
    name: "Nimisha Patil",
    designation: "Documentation Head",
    avatar: Nimisha_Patil,
    instagramUrl: "https://www.instagram.com/nimishapatil_1311/",
    linkedinUrl: "https://www.linkedin.com/in/nimisha-patil-911777301/",
  },
  {
    name: "Mandar Salvi",
    designation: "Sponsorship Head",
    avatar: Mandar_Salvi,
    instagramUrl: "https://www.instagram.com/mandarsalvi03/",
    linkedinUrl: "https://www.linkedin.com/in/mandarsalvi03/",
  },
  {
    name: "Bhumika Bandkar",
    designation: "Sponsorship Head",
    avatar: Bhumika_Bandkar,
    instagramUrl: "https://www.instagram.com/bhumiikaaa_02/",
    linkedinUrl: "https://www.linkedin.com/in/bhumikabandkar/",
  },
];

const previousLeads = [
  {
    name: "Sai Patil",
    designation: "President",
    avatar: Sai_Patil,
    instagramUrl: "https://instagram.com/sai__xx",
    linkedinUrl: "https://www.linkedin.com/in/saispatil",
  },
  {
    name: "Vedant Dal",
    designation: "General Secretary",
    avatar: Vedant_Dal,
    instagramUrl: "https://instagram.com/vedant.dal",
    linkedinUrl: "https://www.linkedin.com/in/vedant-dal-a6bbaa229",
  },
  {
    name: "Ajink Gupta",
    designation: "CO-General Secretary",
    avatar: Ajink_Gupta,
    instagramUrl: "https://instagram.com/_ajinkgupta",
    linkedinUrl: "https://www.linkedin.com/in/ajinkgupta",
  },
  {
    name: "Yash Dhole",
    designation: "Convener",
    avatar: Yash_Dhole,
    instagramUrl: "https://instagram.com/hunk__13",
    linkedinUrl: "https://www.linkedin.com/in/yashbdhole",
  },
  {
    name: "Yash Bhangale",
    designation: "Tech Head",
    avatar: Yash_Bhangale,
    instagramUrl: "https://www.instagram.com/__yashhh9/",
    linkedinUrl: "https://www.linkedin.com/in/yashbdhole",
  },
  {
    name: "Soham Jadhav",
    designation: "Cultural Head",
    avatar: Soham_Jadhav,
    instagramUrl: "https://instagram.com/_sohamjadhav_",
    linkedinUrl: "https://www.linkedin.com/mwlite/in/soham-jadhav-b74032264",
  },
  {
    name: "Shivam Dagadu",
    designation: "Sports Head",
    avatar: Shivam_Dagadu,
    instagramUrl: "https://instagram.com/shivam_26__04",
    linkedinUrl: "https://www.linkedin.com/in/shivam-dagadu-56a18b264",
  },
  {
    name: "Chinmayee Mayekar",
    designation: "Graphics Head",
    avatar: Chinmayee_Mayekar,
    instagramUrl: "https://instagram.com/chinmayee_41203",
    linkedinUrl: "https://www.linkedin.com/in/chinmayee-mayekar-076029262",
  },
  {
    name: "Harsh Jain",
    designation: "Treasurer",
    avatar: Harsh_Jain,
    instagramUrl: "https://instagram.com/harshjain6740",
    linkedinUrl: "https://www.linkedin.com/in/harsh-jain-624183229",
  },
  {
    name: "Prakruti Khandagale",
    designation: "Sponsorship Head",
    avatar: Prakruti_Khandagale,
    instagramUrl: "https://instagram.com/prakruti14",
    linkedinUrl: "https://www.linkedin.com/in/prakruti-khandagale-17072b228",
  },
  {
    name: "Raj Sawant",
    designation: "Publicity Head",
    avatar: Raj_Sawant,
    instagramUrl: "https://www.instagram.com/rajsawant.9/",
    linkedinUrl: "https://shaids-dmce.github.io/url.com",
  },
  {
    name: "Atharva Sawant",
    designation: "Social Media Head",
    avatar: Atharva_Sawant,
    instagramUrl: "https://instagram.com/_.sawant",
    linkedinUrl: "https://www.linkedin.com/in/atharva-sawant-264b59266",
  },
  {
    name: "Vedang Bandi",
    designation: "Planning Head",
    avatar: Vedang_Bandi,
    instagramUrl: "https://www.instagram.com/vedangbandii/",
    linkedinUrl: "https://www.linkedin.com/in/vedangbandi",
  },
];

const Team = () => {
  const [showPreviousLeads, setShowPreviousLeads] = useState(false);

  const handleToggleLeads = () => {
    setShowPreviousLeads(!showPreviousLeads);
  };

  const teamMembers = showPreviousLeads ? previousLeads : currentLeads;

  return (
    <div className="min-h-screen flex flex-col bg-bgGradient ">
      <Navbar />
      <div className="max-w-[1280px] w-full px-4 mx-auto flex flex-col items-center flex-grow mt-5">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mb-12">
          <div className="lg:w-[50%] text-center lg:text-left py-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2 font-NordMedium">
              MEET THE <br className="hidden lg:block" />
              <span className="text-[#5D3E98]">TEAM!</span>
            </h1>
            <p className="text-white/80 text-xl lg:text-3xl font-Outfit">
              Our Hive of Innovators
            </p>
          </div>
          <div className="lg:w-[50%] flex justify-center lg:justify-end">
            <Lottie
              animationData={teamAnimation}
              loop={true}
              className="w-[250px] lg:w-[300px] h-[200px] lg:h-[250px]"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
        <div className="w-full flex mt-12 mb-12 justify-center">
          <button
            onClick={handleToggleLeads}
            className="bg-buttonGradient px-6 py-2 rounded-lg text-white font-Outfit text-center cursor-pointer"
          >
            {showPreviousLeads ? "Leads of AY 2024-25" : "Leads of AY 2023-24"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
