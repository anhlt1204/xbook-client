import { Box, Tooltip } from '@mui/material';
import { useGlobalSlice } from 'app/components/GlobalState';
import { selectGlobal } from 'app/components/GlobalState/selector';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function MenuList({ children }) {
  const history = useHistory();

  const path = history.location.pathname;

  const dispatch = useDispatch();

  const { actions } = useGlobalSlice();

  const { listCategory } = useSelector(selectGlobal);

  const handleRedirect = id => {
    dispatch(actions.setProductPage(1));
    history.push(`/product-list/${id}`);
  };
  return (
    <Tooltip
      placement={'bottom-end'}
      title={
        <MenuBox>
          {listCategory.slice(4, -1).map((e, i) => (
            <MenuItem
              onClick={() => handleRedirect(e.id)}
              key={i}
              className={path === `/product-list/${e.id}` ? 'active' : ''}
            >
              {e.name}
            </MenuItem>
          ))}
        </MenuBox>
      }
      componentsProps={{
        tooltip: {
          sx: {
            marginTop: '8px !important',
            padding: '20px',
            minHeight: '100px',
            maxWidth: `${
              listCategory.slice(4, -1).length > 6 ? '600px' : '300px'
            }`,
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
    color: '#bb0000',
  },

  '&.active': {
    color: '#bb0000',
  },
}));
