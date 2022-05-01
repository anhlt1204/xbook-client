import { Box, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';

export const LoginPageWrapper = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 160px)',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const LoginBox = styled(Box)(({ theme }) => ({
  marginTop: '50px',
  marginBottom: '50px',
  width: '555px',
  maxHeight: '550px',
  padding: '50px',
  border: '1px solid #00E5FF',
  borderRadius: '24px',
}));

export const TitleLogin = styled(Box)(({ theme }) => ({
  fontSize: '32px',
  lineHeight: '48px',
  fontWeight: 700,
  textTransform: 'capitalize',
}));

export const LoginFormStyle = styled('form')(({ theme }) => ({
  paddingTop: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
}));

export const LabelLogin = styled(Box)(({ theme }) => ({
  marginBottom: '4px',
  fontSize: '14px',
  lineHeight: '27px',
  fontWeight: 700,

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    lineHeight: '27px',
  },
}));

export const InputLogin = styled(TextField)<TextFieldProps>(({ theme }) => ({
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
