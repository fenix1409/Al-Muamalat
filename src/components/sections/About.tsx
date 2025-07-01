"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import ServicesSection from '../ui/ServicesCard'

const Services = () => {
    const { t } = useTranslation()
    return (
        <section className='px-[100px]'>
            <h2 className='text-[30px] leading-[100%] font-bold uppercase text-[#103741] mb-[30px] text-center'>{t('Our Services')}</h2>
            <div className='mb-[50px]'><ServicesSection /></div>
            <h2 className='text-[30px] leading-[100%] font-bold text-[#103741] mb-[30px]'>{t('Al Muamalat')}</h2>
            <div className='flex justify-between'>
                <p className='text-[18px]'>{t('The primary goal of Al Muamalat Consulting is to contribute to the comprehensive development of Islamic finance in Uzbekistan and Central Asia, considering the interests of the countries and in accordance with existing regulations.')}</p>
                <p className='text-[18px]'>{t('To be the leading consulting firm in Central Asia, fostering a robust and inclusive Islamic finance ecosystem that empowers individuals and businesses, and promotes sustainable economic growth in the region')}</p>
            </div>
        </section>
    )
}

export default Services