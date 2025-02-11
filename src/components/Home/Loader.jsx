import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";
import Shaids_logo from "../../assets/images/logo.png";
import { shouldSkipGeneratingVar } from "@mui/material";

export default function Loader({ onComplete }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = [
    "Loading your experience...",
    "Bringing imagination to life...",
    "Almost there...",
    "Get ready for something amazing!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 1000);

    const timeout = setTimeout(() => {
      onComplete(); // Tell App to show the main content
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={Shaids_logo}
        alt="Shaids Logo"
        className="w-24 h-24 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <motion.p
        key={quoteIndex}
        className="text-lg text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {quotes[quoteIndex]}
      </motion.p>
    </motion.div>
  );
}
