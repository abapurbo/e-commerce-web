import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import bannerimg from '../../assets/banner1.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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
           <img className='w-[100%]' src={bannerimg} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          Slide 2
        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>

      </Swiper>
    </>
  );
}
