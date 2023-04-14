import LogoNormal from '@/assets/imgs/logo-small.png';
import React, { useState } from 'react'
import Image from 'next/image'
import { db, auth } from '@/firebaseConnection'

import { doc, setDoc, collection, addDoc, getDoc} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth';


function Cadastrar() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    async function handleAdd(){

    await addDoc(collection(db, "users"), {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        senha: senha
      })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO")
        setNome('');
        setEmail('');
        setCpf('');
        setTelefone('');
        setSenha('');
      })
      .catch((error) => {
        console.log("ERRO " + error)
      })


    }

    async function novoUsuario(){
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            console.log("CADASTRADO COM SUCESSO")
        })
        .catch(() => {
          console.log("ERRO AO CADASTRAR")
        })

    }

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
                <header className='mb-1'>
                    <h1 className="text-3xl font-bold mb-2">Cadastro</h1>
                    <p className="mb-3">Preencha os dados abaixo para se cadastrar e aproveitar o melhor dos ingressos.</p>
                </header>
                <form className=''>
                    <div className='mb-3'>
                        <label className='className="p-1 block text-sm leading-4"' htmlFor="">Nome completo *</label>
                        <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="text" value={nome} onChange={ (e) => setNome(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label className="p-1 block text-sm leading-4" htmlFor="">E-mail *</label>
                        <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
                    </div>
                    <div className='mb-3'>
                        <label className="p-1 block text-sm leading-4" htmlFor="">CPF *</label>
                        <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="text" placeholder="000.000.000-00" value={cpf} onChange={ (e) => setCpf(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label className="p-1 block text-sm leading-4" htmlFor="">Telefone *</label>
                        <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="tel" value={telefone} onChange={ (e) => setTelefone(e.target.value) }/>
                    </div>
                    <h4 className="border-b-2 border-gray-300 font-semibold mb-2 py-3 px-0 text-base leading-6 mt-0 ">Segurança</h4>
                    <div className='flex flex-wrap ml-[-0.6rem] mr-[-0.6rem]'>
                        <div className='flex-none w-full px-3 max-w-full'>
                            <div className='mb-3'>
                                <label className="p-1 block text-sm leading-4" htmlFor="">Senha *</label>
                                <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="password" />
                            </div>
                        </div>
                        <div className='flex-none w-full px-3 max-w-full'>
                            <div className='mb-3'>
                                <label className="p-1 block text-sm leading-4" htmlFor="">Confirmar senha *</label>
                                <input className='appearance-none bg-white border border-gray-300 rounded outline-none p-2 transition duration-200 w-full' type="password" value={senha} onChange={ (e) => setSenha(e.target.value) }/>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label className="block w-full py-1.2 px-0.4 mb-0.2 leading-1.2 ">
                            <input type="checkbox" name="terms" id="terms" />
                            <i className=""></i> Li e aceito os <a className='text-red-600 outline-none no-underline' href="https://uptickets.com.br/termos-de-uso"><strong>termos de uso</strong></a> e a
                            <a className='text-red-600 outline-none no-underline' href=" https://uptickets.com.br/politica-de-privacidade">
                                <strong> política de privacidade</strong>
                            </a>.
                        </label>
                    </div>
                    <div>
                        <a href="/cadastro1"></a>
                        <button onClick={novoUsuario} className='w-full text-center py-2 px-2 bg-red-500  border-2 border-cc1558 border-red-500 text-white block rounded-md'>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Cadastrar;
