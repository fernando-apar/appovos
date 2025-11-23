import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/55SEUNUMEROAQUI"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-6 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 border-2 border-white"
      aria-label="Fazer pedido no WhatsApp"
    >
      <MessageCircle size={24} fill="white" className="text-[#25D366]" />
      <span className="font-bold text-lg hidden sm:inline">Fazer Pedido</span>
    </a>
  );
};