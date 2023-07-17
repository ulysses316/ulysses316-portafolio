import React from 'react'
import Navbar from '@/components/Navbar'
import MainLayout from '@/components/common/MainLayout'
import Footer from '@/components/Footer'
import About from '@/components/About'

import Head from 'next/head'

export default function contact() {
  return (
    <>

      <Head>
        <title>About | ulysses316</title>
        <meta name="description" content="Bienvenido a mi sitio web, donde podrá explorar mis habilidades, proyectos y logros en el desarrollo de software. no dude en ponerse en contacto conmigo para hablar sobre interesantes oportunidades y colaboraciones." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About | ulysses316" />
        <meta property="og:description" content="Bienvenido a mi sitio web, donde podrá explorar mis habilidades, proyectos y logros en el desarrollo de software. no dude en ponerse en contacto conmigo para hablar sobre interesantes oportunidades y colaboraciones." />
        <meta property="og:image" content="/me.jpg" />
      </Head>

      <Navbar />
      <MainLayout>
        <About />
        <Footer />
      </MainLayout>
    </>
  )
}
