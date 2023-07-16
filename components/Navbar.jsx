import { useState, useContext } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import Link from 'next/link'

import ToggleTheme from './ToggleTheme'
import { LanguageContext } from './context/LanguageContext'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const {idiom, setIdiom, handdleIdiom } = useContext(LanguageContext)
    
    return (
        <header className="bg-transparent text-black dark:text-white shadow-lg">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <h5 className='text-primary-red dark:text-primary-purple font-bold'>H. Ulises G.M.</h5>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link href="/prueba" className="text-sm font-semibold leading-6">
                        {idiom.navbar.portafolio}
                    </Link>
                    <a href="#" className="text-sm font-semibold leading-6">
                        {idiom.navbar.blog}
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6">
                        {idiom.navbar.contact}
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 uppercase">
                        cv
                    </a>
                    <p onClick={handdleIdiom} className="text-sm font-semibold leading-6 cursor-pointer uppercase">
                        {idiom.navbar.idiom}
                    </p>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6">
                        <ToggleTheme />
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-light dark:bg-primary-dark text-black dark:text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <h5 className='text-primary-red dark:text-primary-purple font-bold'>H. Ulises G.M.</h5>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                                >
                                    {idiom.navbar.portafolio}
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                                >
                                    {idiom.navbar.blog}
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                                >
                                    {idiom.navbar.contact}
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 uppercase"
                                >
                                    cv
                                </a>
                                <p onClick={handdleIdiom} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 cursor-pointer uppercase">
                                    {idiom.navbar.idiom}
                                </p>
                            </div>
                            <div className="py-6">
                                <ToggleTheme />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
