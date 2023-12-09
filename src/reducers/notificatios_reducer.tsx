import {SET_NOTIFICATION, REMOVE_NOTIFICATION} from '../actions/notifications';
import {NotificationType} from '../types/types';

interface AppState {
  show: boolean;
  type: NotificationType;
  message: string;
}

interface AppAction {
  type: string;
  payload: AppState;
}

const initialState: AppState = {
  show: false,
  type: null,
  message: '',
};

export function notifications(state = initialState, action: AppAction) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        show: true,
        type: action.payload.type,
        message: action.payload.message
      };
    case REMOVE_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
}
