"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function PoweredBy() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.a
        href="https://www.linkedin.com/in/facundo-duque/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm text-gray-300">Powered by</span>
        <span className="font-semibold underline text-purple-400">AalanDev</span>
        <Linkedin className="w-4 h-4 text-purple-400" />
      </motion.a>
    </motion.div>
  );
}