import React from 'react';
import { Sun, Leaf } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-b from-farm-yellow via-orange-200 to-farm-cream pt-12 pb-24 px-4 overflow-hidden rounded-b-[3rem] shadow-lg">
      <div className="absolute top-4 left-4 text-orange-400 opacity-50 animate-spin-slow">
        <Sun size={64} />
      </div>
      <div className="absolute top-10 right-10 text-green-500 opacity-40">
        <Leaf size={48} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-farm-brown font-bold text-sm mb-4 border border-orange-200 shadow-sm">
          🐣 Qualidade que você sente no prato
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-farm-brown mb-4 leading-tight drop-shadow-sm">
          Ovos Frescos da Granja <br />
          <span className="text-farm-darkGreen">Direto para sua Mesa!</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-700 font-medium max-w-2xl mx-auto">
          Mais sabor, mais nutrientes e frescor garantido.
        </p>
      </div>
    </header>
  );
};