'use client'
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';


const TypeWriter = () => {
    const [text , count] = useTypewriter({
        words:[
          'Welcome to my portfolio',
          'I am a full stack developer',
          'I build scalable and efficient applications',
        ],
        loop: true,
        delaySpeed: 3000,
      })
  return (
        <h4 className='text-2xl font-mono py-2'>
            <span>{text}</span>
            <Cursor cursorColor='white' />
        </h4>  )
}

export default TypeWriter