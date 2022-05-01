// import { authService } from 'services/api/authService';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import loginSaga from './saga';
import { LoginState } from './types';

export const initialState: LoginState = {
  loading: false,
  fail: false,
  success: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest(state, action) {
      state.loading = true;
      state.success = false;
      state.fail = false;
      state.errorMessage = '';
    },

    loginSuccess(state) {
      state.loading = false;
      state.success = true;
    },

    loginFailure(state, action) {
      state.loading = false;
      state.fail = true;
      state.errorMessage = action.payload;
    },
    resetLogin(state) {
      state.loading = false;
      state.success = false;
      state.fail = false;
      state.errorMessage = '';
    },
  },
});

export const { actions } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginSaga });
  return { actions: slice.actions };
};
