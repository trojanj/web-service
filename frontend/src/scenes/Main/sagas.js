import { toastrError } from 'common/helpers/toastrHelper';
import { all, call, takeEvery } from 'redux-saga/effects';
import { updateCountersRoutine } from 'scenes/Main/routines';
import { updateUser } from 'services/userService';

function* updateCounters({ payload }) {
  try {
    const { _id, counters } = payload;
    yield call(updateUser, _id, { counters });
  } catch (e) {
    yield call(toastrError, e.message);
  }
}

function* watchUpdateCounters() {
  yield takeEvery(updateCountersRoutine.TRIGGER, updateCounters);
}

export default function* mainSaga() {
  yield all([
    watchUpdateCounters()
  ]);
}
