import { IProjectState } from '@app/projects/projects.reducer';
import { ActionInterface } from '@interfaces/action.interface';
import { IAppState } from '@rdx/root.reducer';
import { handleActions } from 'redux-actions';
import { fetchSkillsAction } from './skills.action';
import { skills } from '@shared/data/skills';

export interface SkillsStateInterface {
  items: object;
  isLoadingData: boolean;
  hasError: boolean;
  error?: any;
}

const INITIAL_STATE: SkillsStateInterface = {
  items: skills,
  isLoadingData: false,
  hasError: false,
};

export const skillReducer = handleActions(
  {
    [fetchSkillsAction.REQUEST]: (state: IProjectState) => ({
      ...state,
      isLoadingData: true,
    }),
    [fetchSkillsAction.FAILURE]: (state: IProjectState, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      hasError: true,
      error: payload.error,
    }),
    [fetchSkillsAction.SUCCESS]: (state: IProjectState, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      items: payload.items,
    }),
  },
  INITIAL_STATE,
);

export const getSkillsSelector = (state: IAppState): any => {
  return Object.keys(state.skills.items).map(key => (state.skills.items as any)[key]);
};
