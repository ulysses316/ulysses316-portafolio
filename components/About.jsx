import { useContext } from 'react'
import { LanguageContext } from './context/LanguageContext'

export default function About() {

  const { idiom } = useContext(LanguageContext)

  return (
    <section className='flex justify-center items-center min-h-[74dvh]'>
      <div className='text-black dark:text-white'>
        <div className='text-center my-8'>
          <h1 className='text-[60px] font-serif'>{idiom.about.title}</h1>
          <h2 className='text-primary-red dark:text-primary-purple font-bold text-[20px] font-serif'>{idiom.about.subtitle}</h2>
        </div>
        <div className='max-w-[42rem]'>
          <p className='my-[16px]'>
            {idiom.about.firstText}
          </p>
          <p className='my-[16px]'>
            {idiom.about.secondText}
          </p>
          <p className='my-[16px]'>
            {idiom.about.thirdText}
          </p>
        </div>
      </div>
    </section>
  )
}
