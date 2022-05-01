import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const WrapperList = styled(Box)(({ theme }) => ({
  margin: '25px 0px',
  padding: '30px 15px',
  width: '100%',
  minHeight: 'calc(100vh - 160px)',
  backgroundColor: 'rgba(0,0,0,0.04)',
  borderRadius: '15px',
}));

export const TitleList = styled(Box)(({ theme }) => ({
  fontSize: '26px',
  lineHeight: '32px',
  fontWeight: 700,
  textTransform: 'uppercase',
  color: '#F04F5B',
  display: 'flex',
  justifyContent: 'center',
}));
