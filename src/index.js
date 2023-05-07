import './index.html';
//
import './index.scss';


// * use it for video in .hero
const videobg = document.querySelector('.hero__video-bg');

videobg.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;
