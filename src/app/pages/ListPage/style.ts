import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Banner from './assets/Banner.jpg';

export const WrapperList = styled(Box)(({ theme }) => ({
  margin: '25px 0px',
  padding: '30px 15px',
  width: '100%',
  minHeight: 'calc(100vh - 360px)',
  backgroundColor: 'rgba(0,0,0,0.04)',
  borderRadius: '15px',
}));

export const TitleListBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '300px',
  backgroundImage: `url(${Banner})`,
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const TitleList = styled(Box)(({ theme }) => ({
  fontSize: '26px',
  lineHeight: '32px',
  fontWeight: 700,
  textTransform: 'uppercase',
  color: '#FFF',
}));

export const PaginationCustom = styled(Box)(({ theme }) => ({
  marginTop: '40px',
  paddingBottom: '30px',

  display: 'flex',
  justifyContent: 'center',

  '& > div': {
    height: '30px',
    display: 'flex',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '30px',
      width: '30px',
      padding: '0px',
      border: '1px solid #000',
      color: '#000',
      cursor: 'pointer',

      '&.active': {
        '&:hover': {
          background: 'rgba(187,0,0,0.36)',
        },
      },

      '&.disable': {
        background: 'rgba(234,231,231,0.9)',
        border: '1px solid rgba(234,231,231,0.9)',
        cursor: 'unset',

        '& .MuiSvgIcon-root': {
          color: '#FFF',
        },
      },
    },
  },
}));
