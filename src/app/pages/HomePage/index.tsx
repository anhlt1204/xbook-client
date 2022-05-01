import { Box } from '@mui/material';
import Feature from 'app/components/Feature';
import { OneColumnLayout } from 'app/components/Layout';
import List from 'app/components/List';
import Slide from 'app/components/Slide';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ width: '100%' }}>
          <Slide />
          <Feature />
          <List title="Sách mới" type="filter" value="new" />

          <List title="Sách bán chạy" type="filter" value="hot" />
        </Box>
      </OneColumnLayout>
    </>
  );
}
