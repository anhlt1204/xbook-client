import { useGlobalSlice } from 'app/components/GlobalState';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { HeaderMenuItemSelected, HeaderMenuItemStyle } from './style';

interface HeaderMenuItemProps {
  link: string;
  text: string;
}

export default function HeaderMenuItem(props: HeaderMenuItemProps) {
  const { link, text } = props;

  const location = useLocation();

  const path = location.pathname;

  const dispatch = useDispatch();

  const { actions } = useGlobalSlice();

  return (
    <>
      {path === link ? (
        <HeaderMenuItemSelected
          to={link}
          onClick={() => dispatch(actions.setProductPage(1))}
        >
          {text}
        </HeaderMenuItemSelected>
      ) : (
        <HeaderMenuItemStyle
          to={link}
          onClick={() => dispatch(actions.setProductPage(1))}
        >
          {text}
        </HeaderMenuItemStyle>
      )}
    </>
  );
}
