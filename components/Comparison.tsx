import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-stone-800 mb-12">
          Por que escolher nossos ovos?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Farm Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                    <span className="text-2xl">🏡</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-green-800">Ovos da Granja (Meus)</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "Mais frescos (colhidos recentemente)",
                "Mais saborosos e aromáticos",
                "Galinhas soltas e bem cuidadas",
                "Nutrientes preservados",
                "Gema alaranjada e cremosa",
                "Casca mais firme"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-stone-700 font-medium">
                  <div className="bg-green-200 p-1 rounded-full shrink-0">
                    <Check size={16} className="text-green-700" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Supermarket Card */}
          <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-sm opacity-90">
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-stone-200 p-3 rounded-full">
                    <span className="text-2xl">🏭</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-600">Ovos de Supermercado</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "Dias ou semanas de armazenamento",
                "Gema pálida e quebradiça",
                "Sabor fraco ou inexistente",
                "Perdem nutrientes com o tempo",
                "Excesso de manuseio e transporte",
                "Produção industrial em massa"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-stone-500">
                  <div className="bg-red-100 p-1 rounded-full shrink-0">
                    <X size={16} className="text-red-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="text-center mt-12 bg-orange-100 inline-block px-8 py-4 rounded-2xl mx-auto border border-orange-200 shadow-sm">
          <p className="font-display text-xl md:text-2xl font-bold text-orange-800">
            “Quem prova ovos de verdade nunca mais volta ao industrializado.”
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
            
        </div>
      </div>
    </section>
  );
};