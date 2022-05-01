import { Box, Tooltip } from '@mui/material';
import { selectGlobal } from 'app/components/GlobalState/selector';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function MenuList({ children }) {
  const history = useHistory();

  const { listCategory } = useSelector(selectGlobal);

  const handleRedirect = id => {
    history.push(`/product-list/${id}`);
  };
  return (
    <Tooltip
      placement={'bottom'}
      arrow
      title={
        <MenuBox>
          {listCategory.map((e, i) => (
            <MenuItem onClick={() => handleRedirect(e.id)} key={i}>
              {e.name}
            </MenuItem>
          ))}
        </MenuBox>
      }
      componentsProps={{
        tooltip: {
          sx: {
            padding: '20px',
            minHeight: '100px',
            maxWidth: '600px',
            borderRadius: '12px',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 32px 0 rgba(0, 0, 0, 0.19)',
            backgroundColor: '#FFF',
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}

const MenuBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
}));

const MenuItem = styled(Box)(({ theme }) => ({
  height: '40px',
  width: '250px',
  padding: '5px 10px',
  color: '#000',
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    cursor: 'pointer',
    color: '#00E5FF',
  },
}));
