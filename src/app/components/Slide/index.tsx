import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Slide1 from './assets/Slide1.jpg';
import Slide2 from './assets/Slide2.jpg';
import Slide3 from './assets/Slide3.jpg';
import Slide4 from './assets/Slide4.jpg';

export default function Slide() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    speed: 500,
    infinite: true,
  };

  return (
    <SlideWrapper>
      <Slider {...settings}>
        <SlideContent sx={{ backgroundImage: `url(${Slide1})` }} />
        <SlideContent sx={{ backgroundImage: `url(${Slide2})` }} />
        <SlideContent sx={{ backgroundImage: `url(${Slide3})` }} />
        <SlideContent sx={{ backgroundImage: `url(${Slide4})` }} />
      </Slider>
    </SlideWrapper>
  );
}

const SlideWrapper = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  height: '400px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

  '.slick-slider': { height: '400px' },

  '.slick-arrow': {
    zIndex: 9,
    top: '50%',

    '&::before': {
      fontSize: '28px',
      color: 'rgba(0, 0, 0, 0.6)',
    },

    '&.slick-prev': {
      left: '20px',
    },

    '&.slick-next': {
      right: '20px',
    },
    '&:hover': {
      '&::before': {
        color: '#bb0000',
      },
    },
  },

  '.slick-dots': {
    bottom: '20px',
    li: {
      borderRadius: '10px',
      width: '10px',
      height: '10px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',

      button: {
        '&::before': { content: '""' },
      },
    },

    '.slick-active': {
      backgroundColor: '#bb0000',
    },
  },
}));

const SlideContent = styled(Box)(({ theme }) => ({
  backgroundSize: '100% 100%',
  height: '400px',
  width: '100%',
}));
