'use client';

import React from 'react';
import { Rocket, Eye, Award, Share2 } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

export const BottomNav = () => {
  const navItems = [
    { name: 'Início', href: '#inicio', id: 'inicio', icon: <Rocket className="w-5 h-5" /> },
    { name: 'Sobre', href: '#sobre-nos', id: 'sobre-nos', icon: <Eye className="w-5 h-5" /> },
    { name: 'Fraternidades', href: '#fraternidades', id: 'fraternidades', icon: <Award className="w-5 h-5" /> },
    { name: 'Parceiros', href: '#parceiros', id: 'parceiros', icon: <Share2 className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] bg-[#160038]/90 backdrop-blur-md border border-white/10 rounded-2xl z-50 md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-2 py-2 transform-gpu">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <a 
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo(item.id);
            }}
            className="flex flex-col items-center gap-1.5 p-3 text-white/40 hover:text-secondary-container active:scale-90 transition-all group"
          >
            <div className="group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-[7px] uppercase font-headline font-bold tracking-[0.2em]">{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
