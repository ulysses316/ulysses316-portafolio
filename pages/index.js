import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import CardArtitle from '@/components/common/CardArtitle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    

    <div className='container mx-auto grid grid-cols-3 gap-6 my-12'>
      <CardArtitle/>
      <CardArtitle/>
      <CardArtitle/>
    </div>


    <Footer/>
    </>
  )
}
