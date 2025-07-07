"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import IslamicCompatibility from "@/components/IslamicCompatibility";
import VideoIntro from "@/components/VideoIntro";
import SocialProof from "@/components/SocialProof";
import Notifications from "@/components/Notifications";
import CTA from "@/components/CTA";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark overflow-hidden">
      <Navigation />

      {/* Background gradient effects */}
      <div className="fixed inset-0 bg-dark">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-start rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-end rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <IslamicCompatibility />
        <VideoIntro />
        <SocialProof />
        <Notifications />
        <CTA />
      </div>
    </main>
  );
}
