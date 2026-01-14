import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-farm-brown text-farm-cream py-12 px-4 rounded-t-[3rem] mt-12">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="font-display text-2xl font-bold mb-4 text-yellow-400">Granja do Renato</h3>
          <p className="text-stone-300 text-sm">
            Produzindo ovos de qualidade com respeito à natureza e aos animais. Da nossa família para a sua.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-bold text-lg mb-2 text-white">Contato</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-stone-300">
              <Phone size={18} className="text-yellow-400" />
              <span>(14) 98814-9190</span>
            </div>
            <div className="flex items-center gap-3 text-stone-300">
              <Phone size={18} className="text-yellow-400" />
              <span>(14) 99720-7946</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-stone-300">
            <MapPin size={18} className="text-yellow-400" />
            <span>Tibiriçá, Sítio 3 Corações</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="font-bold text-lg mb-2 text-white">Horário de Entrega</h4>
          <div className="flex items-center gap-3 text-stone-300">
             <Clock size={18} className="text-yellow-400" />
             <div className="text-sm text-left">
                <p>Segunda a Sexta: 08h - 18h</p>
                <p>Sábado: 08h - 12h</p>
             </div>
          </div>
        </div>

      </div>
      
      <div className="border-t border-stone-700 mt-10 pt-6 text-center text-stone-500 text-sm">
        © {new Date().getFullYear()} Granja do Renato. Todos os direitos reservados.
      </div>
    </footer>
  );
};