import { Box, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';

export const TopProfile = styled(Box)(({ theme }) => ({
  marginBottom: '70px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& .MuiSvgIcon-root': {
    width: '100px',
    height: '100px',
    color: '#51BF29',
  },
}));

export const BottomProfile = styled(Box)(({ theme }) => ({
  margin: 'auto',
  width: '500px',
  padding: '50px',
  border: '2px solid #51BF29',
  borderRadius: '20px',
}));

export const FormProfile = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

export const LabelProfile = styled(Box)(({ theme }) => ({
  marginBottom: '4px',
  fontSize: '14px',
  lineHeight: '27px',
  fontWeight: 700,
}));

export const ItemProfile = styled(Box)(({ theme }) => ({
  marginBottom: '4px',
  fontSize: '14px',
  lineHeight: '27px',
  fontWeight: 700,
}));

export const InputProfile = styled(TextField)<TextFieldProps>(({ theme }) => ({
  height: 'auto',
  width: '100%',
  fontSize: '14px',
  lineHeight: '17px',
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
