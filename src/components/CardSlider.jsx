'use client';
import { useState } from 'react';
import Image from 'next/image';

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Começa no slide do meio

  const cards = [
    {
      image: '/perfil.png',
      title: 'Design Moderno',
      content: 'Lorem ipsum dolor sit amet consectetur. Iaculis vulputate odio pellentesque diam malesuada vitae in etiam aenean. Donec in tincidunt amet tortor ut. Tortor massa neque congue morbi. Orci cursus etiam pellentesque sit amet.'
    },
    {
      image: '/perfil.png',
      title: 'Design Moderno',
      content: 'Lorem ipsum dolor sit amet consectetur. Iaculis vulputate odio pellentesque diam malesuada vitae in etiam aenean. Donec in tincidunt amet tortor ut. Tortor massa neque congue morbi. Orci cursus etiam pellentesque sit amet.'
    },
    {
      image: '/perfil.png',
      title: 'Design Moderno',
      content: 'Lorem ipsum dolor sit amet consectetur. Iaculis vulputate odio pellentesque diam malesuada vitae in etiam aenean. Donec in tincidunt amet tortor ut. Tortor massa neque congue morbi. Orci cursus etiam pellentesque sit amet.'
    },
  ];

  const handlePrev = () => {
    setActiveIndex(prev => prev > 0 ? prev - 1 : cards.length - 1);
  };

  const handleNext = () => {
    setActiveIndex(prev => prev < cards.length - 1 ? prev + 1 : 0);
  };

  return (
    <div className="max-w-[50rem] mx-auto py-8 overflow-hidden">
      {/* Controles superiores */}
      <div className="flex justify-center md:justify-end gap-4 mb-8">
        <button 
          onClick={handlePrev}
          className="p-3 rounded-md bg-none text-white transition-colors"
        >
          ←
        </button>
        <button 
          onClick={handleNext}
          className="p-3 rounded-md bg-none text-white transition-colors"
        >
          →
        </button>
      </div>

      {/* Carrossel */}
      <div className="relative h-96 overflow-visible">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 70}%)` }}
        >
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            const offset = index - activeIndex;
            
            return (
              <div 
                key={index}
                className="relative w-full md:min-w-[35%] min-w-[70%] px-4 transition-all duration-300"
                style={{
                  transform: `scale(${isActive ? 1 : 0.9})`,
                  opacity: isActive ? 1 : 0.8,
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <div className='absolute ml-7 top-[-1.5rem] z-50'>
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={53}
                        height={53}
                    />
                </div>
                <div className={`relative h-[20rem] max-w-[18rem] rounded-xl shadow-lg overflow-visible 
                  ${isActive ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <div className="absolute mt-1 left-0 right-0 p-6 bottom-[3rem]">
                    <h3 className="text-[1rem] font-bold text-black">{card.title}</h3>
                    <p className="text-black mt-2 text-[0.70rem]">{card.content}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;