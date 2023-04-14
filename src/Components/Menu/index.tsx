import LogoNormal from '@/assets/imgs/logo-small.png';
import React from 'react'
import Image from 'next/image'


export default function Menu() {
    return (
        <div className="">
            <div className="bg-[#fff] mx-auto flex items-center justify-between py-4 p-10 border-b border-gray-300">
                <a href="/">
                    <Image className='block' src={LogoNormal} alt="logonormal" height={46} />
                </a>
                <nav>
                    <ul className="flex items-center">
                        <li className="mx-4">
                            <a href="/login" className="text-[#cc1558]">Login</a>
                        </li>
                        <li className="mx-4">
                            <a href="/ajuda" className="text-[#cc1558]">Ajuda</a>
                        </li>
                        <li className="mx-4">
                            <a href="/contato" className="text-[#cc1558]">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};