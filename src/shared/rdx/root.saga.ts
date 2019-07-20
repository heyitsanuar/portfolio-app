import { all, fork } from 'redux-saga/effects';

import { changeThemeSaga } from '@shared/themes/theme.saga';

export function* rootSaga() {
  yield all([fork(changeThemeSaga)]);
}
