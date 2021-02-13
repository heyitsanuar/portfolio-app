import { takeLatest, put, call } from 'redux-saga/effects';
import { IProject } from '@shared/models/project';
import { fetchProjectsAction, changeProjectAction } from './projects.action';

let projectService: any;

function* fetchProjectsService() {
  

  const { data }: any = yield projectService.get({ endpoint: '/project' });

  return data;
}

function* cancelFetchService(message: any) {
  yield projectService.cancelRequest(message);
}

function* fetchProjectsRequest() {
  try {
    const { projects }: any = yield call(fetchProjectsService);
    let items = {};

    projects.forEach((project: IProject, index: any) => {
      items = { ...items, [project._id]: { ...project, index } };
    });

    yield put(fetchProjectsAction.success({ items }));
  } catch (error) {
    if (!error.wasCancelled) {
      yield put(fetchProjectsAction.failure({ error }));
    }
  }
}

export function* fetchProjectsSaga() {
  yield takeLatest(fetchProjectsAction.REQUEST, fetchProjectsRequest);
  yield takeLatest(fetchProjectsAction.FULFILL, cancelFetchService);
}

function* changeProjectPage() {
  yield put(changeProjectAction.fulfill());
}

export function* changeProjectSaga() {
  yield takeLatest(changeProjectAction.TRIGGER, changeProjectPage);
}