import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='bg-[#333] w-full h-full bg-cover bg-center sm:pt-5 '>
      <div className='flex justify-center items-center pt-5'>
        <Image 
          src="/Line.svg" 
          alt='Icon-Lineee' 
          width={1140} 
          height={1}
        />
      </div>

      <div className='flex justify-center items-center gap-64 pt-10 pb-16'>
        <div>
          <p className='text-[0.75rem] text-[#fff]/40'><span className='text-[#009FE3]'>©</span> Todos os direitos reservados 2024. <span className='text-[#009FE3]'>*</span> Política de Privacidade</p>
        </div>

        <div>
          <p className='text-[0.75rem] text-[#009FE3]'>CNPJ - 00.000.000/0001-00</p>
        </div>

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
    </div>
  );
};

export default Footer;