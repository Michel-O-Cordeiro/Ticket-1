import React from "react"
import Menu from "../Menu"
import Footer from "../Footer"

export default function Help() {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-white">
            <Menu />
            <div className="mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <section className="my-4 p-0.5">
                    <header className="mb-3">
                        <h1 className="text-3xl font-bold mb-2">Ajuda</h1>
                        <p className="mb-3">Tem uma dúvida? Encontre respostas aqui.</p>
                    </header>
                    <div className="grid gap-8 grid-cols-2">
                        <div>
                            <h2 className="text-base font-medium leading-5 mb-3 mt-0">Como eu uso/retiro o ingresso?</h2>
                            <p className="mb-3">Isso pode variar de evento para evento, em alguns eventos você pode entrar diretamente com o ingresso gerado pela UP Tickets, outros você precisa realizar a troca do ingresso na bilheteria.</p>
                        </div>
                        <div>
                            <h2 className="text-base font-medium leading-5 mb-3 mt-0">Outra pessoa pode retirar/usar o ingresso por mim?</h2>
                            <p className="mb-3">Sim. Porém, pedimos o RG/CPF ou CNH do titular do ingresso no momento da liberação/retirada.</p>
                        </div>
                        <div>
                            <h2 className="text-base font-medium leading-5 mb-3 mt-0">Quero reembolso do ingresso, como faço?</h2>
                            <p className="mb-3">Você pode pedir reembolso em até 7 dias após a compra, contanto que seja solicitado no máximo a 2 dias da data da realização evento. Você
                                precisa enviar um e-mail para
                                <a href="mailto:contato@uptickets.com.br"><strong> contato@uptickets.com.br </strong></a>
                                , juntamente com número
                                do CPF. Responderemos em até 2 dias úteis. </p>
                        </div>
                        <div>
                            <h2 className="text-base font-medium leading-5 mb-3 mt-0">Posso parcelar o valor do pedido?</h2>
                            <p className="mb-3">Claro! Você pode parcelar em até 12x no cartão de crédito.</p>
                        </div>
                        <div>
                            <h2 className="text-base font-medium leading-5 mb-3 mt-0">Quais os documentos necessários para o uso do ingresso?</h2>
                            <p className="mb-3">Nós pedimos o RG/CPF ou CNH do titular do ingresso.</p>
                        </div>
                        <div>
                            <h2 className="text-base font-medium leading-5 mb-3 mt-0">Após realizar o pedido, quanto tempo tenho para realizar o pagamento?</h2>
                            <p className="mb-3">Você tem 30 minutos no cartão de crédito, e caso for no boleto, até o vencimento. Após o prazo, cancelaremos o pedido e caso for do seu
                            interesse, deverá ser feito um novo.</p>
                        </div>
                        <div>
                            <h2 className="text-base font-medium leading-5 mb-3 mt-0">Quero comprar um ingresso para uma outra pessoa, posso?</h2>
                            <p className="mb-3">Claro! Porém, será solicitado o RG/CPF do titular da compra no momento da retirada/uso do ingresso para comprovação.</p>
                        </div>
                        <div>
                            <h2 className="text-base font-medium leading-5 mb-3 mt-0">O valor do ingresso pode ser alterado?</h2>
                            <p className="mb-3">Sim, os ingressos são divididos por lotes, podendo ser alterado a qualquer momento sem aviso prévio.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}