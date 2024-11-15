"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedLogos() {
  const logos = [
    {
      name: "Solana",
      svg: (
        <svg viewBox="0 0 398 312" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h320.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="#9945FF"/>
          <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h320.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="#9945FF"/>
          <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H3.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h320.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="#9945FF"/>
        </svg>
      ),
      width: 60
    },
    {
      name: "Phantom",
      svg: (
        <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="#AB9FF2"/>
        </svg>
      ),
      width: 80
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map((logo,) => (
        <motion.div
          key={logo.name}
          className="absolute opacity-20 hover:opacity-40 transition-opacity"
          style={{
            width: logo.width,
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, Math.random() * 360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {logo.svg}
        </motion.div>
      ))}
    </div>
  );
}