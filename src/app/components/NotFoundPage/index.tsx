import * as React from 'react';
import { styled, Box } from '@mui/system';
import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';

import { OneColumnLayout } from '../Layout';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <OneColumnLayout>
        <Row>
          <Content>
            <Title
              variant="h2"
              sx={{
                fontWeight: 'bold',
                marginBottom: '4px',
                fontSize: {
                  xs: '48px',
                  sm: '72px',
                },
                lineHeight: {
                  xs: '54px',
                  sm: '88px',
                },
              }}
            >
              Oopps...!
            </Title>
            <Title
              variant="h3"
              sx={{
                fontWeight: 500,
                marginBottom: {
                  xs: '20px',
                  sm: '44px',
                },
                fontSize: {
                  xs: '35px',
                  md: '48px',
                },
                lineHeight: {
                  xs: '41px',
                  md: '59px',
                },
              }}
            >
              Page not found.
            </Title>
          </Content>
        </Row>
      </OneColumnLayout>
    </>
  );
}

const Row = styled(Box)(({ theme }) => ({
  marginTop: '40%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '20px',
  [theme.breakpoints.up('md')]: {
    marginTop: '80px',
    alignItems: 'center',
    flexDirection: 'row',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  width: '100%',
}));

const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));
