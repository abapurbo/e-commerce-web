import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "../Banner/styles.css"
import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           <img className='banner-img' src='https://i.ibb.co.com/6chd1NDy/Blue-Photo-Beauty-Skincare-Blog-Banner-5.png' alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='banner-img' src="https://i.ibb.co.com/4Zw0ZCN1/Brown-Minimalist-Fashion-Facebook-Cover-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        

      </Swiper>
    </>
  );
}
