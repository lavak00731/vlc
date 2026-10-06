"use client"
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, A11y } from "swiper/modules";
import Image from "next/image";

export const Carousel = ({images}:{images:string[]}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  return (
    <div className="flex w-full min-w-0 flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, A11y]}
        className="mySwiper2 absolute inset-0 h-full w-full"
      >
        {
            images.map((image, i) => (
                <SwiperSlide key={i} className="relative h-full overflow-hidden rounded-2xl">
                    <Image src={image} fill loading="eager" alt="" sizes="(min-width: 1024px) 50vw, 100vw" />
                </SwiperSlide>
            ) )
        }
      </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, A11y]}
        className="mySwiper w-full"
      >
        {
            images.map((image, i) => (
                <SwiperSlide key={i+"a"} className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl">
                    <Image src={image} fill loading="lazy" alt="" className="group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 1024px) 16vw, 30vw" />
                </SwiperSlide>
            ) )
        }
      </Swiper>
    </div>
  );
};
