'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import alphaImg from '@/public/alpha.webp';
import betaImg from '@/public/beta.webp';
import sigmaImg from '@/public/sigma.webp';
import omegaImg from '@/public/omega.webp';

export const Fraternities = () => {
  const fraternities = [
    { name: "Alpha", desc: "A linhagem dos líderes. Focada em networking executivo e estratégia.", symbol: "Α", image: alphaImg },
    { name: "Beta", desc: "A vanguarda criativa. Onde o design e a arte encontram a academia.", symbol: "Β", image: betaImg },
    { name: "Sigma", desc: "O núcleo tecnológico. Engenharia e inovação pura.", symbol: "Σ", image: sigmaImg },
    { name: "Omega", desc: "A nova ordem. Ousadia e quebra de paradigmas sociais.", symbol: "Ω", image: omegaImg }
  ];

  const duplicatedFraternities = [...fraternities, ...fraternities, ...fraternities];

  return (
    <section id="fraternidades" className="bg-surface py-24 md:py-48 lg:py-56 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 mb-12 md:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-headline font-light text-2xl md:text-4xl mb-4 text-white">
            UMA FRATERNIDADE. <span className="text-secondary-container font-medium">Uma identidade.</span>
          </h2>
          <p className="text-white/40 text-xs md:text-sm max-w-md mx-auto">
            A elite universitária em movimento perpétuo. Explore as linhagens que definem a nossa cultura.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-4 md:gap-5 px-4 md:px-5 will-change-transform transform-gpu"
          animate={{
            x: ["0%", "-33.3333%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedFraternities.map((f, i) => (
            <div 
              key={i}
              className="w-[180px] md:w-[240px] group relative aspect-[3/4] bg-black rounded-xl overflow-hidden p-4 md:p-5 flex flex-col justify-between transition-all duration-700 shadow-xl border border-white/5 hover:border-secondary-container/50 shrink-0 transform-gpu"
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={f.image} 
                  alt={f.name} 
                  fill 
                  sizes="(max-width: 768px) 180px, 240px"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-700 ease-out text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-secondary-container font-black text-[10px] tracking-widest">{f.symbol}</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>
                  <h4 className="font-headline font-bold text-sm mb-0.5 text-white drop-shadow-2xl">{f.name}</h4>
                  <p className="text-white/60 text-[8px] leading-tight font-medium drop-shadow-lg line-clamp-2">{f.desc}</p>
                  <div className="w-5 h-0.5 bg-secondary-container mt-2.5 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,106,0,0.4)]"></div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none"></div>
      </div>

      <div className="mt-16 flex justify-center px-8">
        <p className="font-headline text-lg italic text-on-surface/30 border-l-4 border-secondary-container/20 pl-6 py-2">
          Cada estudante pertence. Nem todos entram na lista.
        </p>
      </div>
    </section>
  );
};
