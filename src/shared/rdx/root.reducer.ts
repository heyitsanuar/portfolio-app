import { combineReducers } from 'redux';

import { ThemeStateInterface, themeReducer } from '@themes/theme.reducer';
import { UserStateInterface, userReducer } from './../../app/user.reducer';
import { ProjectStateInterface, projectReducer } from './../../app/projects/projects.reducer';

export interface AppStateInterface {
  theme: ThemeStateInterface;
  user: UserStateInterface;
  projects: ProjectStateInterface;
}

export const RootReducer = combineReducers<AppStateInterface>({
  theme: themeReducer,
  user: userReducer,
  projects: projectReducer,
});
