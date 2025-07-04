import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/types/TeamMember';
import { useTranslation } from 'react-i18next';

const ExpertTeamCard = () => {
    const { t } = useTranslation()
    const expertTeamCard: TeamMember[] = [
        {
            name: "Professor Monzer Kahf",
            position: "International Islamic Finance Expert",
            description: "Professor Monzer Kahf is a renowned authority in Islamic finance and economics, with decades of global experience as a consultant, trainer, and academic. He has advised international organizations, central banks, and financial institutions on Sharia-compliant frameworks, risk management, and product development.",
        },
        {
            name: "Professor Dr. Aishath Muneeza",
            position: "International Shariah Advisor",
            description: "Prof. Dr. Aishath Muneeza is a leader in Islamic finance. She was the first female Deputy Minister of the Ministry of Islamic Affairs and Ministry of Finance and Treasury in Maldives. She helped create Maldives’ first Shariah-compliant microfinance scheme and played a key role in structuring Sukuk and Islamic treasury products.",
        },
        {
            name: "Dr. Magda Ismail",
            position: "Expert in Waqf and Islamic Finance",
            description: "Dr. Magda Ismail, a Ph.D. graduate from IIUM, is an Associate Professor at INCEIF University (Malaysia) specializing in waqf and Islamic finance. She has advised global institutions like UNICEF and ISRA on waqf-linked sukuk, cash waqf, and financial inclusion.",
        }
    ]

    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-8">
                {expertTeamCard.map((member, index) => (
                    <div key={index} className="w-[423px] h-[630px] group bg-white rounded-t-full shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                        <div className="relative h-60 w-full overflow-hidden">
                            {member.imageUrl ? (
                                <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" className="w-[423px] h-[380px] transition-transform duration-500 group-hover:scale-105" />
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

export default ExpertTeamCard