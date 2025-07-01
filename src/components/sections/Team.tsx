"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import TeamMembers from '../ui/TeamMembers'

const Team = () => {
    const { t } = useTranslation()
    return (
        <section className='px-[100px] my-[80px]'>
            <h2 className='text-[30px] leading-[100%] font-bold uppercase text-[#103741] mb-[30px] text-center'>{t('Our Team')}</h2>
            <div><TeamMembers/></div>
        </section>
    )
}

export default Team