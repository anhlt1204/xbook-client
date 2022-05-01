import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import cartSaga from './saga';
import { CartState } from './types';

export const initialState: CartState = {
  detailCart: { orderItems: [], total: 0, totalPrice: 0 },

  addStatus: '',
  removeStatus: '',

  loadingPayment: false,
  paymentStatus: '',
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCurrentCart(state) {},

    setDetailCart(state, action) {
      state.detailCart.orderItems = action.payload.orderItems;
      state.detailCart.total = action.payload.total;
      state.detailCart.totalPrice = action.payload.totalPrice;
    },

    addToCartRequest(state, action) {
      state.addStatus = '';
    },

    setAddStatus(state, action: PayloadAction<string>) {
      state.addStatus = action.payload;
    },

    removeFromCartRequest(state, action) {
      state.removeStatus = '';
    },

    setRemoveStatus(state, action: PayloadAction<string>) {
      state.removeStatus = action.payload;
    },

    paymentCartRequest(state, action) {
      state.loadingPayment = false;
      state.paymentStatus = '';
    },

    setLoadingPayment(state, action: PayloadAction<boolean>) {
      state.loadingPayment = action.payload;
    },

    setPaymentStatus(state, action: PayloadAction<string>) {
      state.paymentStatus = action.payload;
    },
  },
});

export const { actions } = slice;

export const useCartSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: cartSaga });
  return { actions: slice.actions };
};
