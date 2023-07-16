import React from 'react'

export default function MainLayout({ children }) {
  return (
    <main className='px-3 sm:container sm:mx-auto'>
        { children }
    </main>
  )
}
