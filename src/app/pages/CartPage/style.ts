import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const TopCart = styled(Box)(({ theme }) => ({
  marginBottom: '70px',
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#bb0000',

  '& .MuiSvgIcon-root': {
    width: '36px',
    height: '36px',
  },

  '& h2': {
    fontSize: '27px',
    lineHeight: '34px',
    fontWeight: 700,
  },
}));

export const BottomCart = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& .no_data': {
    textAlign: 'center',
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 700,
  },
}));

export const CartTableWrapper = styled(Box)(({ theme }) => ({
  width: '980px',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
}));

export const CartButton = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  padding: '0px 30px',
  width: '980px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '20px',
}));
