import { useContext } from 'react'
import { LanguageContext } from './context/LanguageContext'
import CardArtitle from './common/CardArtitle'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

import useFetch from '@/hooks/useFetch'
import moment from 'moment'
import { useState, useEffect } from 'react'

export default function ArticlesSection() {

  const { idiom } = useContext(LanguageContext)

  const articles = useFetch("http://localhost:3000/api/articles")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (articles.data) {
      articles.data.data.slice(0,4);
      setLoading(false);
    }
  }, [articles]);

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-10 my-12'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.data.data.map((article, index)=>(
            <CardArtitle
              key={index}
              title={article.title}
              description={article.description}
              date={moment(article.publishedAt).format('DD/MM/YYYY')}
              likes={article.public_reactions_count}
              url={`/blog/${article.slug}`}
            />
          ))
        )}
      </div>
      <div className='flex justify-end'>
        <Link className='text-primary-red dark:text-primary-purple font-bold text-lg' href={"/blog"}>{idiom.articleSection.cta}</Link>
        <ArrowRightIcon className='text-primary-red dark:text-primary-purple w-6' />
      </div>
    </section>
  )
}