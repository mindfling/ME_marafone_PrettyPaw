// * these are all for sliders
import { Swiper, Pagination, Autoplay } from "swiper";

const params = {
  spaceBetween: 20,
  loop: true, 
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  slidersPerView: 3,
  pagination: {
    el: '.swiper-pagination',
  },
  modules: [Autoplay, Pagination],
};

export const sliderInit = (selectorSlider, newParams) => {
  new Swiper(selectorSlider, {
    ...params,    // common params for all sliders
    ...newParams, // personal params for this slider
  })
  console.log('slider init');
};
