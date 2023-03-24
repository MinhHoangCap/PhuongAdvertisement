import React, { Component } from 'react'
import { Swiper} from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import "../css/AboutUs.css"


export default class AboutUs extends Component {
  render() {

    const slide_img = [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-2.jpg",
      "https://swiperjs.com/demos/images/nature-3.jpg",
      "https://swiperjs.com/demos/images/nature-4.jpg",
      "https://swiperjs.com/demos/images/nature-5.jpg",
      "https://swiperjs.com/demos/images/nature-6.jpg",
      "https://swiperjs.com/demos/images/nature-7.jpg",
      "https://swiperjs.com/demos/images/nature-8.jpg",
      "https://swiperjs.com/demos/images/nature-9.jpg",
    ];
    return (
      <div className='about-us'>
        <Swiper
         spaceBetween={0}
         slidesPerView={1}
         modules={[Autoplay]}
         autoplay= {{delay: 2500}}
         speed={4500}
         loop={true}
        >
          {slide_img.map((img, i) => {
            return(
              <SwiperSlide key={i}> 
                <img className='about-us-img' src={img} alt=''></img>

              </SwiperSlide>
            )
          })}  
        </Swiper>
      </div>
    )
  }
}
