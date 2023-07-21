import React from 'react'
import Navbar from '@/components/Navbar'
import MainLayout from '@/components/common/MainLayout'
import Footer from '@/components/Footer'
import Article from '@/components/Article'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import { markdownToHtml } from '@/utils/articleHtml'


export default function ArticlePage() {
    const [dataArticle, setDataArticle] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const articleHtml = await markdownToHtml(
                    'hello-world-deno-10-articulo-de-2020-5gdk'
                );
                setDataArticle(articleHtml);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>{dataArticle.title} | ulysses316</title>
                <meta name="description" content={dataArticle.description}/>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${dataArticle.description} | ulysses316`} />
                <meta property="og:description" content={`${dataArticle.description}`} />
                <meta property="og:image" content={`${dataArticle.cover}`} />            
            </Head>

            <Navbar />
            <MainLayout>
                <Article data={dataArticle} />
                <Footer />
            </MainLayout>
        </>
    )
}
