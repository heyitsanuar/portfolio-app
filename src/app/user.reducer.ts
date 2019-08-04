import { ActionInterface } from '@interfaces/action.interface';
import { UserType } from './user.type';

import { handleActions } from 'redux-actions';
import { fetchUserAction } from './user.actions';

export interface UserStateInterface {
  user: UserType;
  isLoadingData: boolean;
  hasError: boolean;
  error?: any;
}

const INITIAL_STATE: UserStateInterface = {
  user: {
    name: '',
    surname: '',
    description: '',
    email: '',
  },
  isLoadingData: false,
  hasError: false,
};

export const userReducer = handleActions(
  {
    [fetchUserAction.REQUEST]: (state: UserStateInterface) => ({
      ...state,
      isLoadingData: true,
    }),
    [fetchUserAction.FAILURE]: (state: UserStateInterface, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      hasError: true,
      error: payload.error,
    }),
    [fetchUserAction.SUCCESS]: (state: UserStateInterface, { payload }: ActionInterface) => ({
      ...state,
      isLoadingData: false,
      user: payload.user,
    }),
  },
  INITIAL_STATE,
);
