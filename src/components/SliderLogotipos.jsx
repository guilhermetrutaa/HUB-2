import React from 'react'
import Image from 'next/image'

const SliderLogotipos = () => {
  const logos = [
    { src: "/bitpanda.svg", alt: "Icon-BitPanda" },
    { src: "/Icon1.svg", alt: "teste" },
    { src: "/Icon2.svg", alt: "Icon-2" },
    { src: "/Icon3.svg", alt: "Icon-3" },
    { src: "/Icon4.svg", alt: "Icon-4" },
    { src: "/Icon5.svg", alt: "Icon-5" },
    { src: "/Icon6.svg", alt: "Icon-6" },
    { src: "/Icon7.svg", alt: "Icon-7" },
    { src: "/Icon8.svg", alt: "Icon-8" },
    { src: "/Icon9.svg", alt: "Icon-9" },
    { src: "/Icon10.svg", alt: "Icon-10" },
  ]

  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="relative h-6 w-full overflow-hidden mt-8">
      <div className="flex absolute inset-0 animate-slider space-x-8">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`} 
            className="relative h-full flex-shrink-0 flex items-center justify-center"
            style={{ width: 'calc(100% / 6)' }} 
          >
            <div className="flex items-center justify-center w-full h-full opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={125}
                height={35}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderLogotipos