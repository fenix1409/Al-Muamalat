"use client"
import { Logo } from '@/assets/Icons'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { LanguageSelector } from '../ui/SelectLan'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation()
    const pathname = usePathname()
    const router = useRouter()
    const links = [
        { id: 1, title: 'Home', path: "/" },
        { id: 2, title: "Islamic Finance", path: '/materials' },
        { id: 3, title: "Special Shariah Board", path: "/council" },
        { id: 4, title: "Programs", path: "/programs" },
        { id: 5, title: "Contact", path: '/contact' },
    ]

    if (pathname === '/sign-in' || pathname === '/register') return null

    const isSignedIn = typeof window !== "undefined" && !! localStorage.getItem('token')

    return (
        <header className='px-[130px] flex items-center justify-between'>
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className='flex items-center gap-[20px]'>
                {links.map(item => (
                    <Link href={item.path} key={item.id} className={`text-[15px] leading-[100%] font-semibold hover:text-[#009688] ${pathname === item.path ? 'text-[#009688]' : 'text-[#686868]'}`}>{t(item.title)}</Link>
                ))}
            </div>
            <div><LanguageSelector /></div>
            {isSignedIn ? (
                <button className='w-[110px] px-[31px] py-[9px] rounded-3xl bg-[#009688] text-[15px] leading-[100%] font-semibold text-white inline-block cursor-pointer' onClick={() => router.push('/profile')}>
                    {t('Profile')}
                </button>
            ) : (
                <button className='w-[110px] px-[31px] py-[9px] rounded-3xl bg-[#fe5d37] text-[15px] leading-[100%] font-semibold text-white inline-block cursor-pointer' onClick={() => router.push('/sign-in')}>
                    {t('Login')}
                </button>
            )}
        </header>
    )
}

export default Header