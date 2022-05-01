import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const DetailPageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: 'calc(100vh - 160px)',
  marginBottom: '100px',
}));

export const BreadcumbItem = styled('span')(({ theme }) => ({
  fontSize: '15px',
  lineHeight: '18px',
  fontWeight: 300,

  '&:hover': { cursor: 'pointer', color: '#00E5FF' },

  '&.selected': {
    color: '#bb0000',
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '599px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  backgroundColor: 'rgba(0,0,0,0.04)',
  padding: '20px',

  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
  },
}));

export const InforBox = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '599px',
  borderRadius: '20px',
  backgroundColor: 'rgba(0,0,0,0.04)',
  padding: '20px',

  '& .title': {
    marginBottom: '10px',
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 600,
  },

  '& .infor': {
    margin: '0px',
    width: '100%',
    height: '200px',

    '& .left': {
      padding: '0px 10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      '& p': {
        height: '30px',
        marginBottom: '10px',
        fontSize: '15px',
        lineHeight: '17px',
        fontWeight: 400,
        display: 'flex',
        gap: '7px',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
          height: '10px',
          width: '10px',
        },

        '& span': {
          fontWeight: 600,

          '&.price': {
            fontSize: '20px',
            lineHeight: '25px',
            fontWeight: 'bold',
            color: '#F04F5B',
          },
        },
      },
    },

    '& .right': {
      padding: '0px 10px',
    },
  },

  '& .description': {
    '.descTitle': {
      marginBottom: '10px',
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 700,
    },

    '.descContent': {
      padding: '0px 10px',
      textAlign: 'justify',
    },
  },
}));
