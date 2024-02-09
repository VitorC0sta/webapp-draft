import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  { id: 1, url: "../../../assets/photo_2024-02-08_08-26-20.jpg", description: "" },
  { id: 2, url: "../../../assets/photo_2024-02-08_08-29-28.jpg", description: "" },
  { id: 3, url: "../../../assets/photo_2024-02-08_08-29-31.jpg", description: "" },
];

export function Slider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      {
        data.map((item) => {
          <SwiperSlide key={ item.id }>
            <img 
              src={ item.url } 
              alt={ item.description } 
              className="slide-item"
            />
          </SwiperSlide>;
        })
      }
    </Swiper>
  );
}
