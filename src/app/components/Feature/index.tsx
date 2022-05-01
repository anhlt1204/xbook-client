import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

export default function Feature() {
  return (
    <FeatureWrapper container>
      <FeatureItem item xs={3}>
        <LocalShippingIcon />
        <Box>
          <Typography component="h3">Giao hàng mọi nơi</Typography>
          <Typography component="p">63 tỉnh thành trên cả nước</Typography>
        </Box>
      </FeatureItem>

      <FeatureItem item xs={3}>
        <CurrencyExchangeIcon />
        <Box>
          <Typography component="h3">Đổi trả sản phẩm</Typography>
          <Typography component="p">Hỗ trợ đổi, trả sản phẩm lỗi</Typography>
        </Box>
      </FeatureItem>

      <FeatureItem item xs={3}>
        <AttachMoneyIcon />
        <Box>
          <Typography component="h3">Khuyến mãi hấp dẫn</Typography>
          <Typography component="p">Nhiều chương trình khuyến mại</Typography>
        </Box>
      </FeatureItem>

      <FeatureItem item xs={3}>
        <PhoneIcon />
        <Box>
          <Typography component="h3">Hỗ trợ trực tuyến</Typography>
          <Typography component="p">SĐT: 0123456789</Typography>
        </Box>
      </FeatureItem>
    </FeatureWrapper>
  );
}

const FeatureWrapper = styled(Grid)(({ theme }) => ({
  marginTop: '30px',
  height: '150px',
  backgroundColor: 'rgba(0,0,0,0.05)',
}));

const FeatureItem = styled(Grid)(({ theme }) => ({
  padding: '0px 20px',
  height: 'inherit',
  display: 'flex',
  alignItems: 'center',
  gap: '15px',

  '& > svg': {
    height: '48px',
    width: '48px',
    color: '#bb0000',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& > h3': {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 'bold',
      color: '#bb0000',
    },

    '& > p': {
      marginTop: '5px',
    },
  },
}));
