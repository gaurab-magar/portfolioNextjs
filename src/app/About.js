import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
      <section className="w-full py-6 md:py-10">
            <h2 className="font-bold tracking-[7px] md:tracking-[14px] text-lg uppercase text-center pb-4 text-fuchsia-700">ABOUT ME</h2>
            <div className="container mx-auto p-4 grid gap-6 md:grid-cols-2 lg:gap-12">
                <div className="space-y-2 flex items-center justify-center">
                    <div className='rounded-full overflow-hidden w-40 h-40 md:w-72 md:h-72 '>
                        <Image src={'/cvimg.jpg'} alt='gaurabImg' className='object-cover' width={300} height={300} />
                    </div>
                </div>
                <div className="space-y-2">
                <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Im a passionate frontend developer with a keen eye for design. I specialize in creating beautiful,
                    responsive, and user-friendly web applications using the latest technologies and best practices.
                </p>
                </div>
           </div>
         </section>
  )
}

export default About