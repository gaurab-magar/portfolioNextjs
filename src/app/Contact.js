import React from 'react'

const Contact = () => {
  return (
    <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
            <h2 className="font-bold tracking-[7px] md:tracking-[14px] text-lg uppercase text-center pb-4 text-fuchsia-700">ABOUT ME</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Feel free to reach out to me if you have any questions or would like to collaborate.
                </p>
            </div>
        </div>
        <div className="px-6 mx-auto max-w-md py-12">
            <form className="grid gap-4">
                <input type="text" placeholder="Name" className="w-full p-2 outline-none bg-transparent border-b border-gray-400" />
                <input type="email" placeholder="Email" className="w-full p-2 outline-none bg-transparent border-b border-gray-200" />
                <textarea placeholder="Message" rows='4' className="w-full outline-none bg-transparent border-b border-gray-200" />
                <button type="submit" className="block font-bold p-2 bg-fuchsia-700 my-2">
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact