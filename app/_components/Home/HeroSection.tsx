"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedLogos from "./AnimatedLogos";
import ScrollArrow from "./SrollArrow";
import PoweredBy from "./LinkedinButton";


export default function HeroSection() {
    return (
      <div className="relative h-screen flex items-center justify-center">
        {/* Background circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
  
        {/* Animated Logos */}
        <AnimatedLogos />
  
        {/* Main content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              NFT Marketplace
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Create, collect and sell extraordinary NFTs.
            </p>
          </motion.div>
  
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore the marketplace
            <ArrowRight className="inline-block ml-2" />
          </motion.button>
        </div>
  
        {/* Scroll Arrow */}
        <ScrollArrow />
  
        {/* Powered By */}
        <PoweredBy />
      </div>
    );
  }