import React from 'react';
import { ShoppingBag } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-farm-brown mb-4">
          Faça seu Pedido
        </h2>
        <p className="text-stone-600">A melhor opção para sua família com o melhor preço.</p>
      </div>

      <div className="flex justify-center">
        {/* Option 2 - Caixa c/ 30 (Highlighted/Mais vendido) */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-farm-yellow relative flex flex-col items-center text-center z-10 max-w-md w-full transform hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-farm-orange text-white text-sm font-bold px-4 py-2 rounded-full shadow-md uppercase tracking-wide">
                ⭐ Mais vendido
            </div>
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-5xl shadow-inner">
            📦
          </div>
          <h3 className="font-display text-3xl font-bold text-stone-800 mb-2">Caixa c/ 30 Ovos</h3>
          <p className="text-stone-500 text-lg mb-8">Economia garantida e qualidade premium para a família toda.</p>
          <div className="text-5xl font-bold text-farm-darkGreen mb-8">
            R$ 25,00
          </div>
          <a 
             href="https://wa.me/5514988149190?text=gostaria de solicitar uma cartela com 30 ovos"
             target="_blank"
             rel="noopener noreferrer"
             className="w-full py-4 px-6 bg-farm-orange hover:bg-orange-600 text-white font-bold text-xl rounded-xl transition-colors duration-300 shadow-lg flex items-center justify-center gap-3"
          >
            <ShoppingBag size={24} />
            Pedir Agora no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};