import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='w-screen h-screen'>
      <div style={{backgroundImage: 'url(/BG.svg)'}} className='overflow-scroll w-screen h-screen bg-fixed bg-center'>
        <div className='flex justify-between py-5 px-4 items-center'>
          <div>
            <Image src="/Logo.svg" alt='Logo-Hub2' width={90} height={30}></Image>
          </div>
          <div className='flex justify-between gap-1 items-center'>
            <button className='border border-[#606060] font-light px-4 py-2 text-[10px] text-[#fff] rounded-[3px]'>Fale com o vendas</button>
            <div>
              <Image src="/menu-burger.svg" alt='Icon-Menu' width={24} height={24}></Image>
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center mt-14'>
            <Image src="/Image-One.svg" alt='ImageOne' width={250} height={330}></Image>
          </div>
        </div>

        <div className='mt-6'>
          <div>
            <h1 className='text-[2rem] font-bold text-[#fff] text-center leading-[2rem]'>Headline<br/> Chamativa</h1>
            <p className='text-[0.75rem] mx-4 mt-[0.50rem] text-[#ffffff]/75 text-center'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
          </div>
          <div className='flex justify-center mt-5'>
            <button className='bg-[#009FE3] text-[10px] py-1 px-2 w-72 h-9 text-[#fff] rounded-[3px]'>Agende uma reunião</button>
          </div>
          <div className='flex justify-center items-center gap-1 mt-3'>
            <Image src="/checkmark-circle.svg" alt='Icon-CheckMark' width={8} height={8}></Image>
            <span className='text-[0.50rem] font-medium text-[#fff]/50'>Ligação de 30 minutos sem compromisso</span>
          </div>
        </div>

        <div className='flex justify-center items-center mt-6'>
          <Image src="/bitpanda.svg" className='opacity-50' alt='Icon-BitPanda' width={125} height={35}></Image>
        </div>

        <div className='mt-2 relative w-[320px] h-[220px] mx-auto'>
          <Image 
            src="/laptop.svg" 
            alt='Icon-Laptop' 
            width={390} 
            height={220}
            className="w-full h-full object-contain"
          />
        
          <iframe 
            className='absolute z-10 w-[260px] h-[165px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' 
            src='https://www.youtube.com/embed/mPLG1Q-Hm2Q?si=YwjAwOTxIbZdLtA4'
            frameBorder="0" 
            allowFullScreen>
          </iframe>
        </div>

      </div>
    </main>
  )
}

export default page
