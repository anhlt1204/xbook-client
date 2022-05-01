import { call, takeLatest, put, all } from 'redux-saga/effects';
import { cartService } from 'services/api/cartService';
import { actions } from '.';

function* handleGetList() {
  try {
    const response = yield call(cartService.getCurrentCart);

    yield put(
      actions.setDetailCart({
        orderItems: response.data.item.orderItems,
        total: response.data.item.total,
        totalPrice: response.data.item.totalPrice,
      }),
    );
  } catch (error: any) {}
}

function* handleAdd(action) {
  try {
    yield call(cartService.addToCart, action.payload);

    yield put(actions.setAddStatus('success'));
  } catch (error) {
    yield put(actions.setAddStatus('error'));
  }
}

function* handleRemove(action) {
  try {
    yield call(cartService.removeFromCart, action.payload);

    yield put(actions.setRemoveStatus('success'));
  } catch (error) {
    yield put(actions.setRemoveStatus('error'));
  }
}

function* handlePayment(action) {
  try {
    yield call(cartService.paymentCart, action.payload);

    yield put(actions.setPaymentStatus('success'));
  } catch (error) {
    yield put(actions.setPaymentStatus('error'));
  }
}

export function* watchHandleGetList() {
  yield takeLatest(actions.getCurrentCart.type, handleGetList);
}

export function* watchHandleAdd() {
  yield takeLatest(actions.addToCartRequest.type, handleAdd);
}

export function* watchHandleRemove() {
  yield takeLatest(actions.removeFromCartRequest.type, handleRemove);
}

export function* watchHandlePayment() {
  yield takeLatest(actions.paymentCartRequest.type, handlePayment);
}

export default function* cartSaga() {
  yield all([
    watchHandleGetList(),
    watchHandleAdd(),
    watchHandleRemove(),
    watchHandlePayment(),
  ]);
}
