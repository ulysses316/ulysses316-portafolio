import React from 'react'
import Navbar from '@/components/Navbar'
import MainLayout from '@/components/common/MainLayout'
import Footer from '@/components/Footer'
import Article from '@/components/Article'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { markdownToHtml } from '@/utils/articleHtml'


export default function ArticlePage() {
    const [loading, setLoading] = useState(true)
    const [dataArticle, setDataArticle] = useState('');

    useEffect(() => {
        let currentUrl = window.location.href
        currentUrl = currentUrl.replace(/(.*)\/blog\//, '')
        currentUrl = currentUrl.replace('#', '')
        const fetchData = async () => {
            try {
                const articleHtml = await markdownToHtml(currentUrl);
                setDataArticle(articleHtml);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setLoading(!loading)
    }, [dataArticle]);

    return (
        <>
            <Head>
                <title>{dataArticle.title} | ulysses316</title>
                <meta name="description" content={dataArticle.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${dataArticle.description} | ulysses316`} />
                <meta property="og:description" content={`${dataArticle.description}`} />
                <meta property="og:image" content={`${dataArticle.cover}`} />
            </Head>

            <Navbar />
            <MainLayout>
                {(!loading ? (
                    <Article data={dataArticle} />
                ) : (
                    <p>Loading...</p>
                ))}
                <Footer />
            </MainLayout>
        </>
    )
}