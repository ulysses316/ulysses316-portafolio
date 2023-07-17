import { useContext, useState, useEffect } from 'react'
import { LanguageContext } from './context/LanguageContext'
import CardRepos from './common/CardRepos'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

import useFetch from '@/hooks/useFetch'

export default function ReposSection() {

  const [loading, setLoading] = useState(true);
  const { idiom } = useContext(LanguageContext)

  const response = [
    useFetch("https://api.github.com/repos/ulysses316/ulysses316-portafolio"),
    useFetch("https://api.github.com/repos/ulysses316/ulysses316-blog-2.0"),
    useFetch("https://api.github.com/repos/ulysses316/calculadora-dieta-nextjs"),
    useFetch("https://api.github.com/repos/ulysses316/django-todo"),
  ]

  useEffect(() => {
    if (response.every((repo) => repo.data)) {
      setLoading(false);
    }
  }, [response]);

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-10 my-12'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          response.map((repo) => (
            <CardRepos
              key={repo.data.id}
              title={repo.data.name}
              description={repo.data.description}
              html_url={repo.data.html_url}
            />
          ))
        )}
      </div>
      <div className='flex justify-end'>
        <a className='text-primary-red dark:text-primary-purple font-bold text-lg' href={"https://github.com/ulysses316"} target='_blank'>{idiom.repoSection.cta}</a>
        <ArrowRightIcon className='text-primary-red dark:text-primary-purple w-6' />
      </div>
    </section>
  )
}
