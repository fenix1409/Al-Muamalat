"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import ClientsCard from '../ui/ClientsCard'

const Partners = () => {
    const { t } = useTranslation()
    return (
        <section className='px-[100px] my-[80px]'>
            <h2 className='text-[30px] leading-[100%] font-bold uppercase text-[#103741] mb-[30px] text-center'>{t('Our Partners and Clients!')}</h2>
            <div><ClientsCard /></div>
        </section>
    )
}

export default Partners