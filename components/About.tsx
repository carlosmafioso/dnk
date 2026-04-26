'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Rocket, Eye, Award } from 'lucide-react';
import aboutUs from '@/public/about-us.webp';

export const About = () => {
  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-secondary-container" />,
      title: "Missão",
      description: "Elevar o padrão do entretenimento universitário através de infraestrutura premium e conceitos disruptivos."
    },
    {
      icon: <Eye className="w-6 h-6 text-secondary-container" />,
      title: "Visão",
      description: "Ser reconhecida como a marca que moldou a identidade social da elite estudantil contemporânea."
    },
    {
      icon: <Award className="w-6 h-6 text-secondary-container" />,
      title: "Valores",
      description: "Exclusividade, integridade institucional, vanguarda estética e excelência operacional."
    }
  ];

  return (
    <section id="sobre-nos" className="bg-white py-24 md:py-32 lg:py-56 text-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7 flex flex-col gap-10 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="font-headline font-light text-3xl md:text-5xl lg:text-4xl tracking-tight text-surface mb-8">Quem Somos</h2>
            <div className="font-sans text-base md:text-lg lg:text-base text-surface/90 leading-relaxed space-y-6 max-w-3xl mx-auto lg:mx-0">
              <p>
                <span className="font-bold text-surface">A DINNAMIKUS EVENTOS</span> é a primeira produtora em Angola especializada, de forma exclusiva, no público estudantil universitário — o segmento mais jovem, influente e determinante nas tendências de consumo atuais e futuras.
              </p>
              <p>
                Num cenário onde a maioria dos eventos voltados para estudantes perdeu relevância, identidade e consistência, a DINNAMIKUS surge como uma resposta estruturada e estratégica: <span className="font-bold text-surface">não apenas organizar eventos, mas construir uma cultura universitária sólida, escalável e altamente conectada com marcas.</span>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-5 lg:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group text-center lg:text-left"
              >
                <div className="mb-4 md:mb-3 lg:mb-4 flex justify-center lg:justify-start transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h3 className="font-headline font-bold text-base md:text-sm lg:text-base mb-2 md:mb-1 lg:mb-2 text-surface">{feature.title}</h3>
                <p className="text-slate-500 text-xs md:text-[10px] lg:text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 h-[400px] md:h-[500px] lg:h-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl group"
          >
            <Image
              src={aboutUs}
              alt="Dinnamikus Team"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 33vw"
              className="object-cover hover:scale-105 transition-all duration-700"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
