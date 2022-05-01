import { Box, ButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

export const ItemCartWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100px',
  padding: '10px 20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}));

export const ItemCartImage = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
  },
}));

export const ItemCartName = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '400px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: 600,
  cursor: 'pointer',
}));

export const ItemCartPrice = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '130px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: 600,
  color: '#F04F5B',
}));

export const ItemCartNumber = styled(ButtonGroup)(({ theme }) => ({
  height: '100%',
  width: '120px',
  display: 'flex',
  alignItems: 'center',

  '& div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30px',
    width: '30px',
    padding: '0px',
    border: '1px solid #000',
    color: '#000',
  },

  '& .active': {
    '&:hover': {
      cursor: 'pointer',
      background: 'rgba(0,239,255,0.55)',
    },
  },

  '& .disable': {
    background: 'rgba(234,231,231,0.9)',
    border: '1px solid rgba(234,231,231,0.9)',
    cursor: 'unset',

    '& .MuiSvgIcon-root': {
      color: '#FFF',
    },
  },
}));
