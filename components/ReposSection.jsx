import { useContext } from 'react'
import { LanguageContext } from './context/LanguageContext'
import CardRepos from './common/CardRepos'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

import useFetch from '@/hooks/useFetch'

export default function ReposSection() {

  const { idiom } = useContext(LanguageContext)
  
  const repos = [
    "https://api.github.com/repos/ulysses316/ulysses316-portafolio",
    "https://api.github.com/repos/ulysses316/ulysses316-blog-2.0",
    "https://api.github.com/repos/ulysses316/calculadora-dieta-nextjs",
    "https://api.github.com/repos/ulysses316/django-todo",
  ]

  const response = repos.map((url)=>{
    return useFetch(url)
  })
  
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12'>
        {(response && (
          response.map((repo, index)=>(
            <CardRepos key={index} title={repo.data.name} description={repo.data.description} html_url={repo.data.html_url}/>
          ))
        ))}
      </div>
      <div className='flex justify-end'>
        <Link className='text-primary-red dark:text-primary-purple font-bold text-lg' href={"#"}>{idiom.repoSection.cta}</Link>
        <ArrowRightIcon className='text-primary-red dark:text-primary-purple w-6'/>
      </div>
    </section>
  )
}
