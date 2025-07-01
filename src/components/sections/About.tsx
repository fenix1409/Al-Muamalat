"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import ServicesSection from '../ui/ServicesCard'

const Services = () => {
    const { t } = useTranslation()
    return (
        <section className=''>
            <h2 className='px-[130px] text-[30px] leading-[100%] font-bold uppercase text-[#103741] mb-[30px]'>{t('Our Services')}</h2>
            <div><ServicesSection /></div>
        </section>
    )
}

export default Services