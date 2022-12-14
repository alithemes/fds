/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const OfferSlider = () => {

    const data = [
        {
            img: "market.svg",
            title: "Enabling Opportunities",
            text: "One make creepeth, man bearing theira firmament."
        },
        {
            img: "consulting.svg",
            title: "Supporting Independence",
            text: "One make creepeth, man bearing theira firmament."
        },
        {
            img: "cognity.svg",
            title: "Cultural & Linguistic Diversity",
            text: "One make creepeth, man bearing theira firmament."
        }
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5"
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="card-grid-style-2 hover-up">
                                        <div className="grid-2-img">
                                            <img src={`assets/imgs/page/homepage1/${item.img}`} alt="Agon" />
                                        </div>
                                        <h3 className="text-heading-5 mt-20">{item.title}</h3>
                                        <p className="text-body-text color-gray-600 mt-20">{item.text}</p>
                                        <div className="mt-40">
                                        <Link href="/page-service-1"><a className="btn btn-black ">Learn More</a></Link>
                                        
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default OfferSlider;

