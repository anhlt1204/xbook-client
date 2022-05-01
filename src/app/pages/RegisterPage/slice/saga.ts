import { call, takeLatest, put, all, delay } from 'redux-saga/effects';
import { authService } from 'services/api/authService';
import { actions } from '.';
import { isEmpty } from 'lodash';

function* handleRegister(action) {
  try {
    yield call(authService.register, action.payload);

    yield delay(1500);

    yield put(actions.registerSuccess());
  } catch (error: any) {
    yield put(
      actions.registerFailure(
        isEmpty(error.response.data.errorCodes)
          ? 'error'
          : error.response.data.errorCodes[0],
      ),
    );
  }
}

export function* watchHandleRegister() {
  yield takeLatest(actions.registerRequest.type, handleRegister);
}

export default function* registerSaga() {
  yield all([watchHandleRegister()]);
}
