import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const ServicesSection = () => {
    const services = [
        {
            title: "Xalqaro Hamkorlik",
            description: "Biz mahalliy islomiy moliya sohasida faoliyat yuritayotgan tashkilotlar uchun Turkiya, Indoneziya va Malayziyadagi Islomiy moliya tashkilotları bilan amaliy hamkorlik o'matishda yordam beramiz. Tajriba almasıhnuvi safarlarini tashkil etamiz."
        },
        {
            title: "Ta'lim va Treninglar",
            description: "Biz qisqa muddatli trening kursları, mutaxassislar tomonidan olib boriladigan seminarlar, konferensiyalar va yetakchi Islomiy moliyaviy institutlarga sayohat treninglarini taqdim etamiz."
        },
        {
            title: "Islomiy Banklar uchun",
            description: "Biz Islomiy Bank va Islomiy moliya bo'yicha maslahatlarimizni taqdim etamiz. Asoslangan holda raqobatbardor xizmatlarni ishlab chiqishda ko'mak beramiz."
        },
        {
            title: "Shari'a Maslahati",
            description: "Islomiy moliya mahsulotlarini shari'a talablariga muvofiqligini tekshirish va tasdiqlash xizmatlari."
        },
        {
            title: "Audit Xizmatlari",
            description: "Islomiy moliya institutlari uchun maxsus audit xizmatlari va moliyaviy hisobotlar tayyorlash."
        },
        {
            title: "Loyihalarni Moliyalashtirish",
            description: "Murabaha, musharaka va ijara asosidagi loyihalarni moliyalashtirish bo'yicha xizmatlar."
        },
        {
            title: "Xalqaro Standartlar",
            description: "AAOIFI va IFSB kabi xalqaro islomiy moliya standartlarini joriy etishda yordam."
        },
        {
            title: "IT Yechimlar",
            description: "Islomiy banklar uchun maxsus dasturiy ta'minot va IT yechimlarini ishlab chiqish."
        },
        {
            title: "Riskni Boshqarish",
            description: "Islomiy moliya institutlari uchun risklarni boshqarish tizimlarini ishlab chiqish."
        },
        {
            title: "Sukuk Chiqarish",
            description: "Korporativ va davlat sukuklarini chiqarish bo'yicha konsalting xizmatlari."
        },
        {
            title: "Xodimlar Tayyorlash",
            description: "Islomiy moliya sohasida mutaxassislar tayyorlash va malaka oshirish dasturlari."
        },
        {
            title: "Bozor Tadqiqotlari",
            description: "Islomiy moliya bozorini tadqiq qilish va strategiyalar ishlab chiqish."
        },
        {
            title: "Xalqaro Konferensiyalar",
            description: "Islomiy moliya sohasida xalqaro konferensiyalar va forumni tashkil etish."
        },
        {
            title: "Hukumatlar bilan Hamkorlik",
            description: "Islomiy moliyani rivojlantirish bo'yicha davlat organlari bilan hamkorlik."
        },
        {
            title: "Startup Inkubator",
            description: "Islomiy moliya texnologiyalari sohasida startup loyihalarni qo'llab-quvvatlash."
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false, // Qo'shildi
        cssEase: "linear",   // Qo'shildi
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
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center text-green-800 mb-4">BIZNING XIZMATLARIMIZ</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Islomiy moliya sohasida keng qamrovli professional xizmatlar
            </p>
            <Slider {...settings} className="py-16 bg-gray-50">
                {services.map((service, index) => (
                    <div key={index} className="px-2 h-full">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[320px] flex flex-col justify-between">
                            <div className="p-6 flex-1 flex flex-col">
                                <h2 className="text-xl font-semibold text-green-700 mb-3">{service.title}</h2>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ServicesSection