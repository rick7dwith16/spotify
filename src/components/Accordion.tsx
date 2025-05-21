import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

interface AccordionProps {
  items: FaqItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="mb-2 border border-zinc-800 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-4 text-left flex justify-between items-center bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200"
          >
            <span className="font-medium">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp size={20} className="text-green-500" />
            ) : (
              <ChevronDown size={20} className="text-green-500" />
            )}
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-4 bg-zinc-800 text-gray-300">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;