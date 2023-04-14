import LogoWhite from '@/assets/imgs/logo-small-inverse.png';
import React from 'react'
import Image from 'next/image'

export default function Header({ title, date }: { title: string, date: string }) {
  return (
    <div className="fixed inset-x-0 top-0 ">
      <div className=" bg-pink-500 flex items-center font-semibold justify-between py-1.5 px-4 w-full h-16">
        <h1 className=" text-white flex-1 overflow-hidden whitespace-nowrap">{title}</h1>
        <div className=" my-0 mx-2.5">
          <a href="/">
            <Image className='block' src={LogoWhite} alt="Logo" height={42} />
          </a>
        </div>
        <h1 className="text-white flex-1 overflow-hidden truncate whitespace-nowrap text-right">{date}</h1>
      </div>
    </div>
  )
}
