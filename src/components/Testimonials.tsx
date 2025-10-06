// src/components/Testimonials.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { testimonials } from '../data/testimonialsData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 w-full overflow-hidden">
      <h2 className="text-center text-4xl font-extralight text-gray-900 mb-4">
        What <span className="font-semibold text-indigo-600">Clients Say</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Honest feedback, edge-to-edge in your viewport
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={600}
        loop={false}
        style={{ width: '100vw', paddingBottom: '0.5 rem' }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center h-80 px-6">
              <div className="max-w-2xl text-center">
                <p className="text-gray-800 text-lg leading-relaxed mb-6 italic">
                  “{t.text}”
                </p>
                <h4 className="text-gray-900 text-xl font-medium">{t.name}</h4>
                <p className="text-indigo-600 text-base">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
