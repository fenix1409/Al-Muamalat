"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import ExpertTeamCard from '../ui/ExpertTeamCard'

const Expert = () => {
    const { t } = useTranslation()
    return (
        <section className='px-[100px]'>
            <h2 className='text-[30px] leading-[100%] font-bold uppercase text-[#103741] mb-[30px] text-center'>{t('International Islamic Finance Experts Panel')}</h2>
            <div><ExpertTeamCard/></div>
        </section>
    )
}

export default Expert