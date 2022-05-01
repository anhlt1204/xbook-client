import React from 'react';
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

  return (
    <>
      {path === link ? (
        <HeaderMenuItemSelected to={link}>{text}</HeaderMenuItemSelected>
      ) : (
        <HeaderMenuItemStyle to={link}>{text}</HeaderMenuItemStyle>
      )}
    </>
  );
}
