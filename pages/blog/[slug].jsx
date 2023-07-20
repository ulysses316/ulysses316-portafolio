import React from 'react'
import Navbar from '@/components/Navbar'
import MainLayout from '@/components/common/MainLayout'
import Footer from '@/components/Footer'
import Article from '@/components/Article'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import { markdownToHtml } from '@/utils/articleHtml'


export default function ArticlePage() {
    const html = markdownToHtml("hello-world-deno-10-articulo-de-2020-5gdk");
    console.log(html);
    
    return (
        <>
            {/* <Head>
                <title>About | ulysses316</title>
                <meta name="description" content="Bienvenido a mi sitio web, donde podrá explorar mis habilidades, proyectos y logros en el desarrollo de software. no dude en ponerse en contacto conmigo para hablar sobre interesantes oportunidades y colaboraciones." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About | ulysses316" />
                <meta property="og:description" content="Bienvenido a mi sitio web, donde podrá explorar mis habilidades, proyectos y logros en el desarrollo de software. no dude en ponerse en contacto conmigo para hablar sobre interesantes oportunidades y colaboraciones." />
                <meta property="og:image" content="/me.jpg" />
            </Head> */}

            <Navbar />
            <MainLayout>
                <Article />
                <Footer />
            </MainLayout>
        </>
    )
}
