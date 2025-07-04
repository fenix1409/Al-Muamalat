"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import C1 from '@/assets/logo-rEVcoZ8C.jpg'
import C2 from '@/assets/logo1-6_Wi02NN.jpg'
import C3 from '@/assets/logo3-B-FmEW_J.jpg'
import C4 from '@/assets/logo4-CVo_50-h.jpg'
import C5 from '@/assets/logo5-OEclXp_b.jpg'
import C6 from '@/assets/logo6-DlY_l0Fj.jpg'
import Image from 'next/image';

const ClientsCard = () => {
    const clients = [
        {
            img: C1,
        },
        {
            img: C2,
        },
        {
            img: C3,
        },
        {
            img: C4,
        },
        {
            img: C5,
        },
        {
            img: C6,
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
        <div className="mx-auto">
            <Slider {...settings} className="flex items-center gap-[20px]">
                {clients.map((clients, index) => (
                    <div key={index} className="px-4">
                        <div className="w-full h-[200px] shadow-md rounded-[10px] bg-white flex items-center justify-center">
                            <Image src={clients.img} alt="image" priority style={{ width: "auto", height: "140px", objectFit: "contain", cursor: "pointer" }} className="transition-transform duration-300 hover:scale-110"/>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ClientsCard