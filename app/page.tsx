'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

// Components
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Fraternities } from '@/components/Fraternities';
import { Projects } from '@/components/Projects';
import { Partners } from '@/components/Partners';
import { Footer } from '@/components/Footer';
import { BottomNav } from '@/components/BottomNav';

export default function LandingPage() {
  useEffect(() => {
    // Disable scroll restoration to prevent the browser from jumping to previous positions
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Immediately jump to top without animation
    window.scrollTo(0, 0);

    // Clear hash on mount
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const barHeight = useTransform(scrollYProgress, [0.98, 1], ["4px", "8px"]);
  const barShadow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "0 0 0px rgba(255,106,0,0)",
      "0 0 10px rgba(255,106,0,0.5)",
      "0 0 30px rgba(255,106,0,0.9)"
    ]
  );

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-surface selection:bg-secondary-container/30 overflow-x-hidden"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 bg-secondary-container z-[60] origin-left will-change-transform"
        style={{ 
          scaleX,
          height: barHeight,
          boxShadow: barShadow
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Fraternities />
      <Projects />
      <Partners />
      <Footer />
    </motion.main>
  );
}
