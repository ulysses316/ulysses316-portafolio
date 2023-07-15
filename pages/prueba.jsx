import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ToggleTheme from '@/components/ToggleTheme'

const inter = Inter({ subsets: ['latin'] })

export default function Prueba() {
  return (
    <>
    <Navbar/>
    <Header/>
    </>
  )
}
