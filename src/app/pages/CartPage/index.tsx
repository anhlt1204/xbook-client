import { Box, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BottomCart, CartButton, CartTableWrapper, TopCart } from './style';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ItemCart from '../../components/ItemCart';
import ButtonCustom from 'app/components/ButtonCustom';
import { useSelector } from 'react-redux';
import { selectCart } from './slice/selector';
import { useHistory } from 'react-router-dom';

export function CartPage() {
  const history = useHistory();

  const { detailCart } = useSelector(selectCart);

  const onHandle = () => {
    history.push('/buy');
  };

  return (
    <>
      <Helmet>
        <title>Giỏ hàng</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ mt: '50px', mb: '50px', minHeight: 'calc(100vh - 260px)' }}>
          <TopCart>
            <ShoppingBasketOutlinedIcon />
            <Typography component="h2">Giỏ hàng</Typography>
          </TopCart>
          <BottomCart>
            {detailCart.orderItems.length === 0 ? (
              <>
                <Typography component="p" className="no_data">
                  Không có sản phẩm nào trong giỏ hàng của bạn!
                </Typography>
              </>
            ) : (
              <Box>
                <CartTableWrapper>
                  {detailCart.orderItems.map((e, i) => (
                    <ItemCart
                      product_id={e.product.id}
                      image={e.product.product_images[0].imageUrl}
                      title={e.product.title}
                      price={e.product.price}
                      numb={e.quantity}
                      current={e.product.current_number}
                      key={i}
                    />
                  ))}
                </CartTableWrapper>
                <CartButton>
                  <Box>
                    Tổng tiền:{' '}
                    <span
                      style={{
                        fontSize: '18px',
                        lineHeight: '24px',
                        fontWeight: 600,
                        color: '#F04F5B',
                      }}
                    >
                      {detailCart.totalPrice.toLocaleString('en-US')} VNĐ
                    </span>
                  </Box>
                  <ButtonCustom variant="contained" onClick={onHandle}>
                    Đặt hàng
                  </ButtonCustom>
                </CartButton>
              </Box>
            )}
          </BottomCart>
        </Box>
      </OneColumnLayout>
    </>
  );
}
