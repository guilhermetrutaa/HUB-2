import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Seções do menu
  const menuSections = [
    { name: 'Início', id: '#home' },
    { name: 'Solução HUB2', id: '#about' },
    { name: 'FeedBacks', id: '#services' },
    { name: 'Sobre Nós', id: '#portfolio' },
    { name: 'Contato', id: '#contact' },
    { name: 'FAQ', id: '#faq' }
  ]

  return (
    <div className="relative">
      <div className='flex justify-between py-5 px-4 items-center'>
        <div>
          <Image  
            src="/Logo.svg" 
            alt='Logo-Hub2' 
            width={90} 
            height={30}
            className='lg:hidden'
          />
          <Image  
            src="/Logo-Laptop.svg" 
            alt='Logo-LaptopHub2' 
            width={50} 
            height={50}
            className='lg:block sm:hidden md:hidden lg:ml-10'
          />
        </div>
        
        {/* Menu desktop (hidden on mobile) */}
        <div className='hidden lg:flex gap-6 items-center mr-10'>
          {menuSections.map((section) => (
            <a 
              key={section.id}
              href={section.id} 
              className='text-[#fff] text-sm hover:text-[#009FE3] transition-colors'
            >
              {section.name}
            </a>
          ))}
          <button className='border border-[#606060] font-light px-4 py-2 text-[10px] text-[#fff] rounded-[3px] hover:bg-[#009FE3] hover:border-transparent transition-colors'>
            Fale com o vendas
          </button>
        </div>


      

        {/* Menu mobile */}
        <div className='lg:hidden flex'>
          <div className='mr-2'>
                <button className='w-full text-center border border-[#606060] font-light px-4 py-2 text-[10px] text-[#fff] rounded-[3px] hover:bg-[#009FE3] hover:border-transparent transition-colors'>
                  Fale com o vendas
                </button>
          </div>
          <button 
            onClick={toggleMenu}
            className='focus:outline-none'
          >
            <Image 
              src={isMenuOpen ? "/menu-close.svg" : "/menu-burger.svg"} 
              alt='Icon-Menu' 
              width={24} 
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Dropdown menu mobile */}
      {isMenuOpen && (
        <div className='lg:hidden absolute top-full right-0 w-full bg-[#333] z-50 shadow-lg transition-all duration-300'>
          <div className='px-4 py-6 space-y-4'>
            {menuSections.map((section) => (
              <a
                key={section.id}
                href={section.id}
                className='block text-[#fff] py-2 px-4 hover:bg-[#009FE3] rounded-md transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                {section.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar