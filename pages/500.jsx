import React from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MainLayout from '@/components/common/MainLayout'

import { useContext } from 'react'
import { LanguageContext } from '@/components/context/LanguageContext'

import { ExclamationCircleIcon } from '@heroicons/react/24/outline'


export default function Custom404() {

    const { idiom } = useContext(LanguageContext)

    return (
        <>
            <Navbar />
            <MainLayout>
                <section className='flex justify-center items-center min-h-[74dvh] flex-col'>
                    <ExclamationCircleIcon className='text-black dark:text-white inline w-10' />
                    <h1 className='text-black dark:text-white text-4xl'>{idiom.error.title}</h1>
                    <h2 className='text-black dark:text-white text-2xl'>{idiom.error.errorCode}</h2>
                </section>
                <Footer />
            </MainLayout>
        </>
    )
}