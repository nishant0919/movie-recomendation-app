'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import the autoplay CSS
import { Pagination, Autoplay } from 'swiper/modules'; 
import './globals.css';
import Footer from './components/Footer';

const slides = [
  {
    backgroundImage: 'url(https://images2.alphacoders.com/121/1218213.jpg)',
    movieName: 'Movie 1',
    description: 'This is a brief description of Movie 1.',
  },
  {
    backgroundImage: 'url(https://wallpapers.com/images/featured/game-of-thrones-92acb30ilmkjbmu9.jpg)',
    movieName: 'Game of Thrones',
    description: 'An epic fantasy drama series.',
  },
  {
    backgroundImage: 'url(https://path-to-image.jpg)',
    movieName: 'Movie 3',
    description: 'This is a brief description of Movie 3.',
  },
  {
    backgroundImage: 'url(https://path-to-image.jpg)',
    movieName: 'Movie 4',
    description: 'This is a brief description of Movie 4.',
  },
  {
    backgroundImage: 'url(https://path-to-image.jpg)',
    movieName: 'Movie 5',
    description: 'This is a brief description of Movie 5.',
  },
];

const sections = [
  {
    title: 'Trending',
    items: slides.map((slide) => ({
      imageUrl: slide.backgroundImage.replace('url(', '').replace(')', ''),
    })),
  },
  {
    title: 'Top Rated',
    items: [
      {
        imageUrl: 'https://path-to-image.jpg',
      },
      {
        imageUrl: 'https://path-to-image.jpg',
      },
      {
        imageUrl: 'https://path-to-image.jpg',
      },
      {
        imageUrl: 'https://path-to-image.jpg',
      },
      {
        imageUrl: 'https://path-to-image.jpg',
      },
    ],
  },
];

export default function App() {
  return (
    <div className="h-[75vh] pt-5">
      {/* Swiper Slider */}
      <Swiper
        slidesPerView={1}   
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // Change slide every 2 seconds
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay to the modules
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: slide.backgroundImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%', // Ensure each slide takes full height of the container
            }}
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0" 
                 style={{ 
                   background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))' 
                 }} 
            />
            {/* Movie title and description */}
            <div className="absolute top-[10rem] left-7 text-white">
              <h2 className="text-3xl font-bold mb-1">{slide.movieName}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="p-5">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
          >
            {section.items.slice(0, 5).map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="rounded-lg shadow-lg overflow-hidden"
                  style={{
                    width: '300px',
                    height: '200px',
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
      <Footer />
    </div>
  );
}
