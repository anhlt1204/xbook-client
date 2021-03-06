import { Box, IconButton, Menu } from '@mui/material';
import { useState } from 'react';
import BackgroundMenu from '../../assets/BackgroundMenu.svg';
import UserProfile from '../../assets/UserProfile.svg';
import Logout from '../../assets/Logout.svg';
import History from '../../assets/History.svg';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalSlice } from 'app/components/GlobalState';
import { useCartSlice } from 'app/pages/CartPage/slice';
import { selectGlobal } from 'app/components/GlobalState/selector';

export default function UserMenu() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { actions } = useGlobalSlice();

  const { actions: cartActions } = useCartSlice();

  const { user } = useSelector(selectGlobal);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(actions.outUser());
    window.location.href = '/login';
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          backgroundImage: `url(${BackgroundMenu})`,
          height: '32px',
          width: '32px',
          cursor: 'pointer',
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: '10px',
            width: '220px',
            borderRadius: '16px 0px 16px 16px',
            backgroundColor: theme => theme.palette.white.main,
            '& ul': {
              padding: '24px 0px 24px 24px',
              '& li:last-child': {
                marginBottom: '0px',
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box
          sx={{
            marginBottom: '15px',
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 'bold',
            color: '#bb0000',
          }}
        >
          {user?.username}
        </Box>

        <MenuUserItemStyle onClick={() => history.push('/profile')}>
          <img src={UserProfile} alt="User Profile" />
          <Box>T??i kho???n</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle
          onClick={() => {
            dispatch(cartActions.setPage(1));
            history.push('/cart-list');
          }}
        >
          <img src={History} alt="History" />
          <Box>L???ch s??? ?????t h??ng</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle onClick={handleLogout}>
          <img src={Logout} alt="Logout" />
          <Box>????ng xu???t</Box>
        </MenuUserItemStyle>
      </Menu>
    </>
  );
}

const MenuUserItemStyle = styled('li')(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  fontSize: '14px',
  lineHeight: '24px',
  fontWeight: 400,
  color: '#000',
  padding: '0px',
  marginBottom: '28px',

  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'unset',
    cursor: 'pointer',
  },

  '& > img': { width: '24px', height: '24px' },
}));
