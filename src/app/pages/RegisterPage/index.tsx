import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import {
  InputRegister,
  LabelRegister,
  RegisterBox,
  RegisterFormStyle,
  RegisterPageWrapper,
  TitleRegister,
} from './style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectRegister } from './slice/selector';
import ButtonCustom from 'app/components/ButtonCustom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Alert from 'app/components/Alert';

interface RegisterForm {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  address: string;
}

export function RegisterPage() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    lastName: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    username: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    password: yup
      .string()
      .required('Không thể bỏ trống!')
      .min(8, 'Ít nhất 8 kí tự')
      .max(50, 'Không quá 50 kí tự')
      .matches(/(?=.*?[0-9])/, 'Chứa ít nhất một số!')
      .matches(/(?=.*?[A-Z])/, 'Chứa ít nhất một kí tự in hoa!')
      .matches(/(?=.*?[a-z])/, 'Chứa ít nhất một kí tự in thường!')
      .matches(/(?=.*?[#?!@$%^&*-])/, 'Chứa ít nhất một kí tự đặc biệt!'),
    email: yup
      .string()
      .email('Sai định dạng email!')
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    phone: yup
      .string()
      .required('Không thể bỏ trống!')
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{7})\b/,
        'Sai định dạng SĐT!',
      ),
    address: yup.string().required('Không thể bỏ trống!'),
  });

  const form = useForm<RegisterForm>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const { actions } = useRegisterSlice();
  const registerSelect = useSelector(selectRegister);

  const [messageError, setMessageError] = React.useState<string>('');
  const [show, setShow] = React.useState<boolean>(false);

  const onSubmit = (data: RegisterForm) => {
    setMessageError('');
    dispatch(
      actions.registerRequest({
        address: data.address,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        phone: data.phone,
        username: data.username,
      }),
    );
  };

  const handleBackToLogin = () => {
    history.push('/login');
    dispatch(actions.resetRegister());
  };

  React.useEffect(() => {
    switch (registerSelect.errorMessage) {
      case 'Email is already exist':
        setMessageError('Email này đã được đăng ký!');
        break;

      case 'Username is already exist':
        setMessageError('Tài khoản này đã được đăng ký!');
        break;

      case 'Phone number is already exist':
        setMessageError('Số điện thoại này đã được đăng ký!');
        break;

      default:
        setMessageError('Đăng kí thất bại!');
        break;
    }
  }, [registerSelect.fail, registerSelect.errorMessage]);

  return (
    <>
      <Helmet>
        <title>Đăng ký</title>
      </Helmet>
      <OneColumnLayout>
        <RegisterPageWrapper>
          <RegisterBox>
            <TitleRegister>Đăng ký tài khoản</TitleRegister>
            <RegisterFormStyle onSubmit={form.handleSubmit(onSubmit)}>
              <Box sx={{ display: 'flex', gap: '20px' }}>
                <Box sx={{ width: '100%' }}>
                  <LabelRegister>Họ *</LabelRegister>
                  <InputRegister
                    {...form.register('lastName')}
                    type="text"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(form.formState.errors.lastName)}
                    helperText={form.formState.errors.lastName?.message}
                  />
                </Box>
                <Box sx={{ width: '100%' }}>
                  <LabelRegister>Tên *</LabelRegister>
                  <InputRegister
                    {...form.register('firstName')}
                    type="text"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(form.formState.errors.firstName)}
                    helperText={form.formState.errors.firstName?.message}
                  />
                </Box>
              </Box>

              <Box sx={{ width: '100%' }}>
                <LabelRegister>Tài khoản *</LabelRegister>
                <InputRegister
                  {...form.register('username')}
                  type="text"
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.username)}
                  helperText={form.formState.errors.username?.message}
                />
              </Box>

              <Box sx={{ width: '100%' }}>
                <LabelRegister>Mật khẩu *</LabelRegister>
                <InputRegister
                  {...form.register('password')}
                  type={show ? 'text' : 'password'}
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.password)}
                  helperText={form.formState.errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => {
                            setShow(!show);
                          }}
                          tabIndex={-1}
                        >
                          {show ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: '20px' }}>
                <Box sx={{ width: '100%' }}>
                  <LabelRegister>Email *</LabelRegister>
                  <InputRegister
                    {...form.register('email')}
                    type="text"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(form.formState.errors.email)}
                    helperText={form.formState.errors.email?.message}
                  />
                </Box>

                <Box sx={{ width: '100%' }}>
                  <LabelRegister>SĐT *</LabelRegister>
                  <InputRegister
                    {...form.register('phone')}
                    type="text"
                    fullWidth
                    autoComplete="off"
                    error={Boolean(form.formState.errors.phone)}
                    helperText={form.formState.errors.phone?.message}
                  />
                </Box>
              </Box>

              <Box sx={{ width: '100%' }}>
                <LabelRegister>Địa chỉ *</LabelRegister>
                <InputRegister
                  {...form.register('address')}
                  type="text"
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
                {registerSelect.errorMessage !== '' && (
                  <Typography
                    sx={{
                      color: '#F04F5B',
                      textAlign: 'center',
                    }}
                  >
                    {messageError}
                  </Typography>
                )}

                {registerSelect.success && (
                  <Typography
                    sx={{
                      color: '#51BF29',
                      textAlign: 'center',
                    }}
                  >
                    Đăng ký thành công!
                  </Typography>
                )}

                <ButtonCustom
                  type="submit"
                  variant="contained"
                  loading={registerSelect.loading}
                >
                  {registerSelect.loading ? '' : 'Đăng ký'}
                </ButtonCustom>
              </Box>
            </RegisterFormStyle>

            <Typography
              onClick={handleBackToLogin}
              sx={{
                paddingTop: '50px',
                color: theme => theme.palette.black.main,
                fontSize: '16px',
                lineHeight: '21px',
                fontWeight: 700,
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                width: '110px',
                margin: '0px auto',

                '&:hover': {
                  color: theme => theme.palette.primary.main,
                },
              }}
            >
              Đăng nhập
            </Typography>
          </RegisterBox>
        </RegisterPageWrapper>
      </OneColumnLayout>

      {registerSelect.success && (
        <Alert
          type="success"
          text="Đăng ký tài khoản thành công!"
          handle={() => history.push('/login')}
          isOpen={registerSelect.success}
          onClose={() => dispatch(actions.resetRegister())}
        />
      )}
    </>
  );
}
