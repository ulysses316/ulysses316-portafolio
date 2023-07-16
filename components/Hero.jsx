import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from './context/LanguageContext'
import Image from 'next/image'
import Card from '@/components/common/Card'

export default function Hero() {

  const { idiom } = useContext(LanguageContext)

  return (
    <div className='mt-[1em] text-black dark:text-white'>
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
            <div className='flex gap-2 justify-center lg:justify-normal flex-wrap lg:w-[80%] '>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#ffdf76] ring-1 ring-inset ring-[#ffdf76]/10">Python</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#7CC8D2] ring-1 ring-inset ring-[#7CC8D2]/10">Flask</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#44B78B] ring-1 ring-inset ring-[#44B78B]/20">Django</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">PostgreSQL</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">API REST</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-black dark:text-white ring-1 ring-inset ring-black/20 dark:ring-white/20">GIT</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Linux</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#E44D26] ring-1 ring-inset ring-[#E44D26]/10">HTML</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#016BC1] ring-1 ring-inset ring-[#016BC1]/10">CSS</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#F7E018] ring-1 ring-inset ring-[#F7E018]/10">Javascript</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#149ECA] ring-1 ring-inset ring-[#149ECA]/20">React</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-black dark:text-[#EDEDED] ring-1 ring-inset ring-black/20 dark:ring-[#EDEDED]/20">NextJS</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#F7E018] ring-1 ring-inset ring-[#F7E018]/10">ES6</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#79589F] ring-1 ring-inset ring-[#79589F]/10">Heroku</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#BF4080] ring-1 ring-inset ring-[#BF4080]/10">SASS</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">CSS Frameworks</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#CC3534] ring-1 ring-inset ring-[#CC3534]/10">NPM</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#2188B6] ring-1 ring-inset ring-[#2188B6]/10">Yarn</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#00ED64] ring-1 ring-inset ring-[#00ED64]/10">Mongo</span>
              <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#f90] ring-1 ring-inset ring-[#f90]/10">AWS</span>
            </div>
          </div>
        </div>
      </Card>

    </div>
  )
}
