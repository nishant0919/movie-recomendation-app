'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './globals.css';

// import required modules
import { Pagination } from 'swiper/modules';

const slides = [
  {
    movieName: 'Movie 1',
    description: 'Description for Movie 1',
    backgroundImage: 'url(https://images2.alphacoders.com/121/1218213.jpg)',
  },
  {
    movieName: 'Movie 2',
    description: 'Description for Movie 2',
    backgroundImage: 'url(https://wallpapers.com/images/featured/game-of-thrones-92acb30ilmkjbmu9.jpg)',
  },
  {
    movieName: 'Movie 2',
    description: 'Description for Movie 2',
    backgroundImage: 'url(https://wallpapers.com/images/featured/game-of-thrones-92acb30ilmkjbmu9.jpg)',
  }, {
    movieName: 'Movie 2',
    description: 'Description for Movie 2',
    backgroundImage: 'url(https://wallpapers.com/images/featured/game-of-thrones-92acb30ilmkjbmu9.jpg)',
  }, {
    movieName: 'Movie 2',
    description: 'Description for Movie 2',
    backgroundImage: 'url(https://wallpapers.com/images/featured/game-of-thrones-92acb30ilmkjbmu9.jpg)',
  },
  // Add more slides as needed
];

export default function App() {
  return (
    <div className='h-[80vh] pt-5'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ backgroundImage: slide.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <div className="flex flex-col justify-end h-full p-5">
              <div className="bg-black bg-opacity-60 p-4 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-2">{slide.movieName}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
