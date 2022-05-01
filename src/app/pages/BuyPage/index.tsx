import { Box, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BottomBuy,
  BuyListItem,
  FormBuy,
  InputBuy,
  LabelBuy,
  TopBuy,
} from './style';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ItemBuy from 'app/components/ItemBuy';
import ButtonCustom from 'app/components/ButtonCustom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useCartSlice } from '../CartPage/slice';
import { useGlobalSlice } from 'app/components/GlobalState';
import { selectCart } from '../CartPage/slice/selector';
import { selectGlobal } from 'app/components/GlobalState/selector';
import Alert from 'app/components/Alert';
import { useHistory } from 'react-router-dom';

interface InforForm {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
}

export function BuyPage() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    lastName: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    phone: yup
      .string()
      .required('Không thể bỏ trống!')
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
        'Sai định dạng SĐT!',
      ),
    address: yup.string().required('Không thể bỏ trống!'),
  });

  const form = useForm<InforForm>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const { actions: cartActions } = useCartSlice();

  const { actions: globalActions } = useGlobalSlice();

  const { detailCart, loadingPayment, paymentStatus } = useSelector(selectCart);

  const { user } = useSelector(selectGlobal);

  const onSubmit = (data: InforForm) => {
    dispatch(
      cartActions.paymentCartRequest({
        address: data.address,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
      }),
    );
  };

  React.useEffect(() => {
    if (user === null) {
      dispatch(globalActions.getUserProfileRequest());
    } else {
      form.reset({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        phone: user.phone || '',
        address: user.address || '',
      });
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>Đặt hàng</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ mt: '50px', mb: '50px', minHeight: 'calc(100vh - 260px)' }}>
          <TopBuy>
            <ReceiptLongIcon />
            <Typography component="h2">Thông tin đơn hàng</Typography>
          </TopBuy>

          <BottomBuy>
            <Box
              sx={{
                mb: '20px',
                width: '600px',
                fontSize: '29px',
                lineHeight: '36px',
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              Danh sách sản phẩm
            </Box>
            <BuyListItem>
              <Box className="inner_list">
                {detailCart.orderItems.map((e, i) => (
                  <ItemBuy
                    productID={e.product.id}
                    image={e.product.product_images[0].imageUrl}
                    title={e.product.title}
                    price={e.product.price}
                    quantity={e.quantity}
                    key={i}
                  />
                ))}
              </Box>
            </BuyListItem>

            <Typography
              component="p"
              sx={{
                mt: '15px',
                pr: '20px',
                width: '600px',
                textAlign: 'right',
              }}
            >
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
            </Typography>

            <FormBuy onSubmit={form.handleSubmit(onSubmit)}>
              <Box
                sx={{
                  fontSize: '29px',
                  lineHeight: '36px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                Thông tin người mua
              </Box>
              <Box>
                <LabelBuy>Họ</LabelBuy>
                <InputBuy
                  {...form.register('lastName')}
                  type="text"
                  defaultValue={user?.lastName}
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.lastName)}
                  helperText={form.formState.errors.lastName?.message}
                />
              </Box>
              <Box>
                <LabelBuy>Tên</LabelBuy>
                <InputBuy
                  {...form.register('firstName')}
                  type="text"
                  defaultValue={user?.firstName}
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.firstName)}
                  helperText={form.formState.errors.firstName?.message}
                />
              </Box>
              <Box>
                <LabelBuy>SĐT</LabelBuy>
                <InputBuy
                  {...form.register('phone')}
                  type="text"
                  defaultValue={user?.phone}
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.phone)}
                  helperText={form.formState.errors.phone?.message}
                />
              </Box>

              <Box>
                <LabelBuy>Địa chỉ</LabelBuy>
                <InputBuy
                  {...form.register('address')}
                  type="text"
                  defaultValue={user?.address}
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.address)}
                  helperText={form.formState.errors.address?.message}
                />
              </Box>

              <Box
                sx={{
                  marginTop: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {paymentStatus === 'error' && (
                  <Typography
                    sx={{
                      color: '#F04F5B',
                      textAlign: 'center',
                    }}
                  >
                    Đặt hàng thất bại!
                  </Typography>
                )}

                <ButtonCustom
                  type="submit"
                  variant="contained"
                  loading={loadingPayment}
                >
                  {loadingPayment ? '' : 'Đặt hàng ngay!'}
                </ButtonCustom>
              </Box>
            </FormBuy>
          </BottomBuy>
        </Box>
      </OneColumnLayout>

      {paymentStatus !== '' && (
        <Alert
          type="success"
          text="Đặt hàng thành công!"
          isOpen={paymentStatus === 'success'}
          handle={() => history.push('/')}
          onClose={() => dispatch(cartActions.setPaymentStatus(''))}
        />
      )}
    </>
  );
}
