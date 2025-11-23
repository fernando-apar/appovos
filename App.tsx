import React from 'react';
import { Hero } from './components/Hero';
import { Presentation } from './components/Presentation';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Hero />
      <main className="flex-grow">
        <Presentation />
        <Comparison />
        <Pricing />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;