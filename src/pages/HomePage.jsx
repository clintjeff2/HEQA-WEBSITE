import React from "react";
import Hero from "../components/Hero";
import LogoMarquee from "../components/LogoMarquee";
import ProblemSolution from "../components/ProblemSolution";
import StatsSection from "../components/StatsSection";
import Features from "../components/Features";
import AppShowcase from "../components/AppShowcase";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ProblemSolution />
      <StatsSection />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
