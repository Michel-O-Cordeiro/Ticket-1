import React, { useState } from 'react';

export function Form() {
    const [quantidade, setQuantidade] = useState(0);

    const precoIngresso = 60;
    const taxa = 6;

    const subtotal = quantidade * precoIngresso;
    const totalTaxa = quantidade * taxa;
    const total = subtotal + totalTaxa;

    const handleDiminuir = () => {
        if (quantidade > 0) {
            setQuantidade(quantidade - 1);
        }
    }

    const handleAumentar = () => {
        setQuantidade(quantidade + 1);
    }

    const handleComprar = () => {
        alert(`Compra efetuada com sucesso!${quantidade} Ingresso, Total:R$ ${total},00`);
    }

    return (
        <div className='bg-white border-#ccffff shadow-2xl block flex-col font-semibold bottom-0 top-0 right-0 leading-5 p-12 relative w-155'>
            <div className=''>
                <h1><strong>Ingressos</strong></h1>
            </div>
            <br />
            <div className='flex flex-row'>
                <label className='p-2'>Unitário (Lote Promocional)</label>
                <br />
                <label className='p-2'>R$60,00 + R$6,00 de taxa</label>
                <label className='p-2'>Em até 12x no cartão de crédito</label>
                <br />
                <div className='flex flex-row items-center'>
                    <button className='bg-pink-500 p-1 rounded-full' onClick={handleDiminuir}>-</button>
                    <br />
                    <div className='p-2'>
                    <span>{quantidade}</span>
                    </div>
                    <br />
                    <button className='bg-pink-500 p-1 rounded-full' onClick={handleAumentar}>+</button>
                </div>
            </div>
                <hr />
            <div className='p-1'>
                <label>Subtotal:R$</label>
                <span>{subtotal},00</span>
            </div>

            <div className='p-1'>
                <label>Taxas:R$</label>
                <span>{totalTaxa},00</span>
            </div>

            <div className='p-2'>
                <label>Total:R$</label>
                <span>{total},00</span>
            </div>

            <button className='p-4 rounded-full bg-orange-400 border-orange-500' onClick={handleComprar}>Comprar</button>
        </div>
    );
}
