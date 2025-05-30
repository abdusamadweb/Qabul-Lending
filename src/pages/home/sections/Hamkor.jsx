import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hamkor = () => {

    const parts1 = Array.from({ length: 9 }, (_, i) =>
        new URL(`../../../assets/images/part${i + 1}.png`, import.meta.url).href
    )

    const parts2 = Array.from({ length: 9 }, (_, i) =>
        new URL(`../../../assets/images/part${i + 10}.png`, import.meta.url).href
    )


    return (
        <div className='hamkor sect'>
            <div className="container">
                <h2 className="hamkor__title s-title">Sharq Universiteti hamkorlari</h2>
                <Swiper
                    className="hamkor__list"
                    slidesPerView={5}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        }
                    }}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                >
                    {
                        parts1.map((src, index) => (
                            <SwiperSlide className='item' key={index}>
                                <img src={src} alt="image"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    className="hamkor__list"
                    dir="rtl"
                    slidesPerView={5}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        }
                    }}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                >
                    {
                        parts2.map((src, index) => (
                            <SwiperSlide className='item' key={index}>
                                <img src={src} alt="image"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Hamkor;