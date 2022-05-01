import { call, takeLatest, put, all } from 'redux-saga/effects';
import { accountService } from 'services/api/accountService';
import { authService } from 'services/api/authService';
import { categoryService } from 'services/api/categoryService';
import { productService } from 'services/api/productService';
import { actions } from '.';

function* handleGetUserProfile() {
  try {
    const response = yield call(authService.getCurrentProfile);

    yield put(actions.setUser(response.data.item));
  } catch (error: any) {
    yield put(actions.outUser());
    window.location.href = '/login';
  }
}

function* handleUpdateProfile(action) {
  const { id, data } = action.payload;
  try {
    yield call(accountService.updateAccount, id, data);

    yield put(actions.setUpdateStatus(true));

    yield put(actions.setLoadingUpdateProfile(false));
  } catch (error) {
    yield put(actions.setErrorMessage('Cập nhật thông tin thất bại!'));
    yield put(actions.setLoadingUpdateProfile(false));
  }
}

function* handleGetListCategory(action) {
  try {
    const response = yield call(categoryService.getList, action.payload);

    yield put(
      actions.setCategoryData({
        data: response.data.data,
      }),
    );
  } catch (error) {
    yield put(
      actions.setCategoryData({
        data: [],
      }),
    );
  }
}

function* handleGetListProduct(action) {
  try {
    const response = yield call(productService.getList, action.payload);

    yield put(
      actions.setProductData({
        data: response.data.data,
        category: response.data.value,
        total_item: response.data.total_item,
        total_page: response.data.total_page,
        current_page: response.data.current_page,
      }),
    );
  } catch (error) {
    yield put(
      actions.setProductData({
        data: [],
        category: '',
        total_item: 0,
        total_page: 0,
        current_page: 0,
      }),
    );

    yield put(actions.setErrorMessage('Lỗi! Không hiển thị danh sách!'));
  }
}

function* handleGetDetailProduct(action) {
  try {
    const res = yield call(productService.getProductByID, action.payload);

    yield put(actions.setDetailProduct(res.data.item));
  } catch (error) {
    yield put(
      actions.setDetailProduct({
        id: -1,
        title: '',
        longDescription: '',
        categoryId: -1,
        category: '',
        price: 0,
        author: '',
        currentNumber: 0,
        numberOfPage: 0,
        quantitySelled: 0,
        images: [{ link: '' }],
      }),
    );
  }
}

export function* watchHandleGetUserProfile() {
  yield takeLatest(actions.getUserProfileRequest.type, handleGetUserProfile);
}

export function* watchHandleUpdateUserProfile() {
  yield takeLatest(actions.updateProfileRequest.type, handleUpdateProfile);
}

export function* watchHandleGetCategoryList() {
  yield takeLatest(actions.getCategoryListRequest.type, handleGetListCategory);
}

export function* watchHandleGetProductList() {
  yield takeLatest(actions.getProductListRequest.type, handleGetListProduct);
}

export function* watchHandleGetProductDetail() {
  yield takeLatest(
    actions.getProductDetailRequest.type,
    handleGetDetailProduct,
  );
}

export default function* globalSaga() {
  yield all([
    watchHandleGetUserProfile(),
    watchHandleUpdateUserProfile(),
    watchHandleGetCategoryList(),
    watchHandleGetProductList(),
    watchHandleGetProductDetail(),
  ]);
}
