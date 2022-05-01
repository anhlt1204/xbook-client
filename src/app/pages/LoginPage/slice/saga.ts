import { call, takeLatest, put, all } from 'redux-saga/effects';
import { authService } from 'services/api/authService';
import { actions } from '.';
import { actions as globalActions } from 'app/components/GlobalState';
import { isEmpty } from 'lodash';

function* handleLogin(action) {
  try {
    const response = yield call(authService.login, action.payload);

    localStorage.setItem('access_token', response.data.token);

    const res = yield call(authService.getCurrentProfile);

    yield put(globalActions.setUser(res.data.item));

    yield put(actions.loginSuccess());
  } catch (error: any) {
    console.log(error.response);
    localStorage.removeItem('access_token');

    yield put(
      actions.loginFailure(
        isEmpty(error.response.data.message)
          ? 'error'
          : error.response.data.message,
      ),
    );
  }
}

export function* watchHandleLogin() {
  yield takeLatest(actions.loginRequest.type, handleLogin);
}

export default function* loginSaga() {
  yield all([watchHandleLogin()]);
}
