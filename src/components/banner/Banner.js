import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import "./banner.scss"

import apple from "../../assets/images/apple.png"
import phone from "../../assets/images/iphone.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Toggle from '../toogle/Toggle';


const Banner = () => {
  return (
      <div id="banner">
        <div className='container banner'>
            <Toggle/>
            <Swiper
            loop={true}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className='sviper__slide'>
                <div className='sviper-card sviper'>
                    <div className="svippers">
                        <img src={apple} alt="" />
                        <h2 className="sviper__title">
                        iPhone 14 Series
                        </h2>
                    </div>
                    <p className="sviper__text">
                    Up to 10% off Voucher
                    </p>
                    <div className="sviper__input">
                    <button>Shop Now</button>
                    <FaArrowRightLong/>
                    </div>
                </div>
                <div className="sviper__right">
                    <img src={phone} alt="" />
                </div>
                </SwiperSlide>
                <SwiperSlide className='sviper__slide'>Slide 2</SwiperSlide>
                <SwiperSlide className='sviper__slide'>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Banner