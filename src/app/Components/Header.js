import React from 'react'
import Link from 'next/link'
import { AiOutlineDingding } from "react-icons/ai";
import DownloadCV from './DownloadCV';

const Header = () => {
  return (
    <nav className="fixed z-50 top-4 left-4 md:left-48 rounded-3xl mx-auto w-11/12 md:w-9/12 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex h-12 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-1 text-lg font-semibold">
          <AiOutlineDingding className="text-2xl text-fuchsia-700" />
          <span className="font-semibold text-xs md:text-sm ">Gaurab Magar</span>
        </Link>

        <div className="flex gap-3 md:gap-7 text-sm font-medium mx-auto">
          <Link href="/" className="hover:underline hover:underline-offset-4">
            About
          </Link>
          <Link href="/" className="hover:underline hover:underline-offset-4">
            Projects
          </Link>
          <Link href="/" className="hover:underline hover:underline-offset-4">
            Contact
          </Link>
        </div>

        <div className='hidden md:inline-flex'>
          <DownloadCV />
        </div>
      </div>
    </nav>
  )
}

export default Header