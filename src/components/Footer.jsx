import React from 'react';
import Image from 'next/image';

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
            <a href="/">
            <Image 
              src="/Button_Arrow.svg" 
              alt='Icon-ButtonArrow' 
              className='ml-4 cursor-pointer hover:opacity-80 transition-opacity sm:ml-8' 
              width={30} 
              height={30}
            />
            </a>
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