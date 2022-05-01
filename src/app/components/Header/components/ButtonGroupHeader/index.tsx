import { Link, Box, IconButton, Badge } from '@mui/material';
import ButtonCustom from 'app/components/ButtonCustom';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserMenu from '../UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/components/GlobalState/selector';
import { selectCart } from 'app/pages/CartPage/slice/selector';
import { useGlobalSlice } from 'app/components/GlobalState';

export default function ButtonGroupHeader() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { actions } = useGlobalSlice();

  const { user } = useSelector(selectGlobal);

  const { detailCart } = useSelector(selectCart);

  const handleLogin = () => {
    dispatch(actions.setPathName(history.location.pathname));
    history.push('/login');
  };
  const handleRegister = () => history.push('/register');
  const handleCart = () => history.push('/cart');

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 700,
      }}
    >
      {user === null ? (
        <>
          <Link
            onClick={handleRegister}
            sx={{
              textDecoration: 'none',
              color: '#000000',

              '&:hover': {
                color: '#bb0000',
                cursor: 'pointer',
              },
            }}
          >
            Đăng ký
          </Link>
          <ButtonCustom
            onClick={handleLogin}
            variant="contained"
            sx={{
              height: '40px',
              p: '7px 24px',
              fontSize: '14px',
              lineHeight: '18px',
              fontWeight: 700,
            }}
          >
            Đăng nhập
          </ButtonCustom>
        </>
      ) : (
        <>
          <IconButton onClick={handleCart}>
            <Badge badgeContent={detailCart.total} color="primary">
              <ShoppingCartIcon sx={{ color: '#000' }} />
            </Badge>
          </IconButton>
          <UserMenu />
        </>
      )}
    </Box>
  );
}
