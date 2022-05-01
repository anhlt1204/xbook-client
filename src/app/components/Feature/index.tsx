import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

export default function Feature() {
  return (
    <FeatureWrapper container>
      <FeatureItem item xs={4}>
        <LocalShippingIcon />
        <Typography component="h3">Giao hàng mọi nơi</Typography>
        <Typography component="p">
          Giao hàng tận nơi khắp các 63 tỉnh thành trên cả nước
        </Typography>
      </FeatureItem>
      <FeatureItem item xs={4}>
        <CurrencyExchangeIcon />
        <Typography component="h3">Đổi trả sản phẩm</Typography>
        <Typography component="p">
          Hỗ trợ đổi, trả sản lỗi sản phẩm khi nhận hàng
        </Typography>
      </FeatureItem>
      <FeatureItem item xs={4}>
        <AttachMoneyIcon />
        <Typography component="h3">Khuyến mãi hấp dẫn</Typography>
        <Typography component="p">
          Có nhiều chương trình giảm giá, khuyến mại
        </Typography>
      </FeatureItem>
    </FeatureWrapper>
  );
}

const FeatureWrapper = styled(Grid)(({ theme }) => ({
  marginTop: '50px',
  height: '200px',
  backgroundColor: 'rgba(0,0,0,0.05)',
}));

const FeatureItem = styled(Grid)(({ theme }) => ({
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px 20px',

  '& > svg': {
    height: '64px',
    width: '64px',
  },

  '& > h3': {
    margin: '10px 0px',
    fontSize: '28px',
    lineHeight: '32px',
    fontWeight: 'bold',
  },

  '& > p': {
    textAlign: 'center',
  },
}));
