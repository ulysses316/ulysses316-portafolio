"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/20/solid';
import { MoonIcon } from '@heroicons/react/24/outline';

const ToggleTheme = () => {
    const { systemTheme, theme, setTheme } = useTheme("");
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [icon, setIcon] = useState("")

    useEffect(() => {
        theme === "dark" && setIcon(<SunIcon className="h-6 w-6" aria-hidden="true" />)
        theme === "light" && setIcon(<MoonIcon className="h-6 w-6" aria-hidden="true" />)
    }, [theme]);

    return (
        <button
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
            className=' bg-primary-red dark:bg-primary-purple transition-all duration-100 text-white px-8 py-2 text-2xl md:text-4xl rounded-lg bottom-32'>
             {icon}
        </button>
    )
}

export default ToggleTheme