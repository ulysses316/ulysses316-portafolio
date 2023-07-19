import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MainLayout from '@/components/common/MainLayout'

import ArticlesSection from '@/components/ArticlesSection'
import ReposSection from '@/components/ReposSection'

import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ulysses316</title>
        <meta name="description" content="Bienvenido a mi sitio web, donde podrá explorar mis habilidades, proyectos y logros en el desarrollo de software. no dude en ponerse en contacto conmigo para hablar sobre interesantes oportunidades y colaboraciones." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | ulysses316" />
        <meta property="og:description" content="Bienvenido a mi sitio web, donde podrá explorar mis habilidades, proyectos y logros en el desarrollo de software. no dude en ponerse en contacto conmigo para hablar sobre interesantes oportunidades y colaboraciones." />
        <meta property="og:image" content="/me.jpg" />
      </Head>

      <Navbar />
      <MainLayout>
        <Hero />
        <ReposSection />
        <ArticlesSection />
        <Footer />
      </MainLayout>
    </>
  )
}