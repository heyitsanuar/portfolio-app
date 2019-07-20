import { combineReducers } from 'redux';

import { ThemeStateInterface, themeReducer } from '@themes/theme.reducer';

export interface AppStateInterface {
  theme: ThemeStateInterface;
}

export const RootReducer = combineReducers<AppStateInterface>({
  theme: themeReducer,
});
