import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/types/TeamMember';

const TeamMembers = () => {
    const teamMembers: TeamMember[] = [
        {
            name: "Iskandar Tursunov",
            position: "CEO and Founder",
            description: "Holds a master's degree in Islamic finance from INCER University in Kuala Lumpur, Malaysia. Also studied at Istanbul Sashhatin Zaim University in Türkiye. Many years of experience in banking, insurance, and government sectors.",
        },
        {
            name: "Mezbah Uddin Ahmed",
            position: "International expert",
            description: "Distinguished researcher at ISRA Research Management Centre. Provides Islamic Finance advisory services through ISRA Consulting.",
        },
        {
            name: "Hayot Azimov",
            position: "International expert, Director of Advisory Unit",
            description: "Financial engineering, risk management and project management expert for 15 years. Experienced in establishing Islamic Banks in Malaysia. Interests in Islamic Fintech and blockchain.",
        },
        {
            name: "Khamid Rakhmatov",
            position: "Islamic finance advisor",
            description: "Master's degree in Islamic finance from International Islamic University Malaysia. Extensive expertise in financial services, insurance, and state industries.",
        },
        // Add 3 more team members
        {
            name: "Abdullah Rahman",
            position: "Sharia Compliance Officer",
            description: "Specializes in Sharia auditing and compliance for Islamic financial institutions. Former lecturer at International Islamic University Malaysia.",
        },
        {
            name: "Fatima Zahra",
            position: "Head of Research",
            description: "PhD in Islamic Economics from Al-Azhar University. Published numerous papers on Islamic microfinance and social finance.",
        },
        {
            name: "Yusuf Ibrahim",
            position: "Fintech Director",
            description: "Leads digital transformation initiatives with 10+ years experience in Islamic banking technology solutions and blockchain applications.",
        }
    ];

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-4">Our Expert Team</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Meet our team of dedicated Islamic finance professionals</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gray-200 h-48 relative">
                            {member.imageUrl ? (
                                <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" className="filter grayscale hover:grayscale-0 transition-all duration-300" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="text-4xl">{member.name.charAt(0)}</span>
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-green-700 mb-1">{member.name}</h3>
                            <p className="text-green-600 text-sm mb-3">{member.position}</p>
                            <p className="text-gray-600 text-sm">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;