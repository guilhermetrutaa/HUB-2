import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='w-full h-full'>
      <div style={{backgroundImage: 'url(/BG.svg)'}} className='overflow-scroll w-screen h-screen bg-no-repeat bg-center'>
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

        <div className='mt-2 relative w-[300px] h-[220px] mx-auto z-20'>
          <Image 
            src="/laptop.svg" 
            alt='Icon-Laptop' 
            width={390} 
            height={220}
            className="w-full h-full object-contain"
          />

          <iframe 
            className='absolute w-[242px] h-[153px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' 
            src='https://www.youtube.com/embed/mPLG1Q-Hm2Q?si=YwjAwOTxIbZdLtA4'
            frameBorder="0" 
            allowFullScreen>
          </iframe>
        </div>

        <div style={{ backgroundImage: 'url(/BG2.svg)' }} className='relative -mt-[5rem] w-full min-h-full z-10 bg-cover'>
          <div className='pt-20'>
            <div className='flex justify-center items-center'>
              <h2 className='text-[2rem] max-w-[14rem] text-center font-bold leading-[2rem]'>Dê adeus a burocracia de aprovação</h2>
            </div>
            <div className='pt-8 mx-4'>
              <p className='text-[1rem] font-bold text-[#000]/75 max-w-[12rem]'>vulputate libero et velit interdum</p>
              <br/>
              <p className='max-w-[18rem] text-[#000]/75'>Nunc <span className='font-bold'>vulputate libero et velit interdum</span>, ac aliquet odio matti’s. Class aptent taciti <span className='font-bold'>sociosqu ad</span></p>
            </div>
            <div className='border-b-2 border-[#000]/10 pt-4'>
              <Image src="/rectangle.svg" alt='Rectangle' width={235} height={3}></Image>
            </div>
            <div className='flex justify-center items-center pt-5'>
              <Image src="/painel.svg" alt='Painel' width={300} height={209}></Image>
            </div>
            <div className='pt-8 mx-4'>
              <p className='text-[1rem] font-bold text-[#000]/75 max-w-[12rem]'>vulputate libero et velit interdum</p>
              <br/>
              <p className='max-w-[18rem] text-[#000]/75'>Nunc <span className='font-bold'>vulputate libero et velit interdum</span>, ac aliquet odio matti’s. Class aptent taciti <span className='font-bold'>sociosqu ad</span></p>
            </div>
            <div className='border-b-2 border-[#000]/10 pt-4'></div>
            <div className='pt-8 mx-4'>
              <p className='text-[1rem] font-bold text-[#000]/75 max-w-[12rem]'>vulputate libero et velit interdum</p>
              <br/>
              <p className='max-w-[18rem] text-[#000]/75'>Nunc <span className='font-bold'>vulputate libero et velit interdum</span>, ac aliquet odio matti’s. Class aptent taciti <span className='font-bold'>sociosqu ad</span></p>
            </div>
            <div className='border-b-2 border-[#000]/10 pt-4'></div>
          </div>
        </div>

        <div className='relative'>
          <div style={{ backgroundImage: 'url(/BG3.svg)' }} className='w-full h-full bg-cover bg-center'>
            <div className='pt-9'>
              <div className='flex justify-center items-center'>
                <h2 className='text-[2rem] font-semibold max-w-[14rem] text-center leading-[2rem]'>Lorem ipsum <span className='text-[#009FE3]'>sit amet</span></h2>
              </div>
              <div className='flex justify-center items-center pt-9'>
                <Image src="/clock.svg" alt='Icon-Clock' width={50} height={50}></Image>
              </div>
              <div className='flex justify-center items-center pt-4'>
                <p className='text-[1rem] text-[#959595] max-w-[10rem] text-center'>nterdum, ac aliquet odio m</p>
              </div>
              <div className='flex justify-center items-center pt-8'>
                <Image src="/cifrao.svg" alt='Icon-Cifrao' width={33} height={50}></Image>
              </div>
              <div className='flex justify-center items-center pt-4 pb-10'> 
                <p className='text-[1rem] text-[#959595] max-w-[10rem] text-center'>nterdum, ac aliquet odio m</p>
              </div>
            </div>
          </div>

          <div className='absolute top-[24.5rem] right-0 mr-5'>
              <Image src="/detalhe.svg" alt='Detalhe' width={72} height={87}></Image>
            </div>

          <div style={{ backgroundImage: 'url(/BG4.svg)' }} className='w-full h-full bg-cover bg-center'>
            <div className='flex justify-center items-center '>
              <p className='text-[0.68rem] text-[#888] tracking-[0.10rem] pt-12'>FEEDBACKS</p>
            </div>

            <div className='flex justify-center items-center'>
              <h1 className='text-[2rem] text-center font-bold text-[#fff] leading-[2rem] max-w-[15rem]'>O que estão dizendo <span className='text-[#888]'>sobre o Hub2 Client</span></h1>
            </div>

            <div className='flex justify-center items-center'>
              <p className='text-[#fff] text-[1rem] font-light text-center max-w-[15rem] pt-3'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
