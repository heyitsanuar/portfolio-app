import { all, fork } from 'redux-saga/effects';

import { changeThemeSaga } from '@shared/themes/theme.saga';
import { fetchUserSaga } from '@app/user.saga';

export function* rootSaga() {
  yield all([fork(changeThemeSaga)]);
  yield all([fork(fetchUserSaga)]);
}
