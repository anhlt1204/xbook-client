import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const HeaderMenuItemStyle = styled(Link)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: 700,
  color: theme.palette.black[10],
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',

  '&:hover': {
    color: '#bb0000',
    background: 'unset',
  },
}));

export const HeaderMenuItemSelected = styled(Link)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: 700,
  color: '#bb0000',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}));
