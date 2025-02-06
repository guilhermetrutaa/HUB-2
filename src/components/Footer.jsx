import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='bg-[#333] w-full h-full bg-cover bg-center sm:pt-5'>
      <div className='flex justify-center items-center pt-10 sm:z-10 sm:hidden'>
        <Image 
          src="/Line-rectangle.svg" 
          alt='Icon-LineRectanglee' 
          width={300} 
          height={1}
        />
      </div>

      <div className='pl-7 pt-8'>
        <div className='flex sm:justify-between sm:mr-10'>
          <p className='text-[0.68rem] font-normal text-[#fff]/20 pb-4'>
            © TODOS OS DIREITOS RESERVADOS 2024.
          </p>
          
          <div>
      <Link
        to="home" // Alvo para rolar
        smooth={true} // Rolagem suave
        duration={500} // Duração da rolagem em milissegundos
      >
        <button style={{ background: 'none', border: 'none' }}>
          <Image
            src="/Button_Arrow.svg"
            alt="Icon-ButtonArrow"
            width={20}
            height={20}
          />
        </button>
      </Link>
    </div>
        </div>

        <div>
          <p className='text-[0.68rem] text-[#009FE3] font-normal pb-4'>
            CPNJ - 33.333.333/0001-33
          </p>
        </div>

        <div className='pb-14'>
          <p className='text-[0.68rem] font-normal text-[#fff]/20'>
            Política de Privacidade
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;