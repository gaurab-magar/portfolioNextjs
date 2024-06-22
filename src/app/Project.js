import React from 'react'

const Project = () => {
    const Projects = [1,2,3,4]
    const hideScrollbar = {
        msOverflowStyle: 'none',  /* Internet Explorer 10+ */
        scrollbarWidth: 'none',   /* Firefox */
    };

    const hideScrollbarWebkit = {
        '&::-webkit-scrollbar': {
            display: 'none',       /* Safari and Chrome */
        },
    };
    return(
    <section className="w-full py-6 md:py-10 relative">
        <h2 className="font-bold tracking-[7px] md:tracking-[14px] text-lg uppercase text-center pb-4 text-fuchsia-700">MY PROJECT</h2>
        <div className="mx-auto">
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar- snap-x snap-mandatory z-30
            'style={{...hideScrollbar,...hideScrollbarWebkit}}>
                {Projects.map((i)=>     
                (
                    <div key={i} className="w-screen text-center flex-shrink-0 snap-center flex flex-col space-y-4 justify-center items-center p-4 md:p-15  h-[25rem] md:h-[30rem]">
                        <img src='/cvimg.jpg' alt='project' className="h-32 w-32 rounded-full object-cover"/>
                        <h3 className="text-lg font-bold">netflix clone</h3>
                        <p className="text-sm">i make this using nextjs tailiwdind css and have lots of function like filter search likes and many more</p>
                        <a href='/' target="_blank" rel="noreferrer" className="text-sm text-fuchsia-700 hover:text-fuchsia-900 transition duration-300">View
                        Project</a>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-full absolute top-32 bg-[gray]/15 left-0 h-80 -skew-y-12'></div>
    </section>
    )
}

export default Project