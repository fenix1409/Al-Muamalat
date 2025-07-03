"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
    const { t } = useTranslation()
    const services = [
        {
            title: "International Cooperation",
            description: "We help local Islamic finance organizations establish practical cooperation with Islamic finance organizations in Turkey, Indonesia, and Malaysia. We organize experience exchange trips."
        },
        {
            title: "Education and Training",
            description: "We provide short-term training courses, expert-led seminars, conferences, and training trips to leading Islamic financial institutions."
        },
        {
            title: "For Islamic Banks",
            description: "We provide our advice on Islamic Banking and Islamic Finance. We support the development of competitive services based on sound principles."
        },
        {
            title: "Shari'a Compliance",
            description: "Services for checking and certifying the compliance of Islamic finance products with Shari'a requirements."
        },
        {
            title: "Audit Services",
            description: "Special audit services and preparation of financial reports for Islamic financial institutions."
        },
        {
            title: "Project Financing",
            description: "Services for financing projects based on Murabaha, Musharaka, and Ijara principles."
        },
        {
            title: "International Standards",
            description: "Assistance in implementing international Islamic finance standards such as AAOIFI and IFSB."
        },
        {
            title: "IT Solutions",
            description: "Development of specialized software and IT solutions for Islamic banks."
        },
        {
            title: "Risk Management",
            description: "Development of risk management systems for Islamic financial institutions."
        },
        {
            title: "Startup Incubator",
            description: "Support for startup projects in the field of Islamic financial technologies."
        }
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,    
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, 
        cssEase: "linear", 
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className="container mx-auto">
            <Slider {...settings} className='py-[10px]'>
                {services.map((service, index) => (
                    <div key={index} className="px-4">
                        <div className="h-[140px] bg-white rounded-[10px] shadow-blue-950 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                            <div className="p-6 flex-1 flex flex-col">
                                <h2 className="text-xl font-semibold text-[#103741] mb-3">{t(service.title)}</h2>
                                <p className="text-gray-600">{t(service.description)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ServicesSection