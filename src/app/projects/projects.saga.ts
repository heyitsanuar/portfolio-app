import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchProjectsAction } from './projects.action';
import { AxiosService } from '@services/axios/axios.service';
import { ProjectItemProps } from '@app/projects/item.component';

let projectService: any;

function* fetchProjectsService() {
  projectService = new AxiosService();
  console.log('Entra al saga');
  const { data }: any = yield projectService.get({ endpoint: '/project' });

  return data;
}

function* cancelFetchService() {
  yield projectService.cancelRequest();
}

function* fetchProjectsRequest() {
  try {
    const { projects }: any = yield call(fetchProjectsService);
    let items = {};

    projects.forEach((project: ProjectItemProps) => {
      items = { ...items, [project._id]: project };
    });

    yield put(fetchProjectsAction.success({ items }));
  } catch (error) {
    console.log(error);
    if (!error.wasCancelled) {
      yield put(fetchProjectsAction.failure({ error }));
    }
  }
}

export function* fetchProjectsSaga() {
  yield takeLatest(fetchProjectsAction.REQUEST, fetchProjectsRequest);
  yield takeLatest(fetchProjectsAction.FULFILL, cancelFetchService);
}
