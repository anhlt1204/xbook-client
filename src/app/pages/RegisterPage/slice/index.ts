import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import registerSaga from './saga';
import { RegisterState } from './types';

export const initialState: RegisterState = {
  loading: false,
  fail: false,
  success: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerRequest(state, action) {
      state.loading = true;
      state.fail = false;
      state.errorMessage = '';
    },

    registerSuccess(state) {
      state.loading = false;
      state.success = true;
    },

    registerFailure(state, action) {
      state.loading = false;
      state.fail = true;
      state.errorMessage = action.payload;
    },

    resetRegister(state) {
      state.loading = false;
      state.fail = false;
      state.success = false;
      state.errorMessage = '';
    },
  },
});

export const { actions } = slice;

export const useRegisterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: registerSaga });
  return { actions: slice.actions };
};
