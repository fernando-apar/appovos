import React from 'react';
import { ShoppingBag } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-farm-brown mb-4">
          Escolha o seu Pedido
        </h2>
        <p className="text-stone-600">Preços justos para um produto premium.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Option 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-100 hover:border-yellow-400 transition-colors duration-300 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-3xl shadow-inner">
            🥚
          </div>
          <h3 className="font-display text-xl font-bold text-stone-800 mb-2">Dúzia Comum</h3>
          <p className="text-stone-500 text-sm mb-6">Ideal para o dia a dia.</p>
          <div className="text-3xl font-bold text-farm-green mb-6">
            R$ 12,00
          </div>
          <a 
             href="https://wa.me/55SEUNUMEROAQUI?text=Olá, gostaria de pedir uma dúzia comum."
             target="_blank"
             rel="noopener noreferrer"
             className="w-full py-3 px-4 bg-stone-100 hover:bg-yellow-400 hover:text-white text-stone-700 font-bold rounded-xl transition-colors duration-300"
          >
            Pedir Agora
          </a>
        </div>

        {/* Option 2 - Highlighted */}
        <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-farm-yellow relative transform md:-translate-y-4 flex flex-col items-center text-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-farm-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                Mais vendido
            </div>
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-4xl shadow-inner">
            🍳
          </div>
          <h3 className="font-display text-2xl font-bold text-stone-800 mb-2">Dúzia Jumbo</h3>
          <p className="text-stone-500 text-sm mb-6">Tamanho extra para mais sabor.</p>
          <div className="text-4xl font-bold text-farm-darkGreen mb-6">
            R$ 15,00
          </div>
          <a 
             href="https://wa.me/55SEUNUMEROAQUI?text=Olá, gostaria de pedir uma dúzia jumbo."
             target="_blank"
             rel="noopener noreferrer"
             className="w-full py-3 px-4 bg-farm-orange hover:bg-orange-600 text-white font-bold rounded-xl transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            Pedir Agora
          </a>
        </div>

        {/* Option 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-stone-100 hover:border-yellow-400 transition-colors duration-300 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-3xl shadow-inner">
            📦
          </div>
          <h3 className="font-display text-xl font-bold text-stone-800 mb-2">Caixa c/ 30</h3>
          <p className="text-stone-500 text-sm mb-6">Economia para a família toda.</p>
          <div className="text-3xl font-bold text-farm-green mb-6">
            R$ 35,00
          </div>
           <a 
             href="https://wa.me/55SEUNUMEROAQUI?text=Olá, gostaria de pedir uma caixa com 30 ovos."
             target="_blank"
             rel="noopener noreferrer"
             className="w-full py-3 px-4 bg-stone-100 hover:bg-yellow-400 hover:text-white text-stone-700 font-bold rounded-xl transition-colors duration-300"
          >
            Pedir Agora
          </a>
        </div>
      </div>
    </section>
  );
};