import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import StatsSection from './components/StatsSection';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Theme logic
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900 transition-colors duration-300">
      {/* Premium Spotlight Follower */}
      <CursorSpotlight />

      {/* Global Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <LogoMarquee />
        <ProblemSolution />
        <StatsSection />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
