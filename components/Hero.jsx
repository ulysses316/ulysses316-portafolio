import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from './context/LanguageContext'
import Image from 'next/image'
import Card from '@/components/common/Card'

export default function Hero() {

  const { idiom } = useContext(LanguageContext)

  return (
    <div className='px-3 sm:container sm:mx-auto mt-[1em] text-black dark:text-white'>
      <Card>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6'>
          <div className='justify-self-center self-center'>
            <img className='object-cover rounded-full w-[10em] lg:w-[13em]'
              src="https://scontent.fmex43-1.fna.fbcdn.net/v/t1.6435-9/151639503_4041220135923036_5518806947490909934_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGdHaZhWRqomlESna_kKxVn7CRvyr60HinsJG_KvrQeKUNRg4kJ1pL08o8sW3FrPUP0NGIqD-VO3EngcK_6jKt2&_nc_ohc=7xRNVC_jMucAX9qRTkq&_nc_ht=scontent.fmex43-1.fna&oh=00_AfAe7atR3OorgTSGqtylCVWNKiHKGz7kbSs8oW2SkIz_6Q&oe=64D9B8F1" />
          </div>
          <div className='self-center'>
            <h6 className='text-primary-red dark:text-primary-purple font-bold sm:text-[25px] text-center lg:text-left'>{idiom.hero.title}</h6>
            <h2 className='text-[30px] sm:text-[50px] text-center lg:text-left'>{idiom.hero.subtitle}</h2>
            <p className='my-[16px] text-center lg:text-left'>{idiom.hero.text}</p>
          </div>
        </div>
      </Card>

    </div>
  )
}
