'use client'
import React from 'react'
import 'swiper/css'

const SwiperProject = ({project,index}) => {
  return (
    <div className="w-screen text-center flex-shrink-0 snap-center flex flex-col space-y-4 justify-center items-center p-4 md:p-15  h-[25rem] md:h-[30rem]">
        <img src='/cvimg.jpg' alt='project' className="h-32 w-32 rounded-full object-cover"/>
        <h3 className="text-lg font-bold">{index}</h3>
        <p className="text-sm">i make this using nextjs tailiwdind css and have lots of function like filter search likes and many more</p>
        <a href='/' target="_blank" rel="noreferrer" className="text-sm text-fuchsia-700 hover:text-fuchsia-900 transition duration-300">View
        Project</a>
    </div>
  )
}

export default SwiperProject