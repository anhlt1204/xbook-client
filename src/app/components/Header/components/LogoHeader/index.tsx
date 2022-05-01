import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LogoHeader() {
  return (
    <>
      <Link
        to="/"
        style={{ display: 'block', textDecoration: 'none', color: '#000000' }}
      >
        <Typography
          component="h1"
          sx={{ fontSize: '40px', fontWeight: 'bold', lineHeight: '48px' }}
        >
          TÂM AN
        </Typography>
      </Link>
    </>
  );
}
