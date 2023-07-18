import React from 'react'
import Card from './common/Card'
import Link from 'next/link'

export default function Blog() {
  return (
    <section className='flex justify-center min-h-[74dvh] pt-6'>
      <div className='text-black dark:text-white max-w-[42rem]'>
        <h1 className='text-[60px] font-serif text-center'>Blog</h1>
        <Link href="#">
          <div className='mt-10'>
            <Card>
              <div className='flex items-center flex-col md:flex-row md:gap-2 mb-[16px]'>
                <h2 className='text-primary-red dark:text-primary-purple font-bold text-[23px]'>The CSS mindset</h2><span className='font-bold'>⋅</span><time className='text-[14px] font-bold'>30 de Junio</time>
              </div>
              <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo esse magni laborum aliquid nesciunt exercitationem unde hic dolore voluptas natus, quaerat, inventore similique voluptates quia amet quo placeat. Eius, ea?</p>
            </Card>
          </div>
        </Link>
      </div>
    </section>
  )
}
