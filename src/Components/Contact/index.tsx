import React from "react"
import Menu from "../Menu"
import Footer from "../Footer"

export default function Contact() {
    return (
        <div>
        <Menu />
        <div className="flex flex-col h-screen overflow-hidden bg-white">
            <div className="mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <section className="my-4 p-0.5">
                    <header className="mb-3">
                        <h1 className="text-3xl font-bold mb-2">
                            Contato
                        </h1>
                        <p className="mb-3">
                            Alguma dúvida? Problema com o seu pedido? Estamos aqui para ajudar!
                        </p>
                    </header>
                    <form action="https://uptickets.com.br/contato">
                        <div className="flex flex-wrap mx-n6">
                            <div className="w-full flex-none">
                                <div className="mb-1">
                                    <label className="p-1 block text-sm leading-4" htmlFor="">Nome completo</label>
                                    <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="text" />
                                </div>
                                <div className="mb-1">
                                    <label className="p-1 block text-sm leading-4" htmlFor="">E-mail</label>
                                    <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="email" />
                                </div>
                                <div className="mb-1"></div>
                                <label className="p-1 block text-sm leading-4" htmlFor="">Telefone</label>
                                <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="phone" />
                                <div className="mb-1">
                                    <div>
                                        <div className="w-304 h-78">
                                            <div>
                                            <iframe className="block align-middle " title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcvQSMeAAAAANELR0YrW_I1_jEBskUtALbYMZ5c&amp;co=aHR0cHM6Ly91cHRpY2tldHMuY29tLmJyOjQ0Mw..&amp;hl=pt-BR&amp;v=6MY32oPwFCn9SUKWt8czDsDw&amp;size=normal&amp;cb=gxqycux0nv2k" width="304" height="78" role="presentation" name="a-sehe5u7h6muk" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">#document</iframe>
                                            </div>
                                            <textarea className="w-64 h-10 border border-gray-300 m-10 mx-25 p-0 resize-none hidden"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex-none">
                                <div className="mb-1">
                                    <label className="p-1 block text-sm leading-4" htmlFor="">Titulo da mensagem</label>
                                    <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' placeholder="Descreva o titulo da mensagem em poucas palavras." type="text" />
                                </div>
                                <div className="mb-1">
                                    <label className="p-1 block text-sm leading-4" htmlFor="">Mensagem</label>
                                    <textarea className=" min-h-133 box-border resize-y w-full appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200" name="message" id="message" placeholder="Digite sua mensagem detalhadamente para respondermos o mais rápido possível."></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="bg-[#cc1558] border border-red-600 rounded cursor-pointer inline-block leading-4 outline-none px-2 py-1 text-center text-white">Enviar mensagem</button>
                    </form>
                </section>
            </div>
            <Footer />
        </div>
        </div>
    )
}