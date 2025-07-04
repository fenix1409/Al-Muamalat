import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/types/TeamMember';
import { useTranslation } from 'react-i18next';

const TeamMembers = () => {
    const { t } = useTranslation()
    const teamMembers: TeamMember[] = [
        {
            name: "Iskandar Tursunov",
            position: "CEO and Founder",
            description: "Tursunov Iskandar holds a master’s degree in Islamic finance from INCEIF University in Kuala Lumpur, Malaysia. He also studied Islamic finance at Istanbul Sabahattin Zaim University in Türkiye. He has many years of experience in the banking, insurance, and government sectors.",
        },
        {
            name: "Mezbah Uddin Ahmed",
            position: "International expert",
            description: "Mezbah Uddin Ahmed is a distinguished researcher at ISRA Research Management Centre, a part of INCEIF University established by Bank Negara Malaysia (Central Bank of Malaysia). He also provides various Islamic Finance advisory services through ISRA Consulting.",
        },
        {
            name: "Hayot Azimov",
            position: "International expert, Director of Advisory Unit",
            description: "Hayot Azimov Financial engineering, risk management and project management practitioner for past 15 years. Experienced in establishing Islamic Banks and Banking windows in Malaysia. Active interests in Islamic Fintech and blockchain application.",
        },
        {
            name: "Khamid Rakhmatov",
            position: "Islamic finance advisor",
            description: "Xamid Raxmatov earned a master's degree in Islamic finance from International Islamic University Malaysia University in Kuala Lumpur, Malaysia. He has extensive expertise in the financial services, insurance, and the state industries.",
        },
        {
            name: "Oripov Sarvar",
            position: "Chief financial officer",
            description: "Oripov Sarvar holds an MBA in Finance from Cardiff Metropolitan University in the UK. He has many years of experience in financial management within the private sector. He is also an expert in halal investments and stock market trading.",
        },
        {
            name: "Dr. A'lam Ilhomovich Asadov",
            position: "Islamic finance advisor",
            description: "Dr. A’lam Ilhomovich Asadov, PhD, CSAA is an Assistant Professor of Finance at Prince Sultan University in Riyadh, Saudi Arabia. He holds a PhD in Islamic Finance from INCEIF University and a CSAA certification from AAOIFI.",
        },
        {
            name: "G'ayrat Rakhmanberdiev",
            position: "Corporate Consultant and Legal Expert",
            description: "Mr. Gayrat Rakhmanberdiev is an experienced corporate consultant and legal expert with over 16 years in corporate governance and legal advisory.",
        }
    ]

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="w-[312px] h-[580px] group bg-white rounded-t-full shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                        <div className="relative h-60 w-full overflow-hidden">
                            {member.imageUrl ? (
                                <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center">
                                    <span className="text-5xl font-bold text-gray-400">
                                        {member.name.charAt(0)}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{t(member.name)}</h3>
                            <p className="font-medium mb-3">{t(member.position)}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{t(member.description)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamMembers