import { combineReducers } from 'redux';
import { themeReducer } from '@themes/theme.reducer';
import { userReducer } from './../../app/user.reducer';
import { projectReducer } from './../../app/projects/projects.reducer';
import { skillReducer } from '@app/skills/skills.reducer';

export const RootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  projects: projectReducer,
  skills: skillReducer,
});

export type IAppState = ReturnType<typeof RootReducer>;
