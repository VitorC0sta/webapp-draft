import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper";

const data = [
  { id: 1, url: "#", description: "" },
  { id: 2, url: "#", description: "" },
  { id: 3, url: "#", description: "" },
];

export function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
    >
      {data.map((item) => {
        <SwiperSlide key={item.id}>
          <img src={item.url} alt={item.description} className="slide-item" />
        </SwiperSlide>;
      })}
    </Swiper>
  );
}
