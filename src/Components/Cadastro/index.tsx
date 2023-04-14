import LogoNormal from '@/assets/imgs/logo-small.png';
import React from 'react'
import Image from 'next/image'

export default function Cadastro() {
    return (
        <div className='bg-white flex flex-col min-h-screen overflow-hidden w-full'>
            <div className="bg-[#fff] py-2.5 px-0 inset-x-0 top-0 h-16 items-center max-w-1200">
                <div className="flex items-center justify-center">
                    <a href="/">
                        <Image className='block' src={LogoNormal} alt="logonormal" height={46} />
                    </a>
                </div>
            </div>
            <section className='max-w-md my-4 mx-auto overflow-hidden w-full px-2'>
                <form className=''>
                    <a className=' w-full text-center py-2 px-2 bg-blue-600 border-blue-700 text-white block rounded-sm ' href="https://uptickets.com.br/login/facebook">
                        <svg className="h-4 align-middle inline-block" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="square-facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>Entrar com facebook
                    </a>
                    <div className='border-t h-px my-6 relative text-center leading-none'>
                        <span>Ou</span>
                    </div>
                    <div className='mb-3'>
                        <label className='className="p-1 block text-sm leading-4"' htmlFor="">E- mail</label>
                        <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="email" />
                    </div>
                    <div className='mb-3'>
                        <label className="p-1 block text-sm leading-4" htmlFor="">Senha</label>
                        <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="password" />
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-1/2'>
                            <div className=''>
                                <label className='block w-full py-1.2 px-0.4 mb-0.2 leading-1.2 ' htmlFor="">
                                    <input type="checkbox" />
                                    <i className=''></i>
                                    Lembrar de mim
                                </label>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className=' text-right'>
                                <a className='text-[#cc1558]' href="">Esqueceu sua senha?</a>
                            </div>
                        </div>
                    </div>
                    <a href='/conta' className='w-full text-center py-2 px-2 bg-white  border-2 border-cc1558 border-red-500 text-[#cc1558] block rounded-md'>
                        Entrar
                    </a>
                    <div className='border-t h-px my-6 relative text-center leading-none'>
                        <span>Não tem uma conta?</span>
                    </div>
                    <button className='w-full text-center py-2 px-2 bg-red-500  border-2 border-cc1558 border-red-500 text-white block rounded-md'>
                        Cadastre-se
                    </button>
                </form>
            </section>
        </div>
    );
};