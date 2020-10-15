import React from 'react';
import { Carousel } from 'antd';
import ReactPlayer from 'react-player';
import './carouselStyles.css';

export default function MyCarousel() {
  const contentStyle = {
    height: '300px',
    color: '#fff',
    textAlign: 'center',
  };

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <div>
      <Carousel afterChange={onChange} effect='fade'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            style={contentStyle}
            url='http://www.youtube.com/watch?v=G9Lk9-A44OY'
            width='100%'
            height='100%'
          />
        </div>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            style={contentStyle}
            url='http://www.youtube.com/watch?v=DndhLYgjVzw'
            width='100%'
            height='100%'
          />
        </div>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            style={contentStyle}
            url='http://www.youtube.com/watch?v=gvLihpGqfXQ'
            width='100%'
            height='100%'
          />
        </div>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            style={contentStyle}
            url='http://www.youtube.com/watch?v=VIgwPAiV4ZE'
            width='100%'
            height='100%'
          />
        </div>
      </Carousel>
    </div>
  );
}
