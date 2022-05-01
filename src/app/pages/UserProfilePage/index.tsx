import { Box, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BottomProfile,
  FormProfile,
  InputProfile,
  LabelProfile,
} from './style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonCustom from 'app/components/ButtonCustom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGlobal } from 'app/components/GlobalState/selector';
import { useGlobalSlice } from 'app/components/GlobalState';
import Alert from 'app/components/Alert';

interface ProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export function UserProfilePage() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    lastName: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    email: yup
      .string()
      .email('Sai định dạng email!')
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

  const form = useForm<ProfileForm>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const { user, updateProfileStatus, loadingUpdateProfile, errorMessage } =
    useSelector(selectGlobal);

  const { actions } = useGlobalSlice();

  const onSubmit = (data: ProfileForm) => {
    dispatch(
      actions.updateProfileRequest({
        id: user?.id,
        data: {
          address: data.address,
          amount: 0,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          role: user?.role,
        },
      }),
    );
  };

  React.useEffect(() => {
    if (user === null) {
      dispatch(actions.getUserProfileRequest());
    } else {
      form.reset({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
      });
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>Thông tin tài khoản</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ mt: '50px', mb: '50px' }}>
          <BottomProfile>
            <FormProfile onSubmit={form.handleSubmit(onSubmit)}>
              <Box
                sx={{
                  fontSize: '29px',
                  lineHeight: '36px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                  color: '#bb0000',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <AccountCircleIcon sx={{ width: '36px', height: '36px' }} />
                Thông tin tài khoản
              </Box>
              <Box>
                <LabelProfile>Họ</LabelProfile>
                <InputProfile
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
                <LabelProfile>Tên</LabelProfile>
                <InputProfile
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
                <LabelProfile>Email</LabelProfile>
                <InputProfile
                  {...form.register('email')}
                  type="text"
                  defaultValue={user?.email}
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.email)}
                  helperText={form.formState.errors.email?.message}
                />
              </Box>
              <Box>
                <LabelProfile>SĐT</LabelProfile>
                <InputProfile
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
                <LabelProfile>Địa chỉ</LabelProfile>
                <InputProfile
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
                {!updateProfileStatus &&
                  errorMessage === 'Cập nhật thông tin thất bại!' && (
                    <Typography
                      sx={{
                        color: '#F04F5B',
                        textAlign: 'center',
                      }}
                    >
                      {errorMessage}
                    </Typography>
                  )}

                <ButtonCustom
                  type="submit"
                  variant="contained"
                  loading={loadingUpdateProfile}
                >
                  {loadingUpdateProfile ? '' : 'Cập nhật'}
                </ButtonCustom>
              </Box>
            </FormProfile>
          </BottomProfile>
        </Box>
      </OneColumnLayout>

      {updateProfileStatus && (
        <Alert
          type="success"
          text="Cập nhật thông tin thành công!"
          isOpen={updateProfileStatus}
          handle={() => dispatch(actions.setUser(null))}
          onClose={() => dispatch(actions.setUpdateStatus(false))}
        />
      )}
    </>
  );
}
