import Image from 'next/image'
import React from 'react'
import heroImage from '@/assets/header-banner.jpg'
const Hero = () => {
  return (
    <section className='px-[130px]'>
        <Image src={heroImage} alt='image' width={450} height={450} priority className='!w-full mb-[40px]'/>
    </section>
  )
}

export default Hero