import { createRoutine } from 'redux-saga-routines';

import { FETCH_PROJECTS } from '@rdx/action-types';

export const fetchProjectsAction = createRoutine(FETCH_PROJECTS);
