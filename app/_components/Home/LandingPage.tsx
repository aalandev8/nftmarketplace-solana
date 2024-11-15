"use client";
import React from "react";
import HeroSection from "./HeroSection";
import FeaturesAndStats from "./Features";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white overflow-hidden">
      <HeroSection />
      <FeaturesAndStats />
    </div>
  );
}