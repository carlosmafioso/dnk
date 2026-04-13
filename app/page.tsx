'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Search, 
  Rocket, 
  Eye, 
  Award, 
  DraftingCompass, 
  Terminal, 
  Share2, 
  Globe
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-surface/80 backdrop-blur-xl py-2 border-b border-white/10 shadow-2xl' 
        : 'bg-transparent py-4 border-b border-transparent'
    }`}>
      <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-white uppercase font-headline">
          DINNAMIKUS
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline text-[11px] font-semibold tracking-[0.15em] uppercase">
          <a className="text-secondary-container hover:text-white transition-colors relative group" href="#inicio">
            Início
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-container scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a className="text-white/60 hover:text-white transition-colors relative group" href="#sobre-nos">
            Sobre Nós
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-container scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a className="text-white/60 hover:text-white transition-colors relative group" href="#fraternidades">
            Fraternidades
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-container scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a className="text-white/60 hover:text-white transition-colors relative group" href="#parceiros">
            Parceiros
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-container scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
            <Search className="text-white/30 w-3.5 h-3.5 mr-2 group-hover:text-white/60 transition-colors" />
            <span className="text-white/30 text-xs group-hover:text-white/60 transition-colors">Pesquisar...</span>
          </div>
          <button className="bg-secondary-container text-on-secondary px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase hover:scale-95 hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all duration-300 cursor-pointer">
            Bilhetes
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuACnEJ-ZVXIJmncVPbG6n34Z4FQGRHQ6-VlL36BAnRdu3uZ53J4ItLoSom18-0qkTB1eZN1mSKztqJemvQKNR5er3zs8ZV3pJIZrvon1T3mnPP6dGfcDMYv6kJCfOZGfiteU-Nz0zz7H4boYqNJV3TTwr-ezr8AJ1FdSVapR_YaZCVOkeFnp97zP1oyigdm_TnF8iD8qLJTzSlyacn6IDeWv9XS4qZS4OoPw-Aeffz1cx_Y0cLphw2sld90HPEpn7lvRRempyEUfSyf"
          alt="University event crowd"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#160038] via-[#160038]/90 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <h1 className="font-headline font-light text-4xl md:text-6xl leading-[1.1] tracking-tight text-white">
            A nova cultura <br /> universitária <span className="text-secondary font-medium">começa aqui</span>
          </h1>
          <p className="font-sans text-lg text-on-surface-variant/80 max-w-xl leading-relaxed">
            Unimos estudantes, criamos fraternidades e construímos experiências que marcam gerações. O epicentro da vida académica em movimento.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-secondary-container text-on-secondary px-8 py-4 rounded-xl font-bold text-sm tracking-wide uppercase hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-all duration-300 cursor-pointer">
              Descobrir Fraternidades
            </button>
            <button className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-white/5 transition-all duration-300 cursor-pointer">
              Explorar Projetos
            </button>
          </div>
        </motion.div>

        {/* Floating Logo on the Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            y: [0, -20, 0] 
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.5 },
            scale: { duration: 1, delay: 0.5 },
            rotate: { duration: 1, delay: 0.5 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/logo-hero.png"
              alt="Dinnamikus Logo"
              fill
              sizes="(max-width: 768px) 300px, 400px"
              className="object-contain drop-shadow-[0_0_30px_rgba(255,106,0,0.2)]"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative glow behind logo */}
          <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
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
    <section id="sobre-nos" className="bg-white py-32 text-surface">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Content + Cards */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-headline font-light text-3xl md:text-4xl tracking-tight text-surface mb-6">Quem Somos</h2>
            <div className="font-sans text-base text-surface/90 leading-relaxed space-y-4">
              <p>
                <span className="font-bold text-surface">A DINNAMIKUS EVENTOS</span> é a primeira produtora em Angola especializada, de forma exclusiva, no público estudantil universitário — o segmento mais jovem, influente e determinante nas tendências de consumo atuais e futuras.
              </p>
              <p>
                Num cenário onde a maioria dos eventos voltados para estudantes perdeu relevância, identidade e consistência, a DINNAMIKUS surge como uma resposta estruturada e estratégica: <span className="font-bold text-surface">não apenas organizar eventos, mas construir uma cultura universitária sólida, escalável e altamente conectada com marcas.</span>
              </p>
            </div>
          </motion.div>

          {/* Stacked Cards under text */}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h3 className="font-headline font-bold text-base mb-2 text-surface">{feature.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="lg:col-span-5 h-full min-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl group"
          >
            <Image
              src="https://picsum.photos/seed/university/800/1000"
              alt="Cultura Universitária"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Fraternities = () => {
  const fraternities = [
    { name: "Alpha", year: "2018", desc: "A linhagem dos líderes. Focada em networking executivo e estratégia.", symbol: "Α", bgSymbol: "A", color: "primary", image: "/alpha.png" },
    { name: "Beta", year: "2019", desc: "A vanguarda criativa. Onde o design e a arte encontram a academia.", symbol: "Β", bgSymbol: "B", color: "secondary", image: "/beta.png" },
    { name: "Sigma", year: "2021", desc: "O núcleo tecnológico. Engenharia e inovação pura.", symbol: "Σ", bgSymbol: "Σ", color: "tertiary", image: "/sigma.png" },
    { name: "Omega", year: "2024", desc: "A nova ordem. Ousadia e quebra de paradigmas sociais.", symbol: "Ω", bgSymbol: "Ω", color: "error", image: "/omega.png" }
  ];

  // Duplicate for seamless loop
  const duplicatedFraternities = [...fraternities, ...fraternities];

  return (
    <section id="fraternidades" className="bg-surface py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-headline font-light text-3xl md:text-4xl mb-4 text-white">
            UMA FRATERNIDADE. <span className="text-secondary-container font-medium">Uma identidade.</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            A elite universitária em movimento perpétuo. Explore as linhagens que definem a nossa cultura.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-5 px-5"
          animate={{
            x: [0, -180 * fraternities.length], // 160px width + 20px gap
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {duplicatedFraternities.map((f, i) => (
            <div 
              key={i}
              className="min-w-[160px] group relative aspect-[3/4] bg-black rounded-xl overflow-hidden p-3 flex flex-col justify-between transition-all duration-700 shadow-xl border border-white/5 hover:border-secondary-container/50 shrink-0"
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={`${f.image}?v=2`} 
                  alt={f.name} 
                  fill 
                  sizes="160px"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-secondary-container font-black text-[10px] tracking-widest">{f.symbol}</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>
                  <h4 className="font-headline font-bold text-sm mb-0.5 text-white drop-shadow-2xl">{f.name}</h4>
                  <p className="text-white/60 text-[8px] leading-tight font-medium drop-shadow-lg line-clamp-2">{f.desc}</p>
                  <div className={`w-5 h-0.5 bg-secondary-container mt-2.5 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,106,0,0.4)]`}></div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-20"></div>
      </div>

      <div className="mt-16 flex justify-center px-8">
        <p className="font-headline text-lg italic text-on-surface/30 border-l-4 border-secondary-container/20 pl-6 py-2">
          Cada estudante pertence. Nem todos entram na lista.
        </p>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-headline font-light text-3xl md:text-4xl text-surface mb-2">
            Muito além de eventos. <br /> <span className="text-secondary-container font-medium">Criamos experiências.</span>
          </h2>
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
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Featured: 1ªAULA */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 bg-surface rounded-3xl overflow-hidden group relative min-h-[450px] shadow-2xl"
          >
            <Image
              src="https://picsum.photos/seed/event/1200/800"
              alt="1ªAULA"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <span className="micro-label bg-secondary-container text-white px-4 py-1.5 rounded-full mb-4 inline-block font-bold tracking-widest">Evento Principal</span>
              <h3 className="font-headline font-bold text-4xl text-white mb-3 tracking-tight">1ªAULA</h3>
              <p className="text-white/70 text-base max-w-md leading-relaxed">O festival que abre o ano letivo. Onde o conhecimento dá lugar à celebração sensorial e conexões reais.</p>
            </div>
          </motion.div>
          
          {/* SALA#1 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="md:col-span-4 bg-slate-50 rounded-3xl p-10 flex flex-col justify-between group hover:bg-secondary-container transition-all duration-500 shadow-sm hover:shadow-2xl"
          >
            <span className="font-headline font-bold text-7xl text-surface/5 -ml-1 -mt-2 group-hover:text-white/10 transition-colors">01</span>
            <div>
              <h3 className="font-headline font-bold text-2xl text-surface group-hover:text-white mb-2">SALA#1</h3>
              <p className="text-slate-400 text-sm group-hover:text-white/80 leading-relaxed">Workshop imersivo de produção criativa e gestão de carreira universitária.</p>
            </div>
          </motion.div>

          {/* LAB#1 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="md:col-span-4 bg-slate-50 rounded-3xl p-10 flex flex-col justify-between group hover:bg-surface transition-all duration-500 shadow-sm hover:shadow-2xl"
          >
            <span className="font-headline font-bold text-7xl text-surface/5 -ml-1 -mt-2 group-hover:text-white/10 transition-colors">02</span>
            <div>
              <h3 className="font-headline font-bold text-2xl text-surface group-hover:text-white mb-2">LAB#1</h3>
              <p className="text-slate-400 text-sm group-hover:text-white/80 leading-relaxed">Laboratório de ideias disruptivas para startups e projetos universitários.</p>
            </div>
          </motion.div>

          {/* AUDITÓRIO */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="md:col-span-4 bg-slate-50 rounded-3xl p-10 flex flex-col justify-between group hover:bg-primary-container transition-all duration-500 shadow-sm hover:shadow-2xl"
          >
            <span className="font-headline font-bold text-7xl text-surface/5 -ml-1 -mt-2 group-hover:text-white/10 transition-colors">03</span>
            <div>
              <h3 className="font-headline font-bold text-2xl text-surface group-hover:text-white mb-2">AUDITÓRIO</h3>
              <p className="text-slate-400 text-sm group-hover:text-white/80 leading-relaxed">Ciclo de conferências exclusivas com líderes e visionários globais.</p>
            </div>
          </motion.div>

          {/* ÁTRIO & CÓDIGO */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="md:col-span-4 grid grid-rows-2 gap-6"
          >
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex items-center gap-5 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-secondary-container/10 rounded-xl">
                <DraftingCompass className="w-6 h-6 text-secondary-container" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg text-surface">ÁTRIO</h4>
                <p className="text-xs text-slate-400">Exposição curada de arte digital.</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex items-center gap-5 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg text-surface">CÓDIGO</h4>
                <p className="text-xs text-slate-400">Hackathon intensivo de 48 horas.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Partners = () => {
  const brands = ["NEXUS", "VANTAGE", "ORBIT", "KINETIC", "PULSE", "CORE", "ELITE", "VISION", "PRIME", "AURA"];
  
  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="parceiros" className="bg-surface py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="max-w-2xl">
          <h2 className="font-headline font-light text-3xl md:text-4xl leading-tight mb-6 text-white">
            Marcas que constroem o <span className="text-secondary-container font-medium">futuro connosco</span>
          </h2>
          <p className="text-base text-on-surface-variant/60 leading-relaxed mb-8">
            As marcas que se juntam à DINNAMIKUS não patrocinam eventos. Constroem cultura.
          </p>
          <button className="bg-transparent border border-secondary-container/30 text-secondary-container px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-secondary-container hover:text-white transition-all duration-300 cursor-pointer">
            Torne-se parceiro
          </button>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex whitespace-nowrap gap-6 px-6"
          animate={{
            x: [0, -100 * brands.length],
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
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={i} 
              className="inline-flex w-48 h-24 bg-surface-container-low/30 backdrop-blur-sm rounded-xl items-center justify-center group cursor-default border border-white/5 hover:border-secondary-container/30 transition-all duration-500 shrink-0"
            >
              <span className="font-headline font-black text-xl text-white/10 grayscale group-hover:grayscale-0 group-hover:text-secondary-container/80 transition-all duration-500 tracking-widest">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface w-full border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto">
        <div className="mb-6 md:mb-0">
          <div className="font-headline font-bold text-white text-xl mb-2">DINNAMIKUS</div>
          <p className="micro-label uppercase">
            © 2024 DINNAMIKUS. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {["Privacidade", "Termos", "Imprensa", "Contacto"].map((item) => (
            <a key={item} className="micro-label hover:text-secondary-container transition-colors" href="#">
              {item}
            </a>
          ))}
        </div>
        <div className="mt-6 md:mt-0 flex gap-3">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
            <Share2 className="text-white w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
            <Globe className="text-white w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-surface">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary-container z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <About />
      <Fraternities />
      <Projects />
      <Partners />
      <Footer />
    </main>
  );
}
