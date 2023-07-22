import React, { Children } from 'react'

export default function Card({ children }) {
    return (
        <div className="bg-primary-light dark:bg-primary-dark text-black dark:text-white mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-300 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
                {children}
            </div>
        </div>
    )
}
