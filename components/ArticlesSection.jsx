import { useContext } from 'react'
import { LanguageContext } from './context/LanguageContext'
import CardArtitle from './common/CardArtitle'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function ArticlesSection() {

  const { idiom } = useContext(LanguageContext)

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12'>
        <CardArtitle />
        <CardArtitle />
        <CardArtitle />
        <CardArtitle />
      </div>
      <div className='flex justify-end'>
        <Link className='text-primary-red dark:text-primary-purple font-bold text-lg' href={"#"}>{idiom.articleSection.cta}</Link>
        <ArrowRightIcon className='text-primary-red dark:text-primary-purple w-6'/>
      </div>
    </section>
  )
}