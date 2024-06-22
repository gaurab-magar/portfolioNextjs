'use client'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperProject from './Components/SwiperProject';
import 'swiper/swiper-bundle.css';
import { Autoplay,pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Project = () => {
    const Projects = [1,2,3,4]

    return(
    <section className="w-full py-6 md:py-10 relative">
        <h2 className="font-bold tracking-[7px] md:tracking-[14px] text-lg uppercase text-center pb-4 text-fuchsia-700">MY PROJECT</h2>
        <div className="mx-auto">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {Projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <SwiperProject project={project} index={index} />
                </SwiperSlide>
             ))}
            </Swiper>
        </div>
        <div className='w-full absolute top-32 bg-[gray]/15 left-0 h-80 -skew-y-12'></div>
    </section>
    )
}

export default Project
