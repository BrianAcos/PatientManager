import {NotificationType} from '../types/types';

export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const setNotification = (message: string, type: NotificationType) => ({
  type: SET_NOTIFICATION,
  payload: {message, type},
});

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATION,
  payload: {},
});
