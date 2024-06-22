import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Featured = () => {
  return (
    <section className="w-full py-8 dark:bg-gray-800">
            <h2 className="font-bold tracking-[7px] md:tracking-[14px] text-lg uppercase text-center pb-4 text-fuchsia-700">Featured Project</h2>
          <div className="mx-auto container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of my recent frontend development projects.
              </p>
            </div>
            <div className="mx-auto grid gap-2 py-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Link
                href="#"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-lg bg-white p-5 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                <Image
                  src="/cvimg.jpg"
                  width="300"
                  height="200"
                  alt="Project 1"
                  className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                />
                <div className="space-y-1 p-2">
                  <h3 className="text-lg font-bold group-hover:underline">Project 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A modern and responsive web application built with React and Tailwind CSS.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-lg bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                <Image
                  src="/cvimg.jpg"
                  width="300"
                  height="200"
                  alt="Project 2"
                  className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold group-hover:underline">Project 2</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A sleek and intuitive e-commerce website built with Next.js and Tailwind CSS.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-lg bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                <Image
                  src="/cvimg.jpg"
                  width="300"
                  height="200"
                  alt="Project 3"
                  className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold group-hover:underline">Project 3</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A modern and accessible web application built with React and Tailwind CSS.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
)
}

export default Featured