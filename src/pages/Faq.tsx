import React from 'react';
import Accordion from '../components/Accordion';
import { faqs } from '../data/artists';
import Header from '../components/Header';

const Faq: React.FC = () => {
  return (
    <div className="font-poppins max-w-md mx-auto p-4 pb-24">
      <Header />
      <h1 className="text-2xl font-bold mb-6">Perguntas Frequentes</h1>
      
      <Accordion items={faqs} />
      
      <div className="mt-8 p-4 bg-zinc-900 rounded-xl">
        <h2 className="text-lg font-medium mb-3">Ainda tem dúvidas?</h2>
        <p className="text-gray-300 mb-4">
          Se você não encontrou o que procurava, entre em contato com nossa equipe de suporte.
        </p>
        <a 
          href="mailto:suporte@spotifyavalia.com.br"
          className="text-green-500 hover:text-green-400 transition-colors"
        >
          suporte@spotifyavalia.com.br
        </a>
      </div>
    </div>
  );
};

export default Faq;