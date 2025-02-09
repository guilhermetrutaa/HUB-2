'use client';
import { useState } from 'react';
import Image from 'next/image';

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: '/perfil.png',
      title: 'Design Moderno',
      content: 'Lorem ipsum dolor sit amet consectetur. Iaculis vulputate odio pellentesque diam malesuada vitae in etiam aenean.'
    },
    {
      image: '/perfil.png',
      title: 'Design Moderno',
      content: 'Lorem ipsum dolor sit amet consectetur. Iaculis vulputate odio pellentesque diam malesuada vitae in etiam aenean.'
    },
    {
      image: '/perfil.png',
      title: 'Design Moderno',
      content: 'Lorem ipsum dolor sit amet consectetur. Iaculis vulputate odio pellentesque diam malesuada vitae in etiam aenean.'
    },
    {
      image: '/perfil.png',
      title: 'Design Moderno',
      content: 'Lorem ipsum dolor sit amet consectetur. Iaculis vulputate odio pellentesque diam malesuada vitae in etiam aenean.'
    },
    {
      image: '/perfil.png',
      title: 'Design Moderno',
      content: 'Lorem ipsum dolor sit amet consectetur. Iaculis vulputate odio pellentesque diam malesuada vitae in etiam aenean.'
    },
  ];

  const handlePrev = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="max-w-[50rem] mx-auto py-8 overflow-hidden">
      {/* Controles superiores */}
      <div className="flex justify-center md:pb-5 lg:justify-end gap-4">
        <button onClick={handlePrev} className="p-3 rounded-md text-white bg-gray-800 hover:bg-gray-600 transition">
          ←
        </button>
        <button onClick={handleNext} className="p-3 rounded-md text-white bg-gray-800 hover:bg-gray-600 transition">
          →
        </button>
      </div>

      {/* Carrossel */}
      <div className="relative h-96 flex justify-center items-center overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {cards.map((card, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`relative w-full md:min-w-[35%] min-w-[70%] px-4 transition-all duration-300 flex-shrink-0`}
                style={{
                  transform: `scale(${isActive ? 1 : 0.9})`,
                  opacity: isActive ? 1 : 0.7,
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <div className="absolute ml-7 top-[-1.5rem] z-50">
                  <Image src={card.image} alt={card.title} width={53} height={53} />
                </div>
                <div
                  className={`relative h-[20rem] max-w-[18rem] rounded-xl shadow-lg overflow-visible ${
                    isActive ? 'bg-white' : 'bg-gray-200'
                  }`}
                >
                  <div className="absolute mt-1 left-0 right-0 p-6 bottom-[3rem] sm:bottom-[5.5rem]">
                    <h3 className="text-[1rem] font-bold text-black">{card.title}</h3>
                    <p className="text-black mt-2 text-[0.70rem]">{card.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
