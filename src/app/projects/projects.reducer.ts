import { ActionInterface } from '@interfaces/action.interface';

import { handleActions } from 'redux-actions';
import { fetchProjectsAction } from './projects.action';

export interface ProjectStateInterface {
  items: object;
  isLoadingData: boolean;
  hasError: boolean;
  error?: any;
}

const INITIAL_STATE: ProjectStateInterface = {
  items: {},
  isLoadingData: false,
  hasError: false,
};

export const projectReducer = handleActions(
  {
    [fetchProjectsAction.REQUEST]: (state: ProjectStateInterface) => ({
      ...state,
      isLoadingData: true,
    }),
    [fetchProjectsAction.FAILURE]: (
      state: ProjectStateInterface,
      { payload }: ActionInterface,
    ) => ({
      ...state,
      isLoadingData: false,
      hasError: true,
      error: payload.error,
    }),
    [fetchProjectsAction.SUCCESS]: (
      state: ProjectStateInterface,
      { payload }: ActionInterface,
    ) => ({
      ...state,
      isLoadingData: false,
      items: payload.items,
    }),
  },
  INITIAL_STATE,
);
