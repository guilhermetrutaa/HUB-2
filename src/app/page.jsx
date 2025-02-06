'use client';
import CardSlider from '@/components/CardSlider'
import Faq from '@/components/Faq'
import FaqDois from '@/components/FaqDois'
import SliderLogotipos from '@/components/SliderLogotipos'
import Footer from '@/components/Footer'
import FooterDdois from '@/components/FooterDdois'
import Image from 'next/image'
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Updated menu sections with scroll configuration
  const menuSections = [
    { name: 'Início', id: 'home' },
    { name: 'Solução HUB2', id: 'solution' },
    { name: 'FeedBacks', id: 'feedback' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Contato', id: 'contact' },
    { name: 'FAQ', id: 'faq' }
  ];

  // Shared scroll configuration
  const scrollConfig = {
    smooth: true,
    duration: 400,
    spy: true,
    
  };
  return (
    
    <main style={{backgroundImage: 'url(/BG.svg)'}} className='relative min-h-screen bg-auto w-full max-w-[100vw]'>
      <div  className='relative min-h-screen w-full'>
      <section id='home'>
        <div className="">
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
                className='hidden lg:block lg:ml-10'
              />
            </div>
            
            {/* Desktop Menu with Scroll */}
            <div className='hidden lg:flex gap-6 items-center mr-10'>
              {menuSections.map((section) => (
                <ScrollLink 
                  key={section.id}
                  to={section.id} 
                  className='text-[#fff] text-sm hover:text-[#009FE3] transition-colors cursor-pointer'
                  activeClass="text-[#009FE3]"
                  {...scrollConfig}
                >
                  {section.name}
                </ScrollLink>
              ))}
              <button className='border border-[#606060] font-light px-4 py-2 text-[10px] text-[#fff] rounded-[3px] hover:bg-[#009FE3] hover:border-transparent transition-colors'>
                Fale com o vendas
              </button>
            </div>
    
            {/* Mobile Menu Button */}
            <div className='lg:hidden flex z-[100]'>
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
    
          {/* Mobile Menu Dropdown with Scroll */}
          {isMenuOpen && (
            <div className='lg:hidden relative top-full right-0 w-full bg-[#333] z-50 shadow-lg transition-all duration-300'>
              <div className='px-4 py-6 space-y-4'>
                {menuSections.map((section) => (
                  <ScrollLink
                    key={section.id}
                    to={section.id}
                    className='block text-[#fff] py-2 px-4 hover:bg-[#009FE3] rounded-md transition-colors cursor-pointer'
                    onClick={() => setIsMenuOpen(false)}
                    {...scrollConfig}
                  >
                    {section.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          )}
          </div>

    
      <div>
          <div className='flex justify-center items-center mt-14'>
            <Image src="/Image-One.svg" alt='ImageOne' width={250} height={330} className='lg:hidden'></Image>
          </div>
        </div>

        <div className='mt-6 lg:mb-36'>
          <div>
            <h1 className='text-[2rem] font-bold text-[#fff] text-center leading-[2rem] lg:hidden'>Headline<br/> Chamativa</h1>
            <h1 className='text-[3rem] font-bold text-[#fff] text-center hidden lg:block'>Headline Chamativa</h1>
            <p className='text-[0.75rem] mx-4 mt-[0.50rem] text-[#ffffff]/75 text-center lg:hidden'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
            <div className='hidden lg:flex lg:justify-center lg:items-center'>
              <p className='text-[1.3rem] mx-4 mt-[0.50rem] max-w-[52rem] text-[#ffffff]/75 text-center hidden lg:block lg:justify-center'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button className='bg-[#009FE3] text-[10px] py-1 px-2 w-72 h-9 text-[#fff] rounded-[3px]'>Agende uma reunião</button>
          </div>
          <div className='flex justify-center items-center gap-1 mt-3 lg:mb-5'>
            <Image src="/checkmark-circle.svg" alt='Icon-CheckMark' width={8} height={8}></Image>
            <span className='text-[0.50rem] font-medium text-[#fff]/50'>Ligação de 30 minutos sem compromisso</span>
          </div>
          <div className='hidden lg:flex lg:items-center lg:justify-center'>
            <Image src="/logos_Placeholders.svg" alt='logos-PlaceHolders' width={1000} height={148}></Image>
          </div>
          
        </div>

        <div  className='lg:hidden'>
          <SliderLogotipos/>
        </div>

        
        <div className='mt-2 relative w-[300px] h-[220px] mx-auto z-20 md:w-[700px] lg:mb-32 lg:flex lg:items-center lg:justify-center'>
          <Image 
            src="/notificacoes-img.svg" 
            alt='Notificacoes-Imagem' 
            width={321} 
            height={462}
            className="h-full w-full object-contain hidden lg:block"
          />

          <Image 
            src="/laptop.svg" 
            alt='Icon-Laptop' 
            width={390} 
            height={220}
            className="h-full w-full object-contain lg:w-[37.5rem] lg:h-[37.5rem]"
          />

          <Image 
            src="/flow-img.svg" 
            alt='Flow-Imagem' 
            width={366} 
            height={453}
            className="h-full w-full object-contain hidden lg:block"
          />

          

          <iframe 
            className='absolute w-[242px] h-[158px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[245px] sm:h-[160px] md:w-[300px] md:h-[200px] lg:w-[490px] lg:h-[310px] lg:top-[45%] lg:left-[48%]' 
            src='https://www.youtube.com/embed/mPLG1Q-Hm2Q?si=YwjAwOTxIbZdLtA4'
            frameBorder="0" 
            allowFullScreen>
          </iframe>
        </div>
      </section>


      <section id='solution'>
        <div style={{ backgroundImage: 'url(/BG2.svg)' }} className='relative -mt-[5rem] w-full min-h-full z-10 bg-cover lg:hidden'>
          <div className='pt-20 md:pt-28'>
            <div className='flex justify-center items-center'>
              <h2 className='text-[2rem] max-w-[14rem] text-center font-bold leading-[2rem] lg:max-w-none'>Dê adeus a burocracia de aprovação</h2>
            </div>
            <div className='lg:flex'>
              <div className='pt-8 mx-4'>
                <p className='text-[1rem] font-bold text-[#000]/75 max-w-[12rem]'>vulputate libero et velit interdum</p>
                <br/>
                <p className='max-w-[18rem] text-[#000]/75'>Nunc <span className='font-bold'>vulputate libero et velit interdum</span>, ac aliquet odio matti’s. Class aptent taciti <span className='font-bold'>sociosqu ad</span></p>
              </div>
              <div className='border-b-2 border-[#000]/10 pt-4'>
                <Image src="/rectangle.svg" alt='Rectangle' width={235} height={3}></Image>
              </div>
              <div className='flex justify-center items-center pt-5'>
                <Image src="/painel.svg" alt='Painel' width={300} height={209} className='md:w-[43.75rem]'></Image>
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
        </div>
        </section>

      
        <div
        style={{ backgroundImage: 'url(/BG2.svg)' }}
        className="relative -mt-[5rem] w-full min-h-screen z-10 bg-cover hidden lg:block"
        >
        <div className="pt-20 md:pt-28">
          <div className="flex justify-center items-center">
            <h2 className="text-[2rem] max-w-[14rem] text-center font-bold leading-[2rem] lg:max-w-none">
              Dê adeus à burocracia de aprovação
            </h2>
          </div>
            
          <div className="hidden lg:flex justify-center items-start gap-10 px-20 mt-10">
            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {Array(3).fill(null).map((_, i) => (
                <div key={i}>
                  <p className="text-[1rem] font-bold text-[#000]/75 max-w-[12rem]">
                    vulputate libero et velit interdum
                  </p>
                  <p className="max-w-[18rem] text-[#000]/75 mt-2">
                    Nunc <span className="font-bold">vulputate libero et velit interdum</span>, ac aliquet odio matti’s.
                    Class aptent taciti <span className="font-bold">sociosqu ad</span>
                  </p>
                <div className="border-b-2 border-[#000]/10 mt-4 mb-10"></div>
                </div>
              ))}
          </div>

              {/* Main Panel */}
              <div className="relative">
                <Image src="/painel.svg" alt="Painel" width={700} height={450} className="w-[700px]" />
              </div>
            </div>
          </div>
        </div>
       
        <section id='feedback'></section>
        
        <div className='relative'>
          <div style={{ backgroundImage: 'url(/BG3.svg)' }} className='w-full h-full bg-cover bg-center'>
            <div className='pt-9  lg:flex lg:justify-center lg:items-center lg:gap-10 lg:pt-10 lg:pb-10'>
              <div className='flex justify-center items-center'>
                <h2 className='text-[2rem] font-semibold max-w-[14rem] text-center leading-[2rem]'>Lorem ipsum <span className='text-[#009FE3]'>sit amet</span></h2>
              </div>
              <div className='justify-center items-center pt-9 lg:pt-0 hidden lg:flex'>
                <Image src="/clock.svg" alt='Icon-Clock' width={50} height={50}></Image>
                <div className='flex justify-center items-center pt-4 lg:pt-0'>
                  <p className='text-[1rem] text-[#959595] max-w-[10rem] text-center'>nterdum, ac aliquet odio m</p>
                </div>
              </div>
              <div className='justify-center items-center pt-9 lg:pt-0 hidden lg:flex'>
                <Image src="/cifrao.svg" alt='Icon-Cifrao' width={37} height={50}></Image>
                <div className='flex justify-center items-center pt-4 lg:pt-0'>
                  <p className='text-[1rem] text-[#959595] max-w-[10rem] text-center'>nterdum, ac aliquet odio m</p>
                </div>
              </div>
              <div className='lg:hidden'>
                <div className='flex justify-center items-center pt-9'>
                  <Image src="/clock.svg" alt='Icon-Clock' width={50} height={50}></Image>
                </div>
                <div>
                  <div className='flex justify-center items-center pt-4 lg:pt-0'>
                    <p className='text-[1rem] text-[#959595] max-w-[10rem] text-center'>nterdum, ac aliquet odio m</p>
                  </div>
                </div>
              </div>
              <div className='lg:hidden'>
                <div className='flex justify-center items-center pt-8 lg:pt-0'>
                  <Image src="/cifrao.svg" alt='Icon-Cifrao' width={33} height={50}></Image>
                </div>
                <div className='flex justify-center items-center pt-4 pb-10 lg:pb-0 lg:pt-0'> 
                  <p className='text-[1rem] text-[#959595] max-w-[10rem] text-center'>nterdum, ac aliquet odio m</p>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute top-[24.5rem] right-0 mr-5 lg:hidden'>
              <Image src="/Detalhe.svg" alt='Detalhe' width={72} height={87}></Image>
            </div>

            

          <div style={{ backgroundImage: 'url(/BG4.svg)' }} className='w-full h-full bg-cover bg-center lg:hidden'>
            <div className='flex justify-center items-center '>
              <p className='text-[0.68rem] text-[#888] tracking-[0.10rem] pt-12'>FEEDBACKS</p>
            </div>

            <div className='flex justify-center items-center'>
              <h1 className='text-[2rem] text-center font-bold text-[#fff] leading-[2rem] max-w-[15rem]'>O que estão dizendo <span className='text-[#888]'>sobre o Hub2 Client</span></h1>
            </div>

            <div className='flex justify-center items-center'>
              <p className='text-[#fff] text-[1rem] font-light text-center max-w-[15rem] pt-3'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div>
              <CardSlider/>
            </div>
          </div>


          
          <div
            style={{ backgroundImage: 'url(/BG4.svg)' }}
            className="w-full h-full bg-cover bg-center py-16 px-6 lg:px-16 hidden lg:block"
          >
            <div className="max-w-7xl mx-auto">
              {/* Container principal */}
              <div className="lg:flex lg:items-center lg:justify-between">
                {/* Cards mais próximos da borda */}

                
                <div className="lg:w-2/3 lg:-ml-[5rem]">
                  <CardSlider />
                </div>

                
                {/* Texto */}
                <div className="lg:w-1/3 lg:pl-1 lg:mb-24">
                  <p className="text-[0.68rem] text-[#888] tracking-[0.10rem] uppercase mb-1">FEEDBACKS</p>
                  <h1 className="text-[2rem] font-semibold text-white leading-[2rem] max-w-[100rem]">
                    O que estão dizendo
                    <span className="text-[#888] block font-semibold">sobre o Hub2 Client</span>
                  </h1>
                  <p className="text-[#E1E1E1] text-[1rem] font-light max-w-[20rem] pt-3">
                    Lorem ipsum dolor sit amet consectetur. Vulputate sem enim nulla arcu cras eu et fringilla sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          

          <section id='about'></section>
          <div className='bg-[#161616] w-full h-full bg-cover bg-center lg:hidden'>
            <div >
              <Image src="/Computer-apple.svg" alt='Computer-Apple' width={450} height={317} className='md:w-full '></Image>
            </div>
            <div className='pt-10'>
              <p className='text-[0.68rem] font-normal text-[#888] tracking-[0.10rem] text-center'>SOBRE NÓS</p>
            </div>
            <div>
              <h2 className='text-[2rem] font-bold text-[#D9D9D9] text-center'>O que é</h2>
            </div>
            <div className='flex justify-center items-center pt-2'>
              <Image src="/Logo2.svg" alt='Icon-HUB2sobre' width={270} height={63}></Image>
            </div>
            <div className='flex justify-center items-center pt-7'>
              <p className='text-[0.75rem] font-light text-[#D9D9D9] max-w-[18rem]'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <span className='font-bold'>vulputate libero et velit interdum</span>, ac aliquet odio mattis. Class aptent taciti <span className='font-bold'>sociosqu ad litora torquent</span> per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className='flex justify-center items-center pt-6 pb-10'>
              <button className='text-[#fff] text-[1rem] font-light px-[6.5rem] py-2 bg-[#009fe3] rounded-[0.37rem]'>Saiba mais</button>
            </div>
          </div>
          
          {/* testeeeeeee */}
          <div style={{ backgroundImage: 'url(/BG6.svg)' }} className="w-full h-full bg-cover bg-center hidden lg:flex"> 
            {/* Imagem - Ocupa toda a esquerda, encostando nas bordas */}
            <div className="relative w-1/2 h-screen">
              <Image
                src="/Computer-apple.svg"
                alt="Computer-Apple"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 rounded-r-[4.25rem]"
              />
            </div>
           
            {/* Conteúdo - Fica à direita */}
            <div className="w-1/2 flex flex-col justify-center px-6 lg:px-16">
              <p className="text-[0.68rem] font-normal text-[#888] tracking-[0.10rem] lg:text-left text-center">
                SOBRE NÓS
              </p>

              <h2 className="text-[4rem] font-bold text-[#D9D9D9] lg:text-left text-center flex">
                O que é
                <div className="flex justify-center lg:justify-start pt-2 ml-3">
                  <Image src="/Logo2.svg" alt="Icon-HUB2sobre" width={270} height={63} />
                </div>
              </h2>

              
        
              

              <p className="text-[1rem] font-light text-[#D9D9D9] max-w-[30rem] pt-7 lg:text-left text-center">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                <span className="font-bold"> vulputate libero et velit interdum</span>, ac aliquet odio mattis. Class aptent taciti
                <span className="font-bold"> sociosqu ad litora torquent</span> per conubia nostra, per inceptos himenaeos.
              </p>

              <p className="text-[1rem] font-light text-[#D9D9D9] max-w-[30rem] pt-7 lg:text-left text-center">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                <span className="font-bold"> vulputate libero et velit interdum</span>, ac aliquet odio mattis. Class aptent taciti
                <span className="font-bold"> sociosqu ad litora torquent</span> per conubia nostra, per inceptos himenaeos.
              </p>

              {/* Botão - Alinhado à esquerda em lg */}
              <div className="flex justify-center lg:justify-start pt-10 pb-10">
                <button className="text-[#fff] text-[1rem] font-light px-[12rem] py-2 bg-[#009fe3] rounded-[0.37rem]">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        
          <section id='contact'></section>

          <div className='bg-[#C8C8C8] w-full h-full bg-cover bg-center lg:hidden'>
            <div className='pt-16'>
              <h1 className='text-black text-[2rem] font-bold text-center lg:text-[4rem]'>Chamada pra ação</h1>
            </div>
            <div className='flex justify-center items-center pt-2'>
              <p className='text-[1rem] text-[#000]/75 font-normal text-center max-w-[19rem] lg:max-w-[50rem]'>Depois de ter conquistado o clientes você chama ele para um papo rápido ou um orçamento</p>
            </div>
            <div>
              <div className='flex justify-center items-center pt-7 lg:pt-0 lg:mr-3'>
                <input className='px-8 py-3 outline-none rounded-[0.37rem] text-[1rem] text-[#88898A] ' type='text' placeholder='Seu nome'></input>
              </div>
              <div className='flex justify-center items-center pt-3 lg:pt-0'>
                <input className='px-8 py-3 outline-none rounded-[0.37rem] text-[1rem] text-[#88898A]' type='text' placeholder='Seu E-mail'></input>
              </div>
              <div className='flex justify-center items-center pt-5 pb-16 lg:pb-0 lg:pt-0'>
                <button className='bg-[#009fe3] py-3 px-[1.6rem] text-[0.83rem] text-[#fff] font-bold'>AGENDE UM PAPO PARA CONHECER</button>
              </div>
            </div>
          </div>

          <div className='bg-[#C8C8C8] w-full h-full bg-cover bg-center hidden lg:block'>
            <div className='pt-16'>
              <h1 className='text-black text-[2rem] font-bold text-center lg:text-[4rem]'>Chamada pra ação</h1>
            </div>
            <div className='flex justify-center items-center pt-2'>
              <p className='text-[1rem] text-[#000]/75 font-normal text-center max-w-[19rem] lg:max-w-[50rem]'>Depois de ter conquistado o clientes você chama ele para um papo rápido ou um orçamento</p>
            </div>
            <div className='flex justify-center items-center pt-7 pb-16'>
              <div className='flex justify-center items-center pt-7 lg:pt-0 lg:mr-3'>
                <input className='px-8 py-3 outline-none rounded-[0.37rem] text-[1rem] text-[#88898A] ' type='text' placeholder='Seu nome'></input>
              </div>
              <div className='flex justify-center items-center pt-3 lg:pt-0'>
                <input className='px-8 py-3 outline-none rounded-[0.37rem] text-[1rem] text-[#88898A]' type='text' placeholder='Seu E-mail'></input>
              </div>
              <div className='flex justify-center items-center pt-5 pb-16 lg:pb-0 lg:pt-0'>
                <button className='bg-[#009fe3] py-4 px-[1.6rem] text-[0.83rem] ml-3 text-[#fff] font-bold rounded-[0.50rem]'>AGENDE UM PAPO PARA CONHECER</button>
              </div>
            </div>
          </div>


          <section id='faq'>

          <div className='bg-[#161616] w-full h-full bg-cover bg-center lg:hidden'>
            <div>
              <p className='text-[#009fe3] text-[0.75rem] font-normal text-center pt-10'>F A Q</p>
            </div>
            <div className='flex justify-center items-center'>
              <h1 className='text-[#fff] text-[2.5rem] font-bold max-w-[20rem] text-center leading-[3rem]'>Perguntas Frequentes</h1>
            </div>

            <div>
              <Faq/>
            </div>
          </div>

          <div 
            style={{ backgroundImage: 'url(/BG8.svg)' }}  
            className="w-full min-h-screen bg-cover bg-center py-10 hidden lg:block"
          >
            <div className="hidden lg:flex lg:max-w-6xl lg:mx-auto lg:relative lg:overflow-hidden pt-24">
              
              {/* Esquerda - FAQ */}
              
              <div className="w-1/2 ml-44">
                <FaqDois />
              </div>
             
              {/* Direita - Título */}
              <div className="w-1/2 flex flex-col justify-center pl-8">
                <p className="text-[#009fe3] text-xs font-normal mb-2">F A Q</p>
                <h1 className="text-white text-4xl font-bold leading-tight">
                  Dúvidas <br /> frequentes
                </h1>
              </div>

            </div>
          </div>
        </section>


          <div className='lg:hidden'>
            <Footer/>
          </div>

          <div className='lg:block hidden'>
            <FooterDdois/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
