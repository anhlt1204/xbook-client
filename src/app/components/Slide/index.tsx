import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Slide1 from './assets/Slide1.png';
import Slide2 from './assets/Slide2.png';
import Slide3 from './assets/Slide3.png';

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
        <SlideContent
          sx={{
            backgroundImage: `url(${Slide1})`,
          }}
        />
        <SlideContent sx={{ backgroundImage: `url(${Slide2})` }} />
        <SlideContent sx={{ backgroundImage: `url(${Slide3})` }} />
      </Slider>
    </SlideWrapper>
  );
}

const SlideWrapper = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  height: '600px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

  '.slick-slider': { height: '600px' },

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
        color: '#ff5722',
      },
    },
  },

  '.slick-dots': {
    bottom: '20px',
    li: {
      borderRadius: '3px',
      width: '16px',
      height: '3px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',

      button: {
        '&::before': { content: '""' },
      },
    },

    '.slick-active': {
      width: '32px',
      backgroundColor: '#ff5722',
    },
  },
}));

const SlideContent = styled(Box)(({ theme }) => ({
  backgroundSize: '100% 100%',
  height: '600px',
  width: '100%',
}));
