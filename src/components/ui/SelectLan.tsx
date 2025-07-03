'use client';
import Uzb from '@/assets/uzbekistan-svgrepo-com.svg'
import Eng from '@/assets/united-kingdom-uk-svgrepo-com.svg'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
    const { i18n } = useTranslation()
    const [currentLang, setCurrentLang] = useState(i18n.language)
    const [isOpen, setIsOpen] = useState(false)

    const languages = [
        { code: 'en', name: 'English', icon: Eng },
        { code: 'uz', name: 'Oʻzbekcha', icon: Uzb }
    ];

    useEffect(() => {
        setCurrentLang(i18n.language)
    }, [i18n.language])

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
        localStorage.setItem('language', lang)
        setIsOpen(false)
    }

    const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                    <Image src={currentLanguage.icon} alt="Uzbekistan Flag" width={20} height={20} className="inline-block" />
                    <span className="hidden sm:inline">{currentLanguage.name}</span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                    <div className="py-1">
                        {languages.map((language) => (
                            <button key={language.code} onClick={() => changeLanguage(language.code)} className={`flex items-center gap-3 w-full px-4 py-2 text-left text-sm ${currentLang === language.code ? 'bg-blue-50 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                                <Image src={language.icon} alt="Uzbekistan Flag" width={20} height={20} className="inline-block" />
                                {language.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}