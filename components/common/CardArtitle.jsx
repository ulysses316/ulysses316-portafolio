import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function CardArtitle() {
    return (
        <a href="#">
            <div className='rounded-lg shadow-3xl shadow-2xl py-4 px-6 text-black dark:text-white'>
                <h2 className='text-primary-red dark:text-primary-purple font-bold text-[23px]'>The CSS mindset</h2>
                <p className='my-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cum culpa libero minus nesciunt, incidunt nostrum beatae, odio possimus dicta voluptatem fuga vitae sint provident? Quos praesentium expedita perferendis adipisci!</p>
                <div>
                    <hr />
                    <div className='flex items-center gap-2 mt-3 hover:text-primary-red'>
                        <HeartIcon className='w-6' />
                        <span>505</span>
                    </div>
                </div>
            </div>
        </a>
    )
}
