'use client';

import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, Globe } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/dinnamikus_eventos/", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/dinnamikus.ao/", label: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/dinnamikus-eventos/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/dinnamikus", label: "Twitter" },
  ];

  const footerLinks = [
    { title: "Empresa", items: ["Sobre Nós", "Carreiras", "Imprensa", "Blog"] },
    { title: "Serviços", items: ["Eventos Corporativos", "Casamentos", "Festas Privadas", "Consultoria"] },
    { title: "Legal", items: ["Privacidade", "Termos de Uso", "Cookies", "Segurança"] },
  ];

  return (
    <footer className="bg-surface w-full border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 text-left">
            <div className="font-headline font-bold text-white text-2xl mb-4">DINNAMIKUS</div>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Criamos experiências memoráveis que conectam pessoas e marcas através de eventos inovadores e de alto impacto.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary-container hover:text-white transition-all duration-300 text-white/70"
                  aria-label={social.label}
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title} className="text-left">
              <h4 className="text-white font-bold mb-6">{group.title}</h4>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/40 hover:text-secondary-container transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="micro-label uppercase text-white/30 text-center md:text-left">
            © 2024 DINNAMIKUS. TODOS OS DIREITOS RESERVADOS. PROJETADO COM PAIXÃO EM ANGOLA.
          </p>
          <div className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors cursor-default">
            <Globe className="w-4 h-4" />
            <span className="micro-label">PT (AO)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
