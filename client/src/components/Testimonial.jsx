import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonial.css';

// import required modules
import { Autoplay,Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <>
      <section>
        <div className='container'>
            <h1 className='main-heading mb-3'>Happy Client Works</h1>
        </div>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper container"
        >
          <SwiperSlide>
            <div className='swiper-client-msg'>
               <p>
                 Domex: You know sometimes when I'm talking, my words can't keep
                 up with my thoughts... I wonder why we think fatser than we
                 speak. Hobbes: Probably so we can think twice.
               </p>
            </div>
            <div className='swiper-client-data grid grid grid-two-cols'>
                <figure>
                   <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="client review" />
                </figure>
                <div className='client-data-details'>
                   <p>John Doe</p>
                   <p>Digital Marketer</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='swiper-client-msg'>
               <p>
                 Domex: You know sometimes when I'm talking, my words can't keep
                 up with my thoughts... I wonder why we think fatser than we
                 speak. Hobbes: Probably so we can think twice.
               </p>
            </div>
            <div className='swiper-client-data grid grid grid-two-cols'>
                <figure>
                   <img src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="client review" />
                </figure>
                <div className='client-data-details'>
                   <p>Kylie Jenner</p>
                   <p>Model</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='swiper-client-msg'>
               <p>
                 Domex: You know sometimes when I'm talking, my words can't keep
                 up with my thoughts... I wonder why we think fatser than we
                 speak. Hobbes: Probably so we can think twice.
               </p>
            </div>
            <div className='swiper-client-data grid grid grid-two-cols'>
                <figure>
                   <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="client review" />
                </figure>
                <div className='client-data-details'>
                   <p>Animo Kraz</p>
                   <p>Bussinessman</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='swiper-client-msg'>
               <p>
                 Domex: You know sometimes when I'm talking, my words can't keep
                 up with my thoughts... I wonder why we think fatser than we
                 speak. Hobbes: Probably so we can think twice.
               </p>
            </div>
            <div className='swiper-client-data grid grid grid-two-cols'>
                <figure>
                   <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="client review" />
                </figure>
                <div className='client-data-details'>
                   <p>Jonny Frandez</p>
                   <p>Industrialist</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='swiper-client-msg'>
               <p>
                 Domex: You know sometimes when I'm talking, my words can't keep
                 up with my thoughts... I wonder why we think fatser than we
                 speak. Hobbes: Probably so we can think twice.
               </p>
            </div>
            <div className='swiper-client-data grid grid grid-two-cols'>
                <figure>
                   <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="client review" />
                </figure>
                <div className='client-data-details'>
                   <p>Jackline Franandaz</p>
                   <p>Actor</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='swiper-client-msg'>
               <p>
                 Domex: You know sometimes when I'm talking, my words can't keep
                 up with my thoughts... I wonder why we think fatser than we
                 speak. Hobbes: Probably so we can think twice.
               </p>
            </div>
            <div className='swiper-client-data grid grid grid-two-cols'>
                <figure>
                   <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="client review" />
                </figure>
                <div className='client-data-details'>
                   <p>Max Tenison</p>
                   <p>Analyst</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='swiper-client-msg'>
               <p>
                 Domex: You know sometimes when I'm talking, my words can't keep
                 up with my thoughts... I wonder why we think fatser than we
                 speak. Hobbes: Probably so we can think twice.
               </p>
            </div>
            <div className='swiper-client-data grid grid grid-two-cols'>
                <figure>
                   <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="client review" />
                </figure>
                <div className='client-data-details'>
                   <p>Gwen Tenison</p>
                   <p>Data Scientist</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='swiper-client-msg'>
               <p>
                 Domex: You know sometimes when I'm talking, my words can't keep
                 up with my thoughts... I wonder why we think fatser than we
                 speak. Hobbes: Probably so we can think twice.
               </p>
            </div>
            <div className='swiper-client-data grid grid grid-two-cols'>
                <figure>
                   <img src="https://images.unsplash.com/photo-1544252890-aaa73d400c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="client review" />
                </figure>
                <div className='client-data-details'>
                   <p>Olivia Valve</p>
                   <p>Graphics Designer</p>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
