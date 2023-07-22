import React from 'react'
import Card from './common/Card'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import useFetch from '@/hooks/useFetch'
import moment from 'moment'

export default function Blog() {

  const articles = useFetch("http://localhost:3000/api/articles")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (articles.data) {
      setLoading(false);
    }
  }, [articles]);

  return (
    <section className='flex justify-center min-h-[74dvh] pt-6'>
      <div className='text-black dark:text-white max-w-[42rem]'>
        <h1 className='text-[60px] font-serif text-center'>Blog</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.data.data.map((article, index) => (
            <Link key={index} href={`/blog/${article.slug}`}>
              <div className='mt-10'>
                <Card>
                  <div className='flex items-center flex-col md:flex-row md:gap-2 mb-[16px]'>
                    <h2 className='text-primary-red dark:text-primary-purple font-bold text-[23px]'>{article.title}</h2><span className='font-bold'>⋅</span><time className='text-[14px] font-bold'>{moment(article.publishedAt).format('DD/MM/YYYY')}</time>
                  </div>
                  <p className='text-center md:text-left'>{article.description}</p>
                </Card>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  )
}
