import './index.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';


//

sliderInit('.about__slider');

// * use it for video in .hero
const videobg = document.querySelector('.hero__video-bg');

videobg.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;
