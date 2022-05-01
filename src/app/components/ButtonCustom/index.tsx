import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material';
import iconLoading from './assets/iconLoading.svg';
interface DisabledStyle extends ButtonProps {
  loading?: boolean;
  sx?: any;
}

const ButtonCustom = styled(Button)<DisabledStyle>(
  ({ variant, disabled, loading, sx }) => ({
    borderRadius: '8px',
    textTransform: 'none',
    color: '#000',
    border: 'none',
    fontWeight: 700,
    fontSize: '18px',
    letterSpacing: '0.04em',
    ...sx,
    '&.Mui-disabled': {
      background: !loading ? '#D1D1D1' : '',
      color: !loading ? '#B8B8B8' : '',
      cursor: 'no-drop',
      pointerEvents: 'unset',
    },

    ...(variant === 'contained' &&
      !disabled && {
        background: '#02C4DA',
        '&:hover': {
          background: ' #00E5FF',
        },
      }),
    ...(variant === 'outlined' &&
      !disabled && {
        border: '1px #fff solid',
        background: 'rgba(0, 0, 0, 0.32)',
      }),

    ...(variant === 'text' &&
      !disabled && {
        background: '#454954',
        '&:hover': {
          background: ' #00E5FF',
          border: 'none',
        },
      }),

    ...(loading && {
      background: '#676C7C',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'no-drop',
      pointerEvents: 'unset',
      border: 'none',

      '&:hover': {
        background: '#676C7C',
        border: 'none',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        backgroundImage: `url(${iconLoading})`,
        backgroundRepeat: 'no-repeat',
        width: '24px',
        height: '24px',
        animation: 'replay 1s linear infinite',
        '@keyframes replay': {
          '0%': {
            transform: 'rotateZ(0deg)',
          },
          '50%': {
            transform: 'rotateZ(180deg)',
          },
          '100%': {
            transform: 'rotateZ(360deg)',
          },
        },
      },
    }),
  }),
);

export default ButtonCustom;
