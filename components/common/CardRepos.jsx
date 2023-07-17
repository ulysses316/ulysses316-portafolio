import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function CardRepos({title, description, html_url}) {
    return (
        <>
            <style>
                {`
                .card-transition {
                    transition: 0.15s padding ease-out, 0.15s margin ease-out, 0.15s border ease-out;
                }

                .card-transition:hover {
                    transition: 0.15s padding ease-out, 0.15s margin ease-out, 0.15s border ease-out;
                }
    `}
            </style>
            <a target='_blank' href={html_url}>
                <div className='rounded-lg shadow-xl md:shadow-2xl py-4 px-6 text-black dark:text-white card-transition hover:py-6 hover:px-8 min-h-[200px]'>
                    <h2 className='text-primary-red dark:text-primary-purple font-bold text-[23px]'>{title}</h2>
                    <p className='my-[16px]'>{description}</p>
                </div>
            </a>
        </>
    )
}
