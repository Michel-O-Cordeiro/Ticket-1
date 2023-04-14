import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import Menu from '@/Components/Menu'
import Grid from '@/Components/Grid'
import Footer from '@/Components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col overflow-hidden w-full min-h-screen'>
      <Menu />
      <hr />
      <Grid />
      <Footer />
    </div>
  )
}
