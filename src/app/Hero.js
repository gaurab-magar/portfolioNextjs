import React from 'react'
import HeroMotion from './Components/HeroMotion'
import TypeWriter from './Components/TypeWriter'

const Hero = () => {
  return (
    <section
      className="relative w-full md:h-[80vh] h-[60vh] bg-cover bg-fixed bg-center bg-no-repeat z-10"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div className="relative flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center text-center text-gray-200 p-3">
          <HeroMotion />
          <TypeWriter />
        </div>
      </div>
    </section>
  )
}

export default Hero