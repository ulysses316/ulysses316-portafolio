import moment from 'moment'
import { useContext } from 'react'
import { LanguageContext } from './context/LanguageContext'
import styles from '@/styles/article.module.css'

export default function Article({ data }) {

    const { idiom } = useContext(LanguageContext)

    return (
        <section className='flex justify-center min-h-[74dvh] pt-6'>
            <div className='text-black dark:text-white max-w-[42rem]'>
                <h1 className='text-[30px] sm:text-[45px] md:text-[60px] font-serif text-center'>{data.title}</h1>
                <h2 className='text-[16px] sm:text-[25px] font-serif text-center font-bold'><time>{moment(data.date).format('DD/MM/YYYY')}</time></h2>
                <img className='my-6' src={data.cover} alt="" />
                <div className='max-w-[42rem] mt-6' >

                    {/* Article body */}
                    <div className={styles['article-body']} dangerouslySetInnerHTML={{ __html: data.html }} />
                    {/* Article body */}

                    <a className='flex flex-col items-center hover:text-primary-red dark:hover:text-primary-purple' target='_blank' href={data.url}>
                        <p className='text-[20px] font-bold my-[16px]'>{idiom.article.devtoCTA}</p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 448 512"
                            className="text-5xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
