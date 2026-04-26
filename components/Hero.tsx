'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { smoothScrollTo } from '@/lib/utils';
import logoHero from '@/public/logo-hero.webp';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-start overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuACnEJ-ZVXIJmncVPbG6n34Z4FQGRHQ6-VlL36BAnRdu3uZ53J4ItLoSom18-0qkTB1eZN1mSKztqJemvQKNR5er3zs8ZV3pJIZrvon1T3mnPP6dGfcDMYv6kJCfOZGfiteU-Nz0zz7H4boYqNJV3TTwr-ezr8AJ1FdSVapR_YaZCVOkeFnp97zP1oyigdm_TnF8iD8qLJTzSlyacn6IDeWv9XS4qZS4OoPw-Aeffz1cx_Y0cLphw2sld90HPEpn7lvRRempyEUfSyf"
          alt="University event crowd"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#160038] via-[#160038]/95 lg:via-[#160038]/90 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 md:gap-6 order-2 md:order-1 text-center md:text-left"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-headline font-light text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white"
          >
            A nova cultura <br /> universitária <span className="text-secondary font-medium">começa aqui</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-sans text-base md:text-lg text-on-surface-variant/80 max-w-xl leading-relaxed"
          >
            Unimos estudantes, criamos fraternidades e construímos experiências que marcam gerações. O epicentro da vida académica em movimento.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2"
          >
            <button 
              onClick={() => smoothScrollTo('fraternidades')}
              className="flex-1 sm:flex-none bg-secondary-container text-on-secondary px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm tracking-wide uppercase hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-all duration-300 cursor-pointer"
            >
              Descobrir Fraternidades
            </button>
            <button 
              onClick={() => smoothScrollTo('projetos')}
              className="flex-1 sm:flex-none bg-transparent text-white border border-white/20 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm tracking-wide uppercase hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              Explorar Projetos
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: [0, -15, 0] 
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.5 },
            scale: { duration: 1, delay: 0.5 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="flex justify-center items-center relative order-1 md:order-2"
        >
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={logoHero}
              alt="Dinnamikus Logo"
              fill
              sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
              className="object-contain drop-shadow-[0_0_30px_rgba(255,106,0,0.2)]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-secondary/10 blur-[60px] md:blur-[100px] rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};
