import { FormInfo } from '../../types';

export const ADD_INFO = 'ADD_INFO';

export const addFormInfo = (payload: FormInfo) => ({
  type: ADD_INFO,
  payload,
});
