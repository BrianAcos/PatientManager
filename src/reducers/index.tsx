import {combineReducers} from 'redux';
import {notifications} from './notificatios_reducer';

export const rootReducer = combineReducers({
  notifications,
});

export type RootState = ReturnType<typeof rootReducer>;

