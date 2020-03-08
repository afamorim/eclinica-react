import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { singInSuccess } from './actions';

export function* sigIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post(), 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('Uusário não é prestador');
    return;
  }

  yield put(singInSuccess(token, user));

  history.pus('/dashboard');
}

export default all([takeLatest('@auth/SIGIN_IN_REQUEST', sigIn)]);
