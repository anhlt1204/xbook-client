import { Box, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';

export const TopBuy = styled(Box)(({ theme }) => ({
  marginBottom: '70px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& .MuiSvgIcon-root': {
    width: '100px',
    height: '100px',
    color: '#51BF29',
  },

  '& h2': {
    fontSize: '29px',
    lineHeight: '36px',
    fontWeight: 700,
  },
}));

export const BottomBuy = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const BuyListItem = styled(Box)(({ theme }) => ({
  padding: '20px 0px',
  width: '600px',
  height: '320px',
  border: '1px solid #51BF29',
  borderRadius: '30px',

  '& .inner_list': {
    width: '100%',
    height: '100%',
    padding: '10px 30px',
    display: 'flex',
    gap: '15px',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'scroll',
  },
}));

export const FormBuy = styled('form')(({ theme }) => ({
  marginTop: '50px',
  width: '600px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

export const LabelBuy = styled(Box)(({ theme }) => ({
  marginBottom: '4px',
  fontSize: '14px',
  lineHeight: '27px',
  fontWeight: 700,
}));

export const InputBuy = styled(TextField)<TextFieldProps>(({ theme }) => ({
  height: 'auto',
  width: '100%',
  fontSize: '16px',
  lineHeight: '15px',
  fontWeight: 700,

  // css for TextField

  '.MuiOutlinedInput-root': {
    height: '52px',

    '.MuiInputAdornment-root': {
      margin: '0px',
      '& button': {
        margin: '0px',
        padding: '0px',
      },
    },

    input: {
      height: '100%',
      padding: '0px 16px',
    },

    fieldset: {
      borderRadius: '6px',
    },
  },
}));
