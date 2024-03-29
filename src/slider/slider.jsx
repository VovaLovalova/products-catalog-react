import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation } from "swiper";
import { StyledSider, StyledButton, SlyderWrapper } from "./styled";

export default function Slader({ images }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <SlyderWrapper>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </StyledButton>
      <StyledSider
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        freeMode
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={20}
        loop
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <img
                src={image}
                alt="изображение продукта"
                width="200"
                height="257"
                maxWidth="200"
              />
            </SwiperSlide>
          ))}
      </StyledSider>
    </SlyderWrapper>
  );
}
