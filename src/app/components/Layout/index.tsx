/**
 *
 * OneColumnLayout
 *
 */
import { Container } from '@mui/material';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import * as React from 'react';

export function OneColumnLayout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="xl">{children}</Container>
      <Footer />
    </>
  );
}
