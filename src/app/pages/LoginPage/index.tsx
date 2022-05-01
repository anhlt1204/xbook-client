import React from 'react';
import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import {
  InputLogin,
  LabelLogin,
  LoginBox,
  LoginFormStyle,
  LoginPageWrapper,
  TitleLogin,
} from './style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogin } from './slice/selector';
import { selectGlobal } from 'app/components/GlobalState/selector';
import ButtonCustom from 'app/components/ButtonCustom';
import { useHistory } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Helmet } from 'react-helmet-async';

interface LoginForm {
  username: string;
  password: string;
}

export function LoginPage() {
  const schema = yup.object().shape({
    username: yup.string().required('Không thể bỏ trống!'),
    password: yup.string().required('Không thể bỏ trống'),
  });

  const form = useForm<LoginForm>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const [messageError, setMessageError] = React.useState('');
  const [show, setShow] = React.useState<boolean>(false);

  const { actions } = useLoginSlice();

  const loginSelect = useSelector(selectLogin);

  const { pathName } = useSelector(selectGlobal);

  const onSubmit = (data: LoginForm) => {
    setMessageError('');
    dispatch(
      actions.loginRequest({
        username: data.username,
        password: data.password,
      }),
    );
  };

  const handleBackToRegister = () => {
    history.push('/register');
    dispatch(actions.resetLogin());
  };

  React.useEffect(() => {
    if (loginSelect.success) {
      history.push(`${pathName}`);
    }
    switch (loginSelect.errorMessage) {
      case 'INVALID_CREDENTIALS':
        setMessageError('Sai tài khoản  hoặc mật khẩu!');
        break;

      default:
        setMessageError('Đăng nhập thất bại!');
        break;
    }
  }, [loginSelect.success, loginSelect.fail, loginSelect.errorMessage]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    dispatch(actions.resetLogin());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <OneColumnLayout>
        <LoginPageWrapper>
          <LoginBox>
            <TitleLogin>Đăng nhập</TitleLogin>
            <LoginFormStyle onSubmit={form.handleSubmit(onSubmit)}>
              <Box sx={{ width: '100%' }}>
                <LabelLogin>Tài khoản</LabelLogin>
                <InputLogin
                  {...form.register('username')}
                  type="text"
                  autoComplete="off"
                  error={Boolean(form.formState.errors.username)}
                  helperText={form.formState.errors.username?.message}
                  sx={{ width: '100%' }}
                />
              </Box>
              <Box sx={{ width: '100%' }}>
                <LabelLogin>Mật khẩu</LabelLogin>
                <InputLogin
                  {...form.register('password')}
                  type={show ? 'text' : 'password'}
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

              <Box
                sx={{
                  marginTop: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {loginSelect.errorMessage !== '' && (
                  <Typography
                    sx={{
                      color: theme => theme.palette.error.main,
                      textAlign: 'center',
                    }}
                  >
                    {messageError}
                  </Typography>
                )}

                <ButtonCustom
                  type="submit"
                  variant="contained"
                  loading={loginSelect.loading}
                >
                  {loginSelect.loading ? '' : 'Đăng nhập'}
                </ButtonCustom>
              </Box>
            </LoginFormStyle>

            <Typography
              onClick={handleBackToRegister}
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
              Đăng ký
            </Typography>
          </LoginBox>
        </LoginPageWrapper>
      </OneColumnLayout>
    </>
  );
}
