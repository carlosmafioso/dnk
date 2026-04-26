'use client';

import React from 'react';
import { motion } from 'motion/react';
import { DraftingCompass, Terminal } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projetos" className="bg-white py-24 md:py-48 lg:py-56">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-left"
        >
          <h2 className="font-headline font-light text-2xl md:text-4xl text-surface mb-2">
            Muito além de eventos. <br /> <span className="text-secondary-container font-medium">Criamos experiências.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="sm:col-span-2 md:col-span-8 bg-surface rounded-3xl overflow-hidden group relative min-h-[350px] md:min-h-[450px] shadow-2xl flex items-end p-6 md:p-10"
          >
            <div className="relative z-10 text-left">
              <span className="micro-label bg-secondary-container text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4 inline-block font-bold tracking-widest text-[10px]">Evento Principal</span>
              <h3 className="font-headline font-bold text-2xl md:text-4xl text-white mb-2 md:mb-3 tracking-tight">1ªAULA</h3>
              <p className="text-white/70 text-sm md:text-base max-w-sm leading-relaxed">O festival que abre o ano letivo. Onde o conhecimento dá lugar à celebração sensorial e conexões reais.</p>
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          </motion.div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 30, scale: 0.98 },
              visible: { opacity: 1, x: 0, scale: 1 }
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 bg-slate-50 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:bg-secondary-container transition-all duration-500 shadow-sm hover:shadow-2xl text-left"
          >
            <span className="font-headline font-bold text-5xl md:text-7xl text-surface/5 -ml-1 -mt-2 group-hover:text-white/10 transition-colors">01</span>
            <div>
              <h3 className="font-headline font-bold text-xl md:text-2xl text-surface group-hover:text-white mb-2">SALA#1</h3>
              <p className="text-slate-400 text-xs md:text-sm group-hover:text-white/80 leading-relaxed">Workshop imersivo de produção criativa e gestão de carreira universitária.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 bg-slate-50 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:bg-surface transition-all duration-500 shadow-sm hover:shadow-2xl text-left"
          >
            <span className="font-headline font-bold text-5xl md:text-7xl text-surface/5 -ml-1 -mt-2 group-hover:text-white/10 transition-colors">02</span>
            <div>
              <h3 className="font-headline font-bold text-xl md:text-2xl text-surface group-hover:text-white mb-2">LAB#1</h3>
              <p className="text-slate-400 text-xs md:text-sm group-hover:text-white/80 leading-relaxed">Laboratório de ideias disruptivas para startups e projetos universitários.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 bg-slate-50 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:bg-[#160038] transition-all duration-500 shadow-sm hover:shadow-2xl text-left"
          >
            <span className="font-headline font-bold text-5xl md:text-7xl text-surface/5 -ml-1 -mt-2 group-hover:text-white/10 transition-colors">03</span>
            <div>
              <h3 className="font-headline font-bold text-xl md:text-2xl text-surface group-hover:text-white mb-2">AUDITÓRIO</h3>
              <p className="text-slate-400 text-xs md:text-sm group-hover:text-white/80 leading-relaxed">Ciclo de conferências exclusivas com líderes e visionários globais.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 30, scale: 0.98 },
              visible: { opacity: 1, x: 0, scale: 1 }
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 md:gap-6"
          >
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 flex items-center gap-4 md:gap-5 hover:shadow-lg transition-all duration-300 text-left">
              <div className="p-2.5 md:p-3 bg-secondary-container/10 rounded-xl">
                <DraftingCompass className="w-5 h-5 md:w-6 md:h-6 text-secondary-container" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-base md:text-lg text-surface">ÁTRIO</h4>
                <p className="text-[10px] text-slate-400">Exposição curada de arte digital.</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 flex items-center gap-4 md:gap-5 hover:shadow-lg transition-all duration-300 text-left">
              <div className="p-2.5 md:p-3 bg-primary/10 rounded-xl">
                <Terminal className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-base md:text-lg text-surface">CÓDIGO</h4>
                <p className="text-[10px] text-slate-400">Hackathon intensivo de 48 horas.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
