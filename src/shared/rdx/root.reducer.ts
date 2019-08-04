import { combineReducers } from 'redux';

import { ThemeStateInterface, themeReducer } from '@themes/theme.reducer';
import { UserStateInterface, userReducer } from './../../app/user.reducer';

export interface AppStateInterface {
  theme: ThemeStateInterface;
  user: UserStateInterface;
}

export const RootReducer = combineReducers<AppStateInterface>({
  theme: themeReducer,
  user: userReducer,
});
