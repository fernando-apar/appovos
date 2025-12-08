import React from 'react';
import { CheckCircle2, Clock, Utensils, Wheat } from 'lucide-react';

export const Presentation: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/seed/farmeggs/600/500" 
              alt="Cesta de ovos frescos na fazenda" 
              className="relative rounded-2xl shadow-xl w-full object-cover h-80 md:h-[500px] transform transition duration-500 hover:scale-[1.01]"
            />
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                <p className="font-display font-bold text-farm-brown">🥚 Colhidos hoje</p>
            </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800">
            O Segredo do Verdadeiro Sabor do Campo
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Aqui na Granja do Renato, tratamos nossas galinhas como família. Elas vivem soltas, comem bem e, em troca, nos dão os ovos mais saborosos da região. Sem truques, apenas natureza.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
              <Clock className="text-green-600 shrink-0" />
              <div>
                <h3 className="font-bold text-stone-800">100% Frescos</h3>
                <p className="text-sm text-stone-500">Sem estoque parado. Da granja direto para você.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
              <Utensils className="text-orange-500 shrink-0" />
              <div>
                <h3 className="font-bold text-stone-800">Sabor Marcante</h3>
                <p className="text-sm text-stone-500">Gema consistente e alaranjada, ideal para receitas.</p>
              </div>
            </div>

             <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
              <Wheat className="text-yellow-600 shrink-0" />
              <div>
                <h3 className="font-bold text-stone-800">Alimentação Natural</h3>
                <p className="text-sm text-stone-500">Grãos selecionados e vegetais frescos.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
              <CheckCircle2 className="text-blue-500 shrink-0" />
              <div>
                <h3 className="font-bold text-stone-800">Cuidado Total</h3>
                <p className="text-sm text-stone-500">Produção artesanal com muito carinho.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};