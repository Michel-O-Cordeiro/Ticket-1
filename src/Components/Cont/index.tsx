import LogoNormal from '@/assets/imgs/logo-small.png';
import React from 'react'
import Image from 'next/image'
import Footer from "../Footer"


export default function Cont() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden w-full">
            <header className="bg-white border-b-2 border-gray-300 fixed inset-x-0 top-0 z-50 py-2 left-0 right-0">
                <div className='flex items-center mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                    <a href="/">
                        <Image className='block' src={LogoNormal} alt="logonormal" height={46} />
                    </a>
                    <nav className='ml-auto'>
                        <a href="/conta" className="text-gray-700 font-normal inline-block mx-4 whitespace-nowrap">minha-conta</a>
                        <a href="/" className="text-gray-700 font-normal inline-block mx-4 whitespace-nowrap">Meus ingressos</a>
                        <a href="/ajuda" className="text-gray-700 font-normal inline-block mx-4 whitespace-nowrap">Ajuda</a>
                        <a href="/" className="text-gray-700 font-normal inline-block mx-4 whitespace-nowrap">Sair</a>
                    </nav>
                </div>
            </header>
            <section className='transition duration-500 ease-in-out mt-[var(--header-height)]'>
                <section className='my-1 mx-auto max-w-[1600px] px-1 w-full'>
                    <header className='mb-1'>

                    </header>
                    <div className='flex flex-wrap ml-[-0.6rem] mr-[-0.6rem]'>
                        <div className='flex-none w-1/3'>
                            <div className='mb-0.6 g-white border border-gray-300 rounded-md shadow-md overflow-hidden'>
                                <nav>
                                    <div className='flex items-center border-b-0.5 border-gray-300 text-gray-700'>
                                        <a className='text-[#e92b71]' href=""><svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>Meus dados</a>
                                    </div>
                                    <div className='flex items-center border-b-0.5 border-gray-300 text-gray-700'>

                                    </div>
                                    <div className='flex items-center border-b-0.5 border-gray-300 text-gray-700'>

                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className='flex-none w-2/3'>
                            <div className='mb-3'>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
};