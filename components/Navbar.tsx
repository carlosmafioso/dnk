'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Search, Rocket, Eye, Award, Share2, Menu, X, Globe } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(22, 0, 56, 0)', 'rgba(22, 0, 56, 0.85)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(16px)']
  );
  const paddingY = useTransform(
    scrollY,
    [0, 50],
    ['24px', '12px']
  );
  const borderBottomColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.1)']
  );

  const navLinks = React.useMemo(() => [
    { name: 'Início', href: '#inicio', id: 'inicio', icon: <Rocket className="w-5 h-5" /> },
    { name: 'Sobre Nós', href: '#sobre-nos', id: 'sobre-nos', icon: <Eye className="w-5 h-5" /> },
    { name: 'Fraternidades', href: '#fraternidades', id: 'fraternidades', icon: <Award className="w-5 h-5" /> },
    { name: 'Parceiros', href: '#parceiros', id: 'parceiros', icon: <Share2 className="w-5 h-5" /> },
  ], []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <>
      <motion.nav 
        style={{ 
          backgroundColor, 
          backdropFilter: backdropBlur,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          borderBottomColor,
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid'
        }}
        className="fixed top-0 w-full z-50 transition-colors duration-300 transform-gpu"
      >
        <div className="flex justify-between items-center px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-lg md:text-xl font-bold tracking-tighter text-white uppercase font-headline">
            DINNAMIKUS
          </div>
          
          <div className="hidden lg:flex items-center gap-6 lg:gap-8 font-headline text-[10px] lg:text-[11px] font-semibold tracking-[0.15em] uppercase">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                className="text-white/60 hover:text-white transition-colors relative group" 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-container scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center bg-white/5 px-3 md:px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
              <Search className="text-white/30 w-3.5 h-3.5 sm:mr-2 group-hover:text-white/60 transition-colors" />
              <span className="hidden md:inline text-white/30 text-xs group-hover:text-white/60 transition-colors">Pesquisar...</span>
            </div>
            <button className="bg-secondary-container text-on-secondary px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-[10px] md:text-xs font-bold tracking-wider uppercase hover:scale-95 hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all duration-300 cursor-pointer">
              Bilhetes
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            navLinks={navLinks} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

const MobileMenu = ({ navLinks, onClose }: { navLinks: any[], onClose: () => void }) => {
  const menuScrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
      />
      
      <motion.div
        initial={{ x: '100%', skewX: 0 }}
        animate={{ x: 0, skewX: 0 }}
        exit={{ x: '100%', skewX: 2 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-[85%] sm:w-[50%] lg:w-[30%] max-w-[400px] bg-[#160038] border-l border-white/10 z-[70] lg:hidden flex flex-col shadow-2xl overflow-hidden will-change-transform transform-gpu"
      >
        <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5 relative z-10">
          <span className="text-sm font-bold tracking-[0.3em] text-white/40 uppercase font-headline">NAVEGAÇÃO</span>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-white p-2 bg-white/5 rounded-xl transition-all active:scale-90"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div 
          ref={menuScrollRef}
          className="flex flex-col p-6 gap-2 flex-grow overflow-y-auto scrollbar-hide relative z-10"
        >
          <MobileMenuScrollContent 
            navLinks={navLinks} 
            onClose={onClose} 
            containerRef={menuScrollRef} 
          />
        </div>

        <div className="p-6 bg-white/5 border-t border-white/5 space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="w-full bg-secondary-container text-on-secondary py-4 rounded-2xl font-bold text-sm tracking-widest uppercase shadow-[0_10px_20px_rgba(255,106,0,0.2)] active:scale-95 transition-all">
              Comprar Bilhetes
            </button>
          </motion.div>
          
          <div className="flex justify-center gap-6">
            {[Share2, Globe].map((Icon, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-3 bg-white/5 rounded-xl text-white/30 hover:text-white/60 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>

          <p className="text-white/10 text-[9px] text-center tracking-[0.3em] uppercase font-headline">
            DINNAMIKUS © 2024
          </p>
        </div>

        <MobileMenuBackground containerRef={menuScrollRef} />
      </motion.div>
    </>
  );
};

const MobileMenuScrollContent = ({ 
  navLinks, 
  onClose, 
  containerRef 
}: { 
  navLinks: any[], 
  onClose: () => void, 
  containerRef: React.RefObject<HTMLDivElement | null>
}) => {
  const { scrollYProgress: menuScrollY } = useScroll({
    container: containerRef
  });

  const menuParallaxY = useTransform(menuScrollY, [0, 1], [0, -60]);
  const menuContentSkew = useTransform(menuScrollY, [0, 1], [0, 2]);

  return (
    <>
      <motion.div style={{ skewX: menuContentSkew }} className="flex flex-col gap-2">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => {
              e.preventDefault();
              onClose();
              smoothScrollTo(link.id);
            }}
            className="flex items-center gap-4 p-4 rounded-2xl text-white/70 hover:text-white hover:bg-white/5 transition-all group active:bg-secondary-container/10"
          >
            <div className="p-3 bg-white/5 rounded-xl text-white/40 group-hover:text-secondary-container group-hover:bg-secondary-container/10 transition-all">
              {link.icon}
            </div>
            <span className="text-xl font-headline font-light tracking-tight">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div 
        style={{ y: menuParallaxY }}
        className="mt-12 opacity-10 pointer-events-none px-4"
      >
        <div className="text-4xl font-headline font-black tracking-tighter leading-none opacity-20 select-none">
          EXCLUSIVO <br /> UNIVERSITÁRIO <br /> ANGOLA
        </div>
      </motion.div>
    </>
  );
};

const MobileMenuBackground = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
  const { scrollYProgress: menuScrollY } = useScroll({
    container: containerRef
  });

  const menuParallaxY = useTransform(menuScrollY, [0, 1], [0, -60]);
  const menuGlowOpacity = useTransform(menuScrollY, [0, 0.5, 1], [0.3, 0.6, 0.2]);

  return (
    <>
      <motion.div 
        style={{ 
          y: menuParallaxY,
          opacity: menuGlowOpacity
        }}
        className="absolute top-1/4 -right-12 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div 
        className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container/5 blur-[100px] rounded-full pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
};


