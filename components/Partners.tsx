'use client';

import React from 'react';
import { motion } from 'motion/react';

export const Partners = () => {
  const brands = ["NEXUS", "VANTAGE", "ORBIT", "KINETIC", "PULSE", "CORE", "ELITE", "VISION", "PRIME", "AURA"];
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section id="parceiros" className="bg-surface py-24 md:py-48 lg:py-56 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-left"
        >
          <h2 className="font-headline font-light text-2xl md:text-4xl leading-tight mb-4 md:mb-6 text-white">
            Marcas que constroem o <span className="text-secondary-container font-medium">futuro connosco</span>
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant/60 leading-relaxed mb-6 md:mb-8">
            As marcas que se juntam à DINNAMIKUS não patrocinam eventos. Constroem cultura.
          </p>
          <button className="w-full sm:w-auto bg-transparent border border-secondary-container/30 text-secondary-container px-6 py-3 rounded-xl text-[10px] md:text-xs font-bold tracking-wider uppercase hover:bg-secondary-container hover:text-white transition-all duration-300 cursor-pointer">
            Torne-se parceiro
          </button>
          </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="relative flex overflow-hidden py-10"
      >
        <motion.div 
          className="flex whitespace-nowrap gap-4 md:gap-6 px-4 md:px-6 will-change-transform transform-gpu"
          animate={{
            x: ["0%", "-33.3333%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={i} 
              className="inline-flex w-40 md:w-48 h-20 md:h-24 bg-surface-container-low/30 backdrop-blur-sm rounded-xl items-center justify-center group cursor-default border border-white/5 hover:border-secondary-container/30 transition-all duration-500 shrink-0 transform-gpu"
            >
              <span className="font-headline font-black text-lg md:text-xl text-white/10 grayscale group-hover:grayscale-0 group-hover:text-secondary-container/80 transition-all duration-500 tracking-widest">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
      </motion.div>
    </section>
  );
};
