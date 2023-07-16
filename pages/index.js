import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MainLayout from '@/components/common/MainLayout'

import ArticlesSection from '@/components/ArticlesSection'
import ReposSection from '@/components/ReposSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <ArticlesSection />
        <ReposSection/>
        <Footer />
      </MainLayout>
    </>
  )
}
