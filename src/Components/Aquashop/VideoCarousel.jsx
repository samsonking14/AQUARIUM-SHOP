import React from 'react'
import './VideoCarousel.css'
import fishingvid from '../../assets/fish/fishbg/fishing.mp4'
import fishtankvid from '../../assets/fish/fishbg/fish tank.mp4'
import toysvid from '../../assets/fish/fishbg/toys.mp4'
import fishvid from '../../assets/fish/fishbg/fish.mp4'
import coralvid from '../../assets/fish/fishbg/coral reef.mp4'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
const VideoCarousel = () => {
  {/*video slider js*/}
    const sliderVideos = document.querySelectorAll(".slider-video");
    const handler = () => {
      sliderVideos.forEach((video,key) => {
      video.pause();
      video.currentTime = 0;
      video.load();
  });
    };
    return (
      <div className="Hero">
        <div>
          {/*1*/}
          <Carousel controls={false} fade={true} interval={5500} pause={false} className="hero-slider" onSlid={handler}>
            <Carousel.Item>
               <video className="slider-video" src={fishingvid} loop autoPlay muted loading="lazy"></video>
            </Carousel.Item>
            {/*2*/}
            <Carousel.Item>
               <video className="slider-video" src={fishtankvid} loop autoPlay muted loading="lazy"></video>
            </Carousel.Item>
            {/*3*/}
            <Carousel.Item>
               <video className="slider-video" src={toysvid} loop autoPlay muted loading="lazy"></video>
            </Carousel.Item>
            {/*4*/}
            <Carousel.Item>
               <video className="slider-video" src={fishvid} loop autoPlay muted loading="lazy"></video>
            </Carousel.Item>
            {/*5*/}
            <Carousel.Item>
               <video className="slider-video" src={coralvid} loop autoPlay muted loading="lazy"></video>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
  );
};

export default VideoCarousel