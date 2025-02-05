'use client';
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: 'Pergunta 1',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultricies ligula. Nulla sollicitudin ligula in facilisis pharetra. Praesent consectetur.',
    },
    {
      question: 'Pergunta 2',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultricies ligula. Nulla sollicitudin ligula in facilisis pharetra. Praesent consectetur.',
    },
    {
      question: 'Pergunta 3',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultricies ligula. Nulla sollicitudin ligula in facilisis pharetra. Praesent consectetur.',
    },
    {
      question: 'Pergunta 4',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultricies ligula. Nulla sollicitudin ligula in facilisis pharetra. Praesent consectetur.',
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 pt-8 pb-7">
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4 border-b border-[#fff]/20">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
          >
            <span
              className={`text-lg font-medium transition-colors ${
                activeIndex === index ? 'text-[#009fe3]' : 'text-white'
              }`}
            >
              {item.question}
            </span>
            <span
              className={`text-xl font-light transition-colors ${
                activeIndex === index ? 'text-[#009fe3]' : 'text-white'
              }`}
            >
              {activeIndex === index ? '-' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div className="pb-4 text-[#fff]">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;