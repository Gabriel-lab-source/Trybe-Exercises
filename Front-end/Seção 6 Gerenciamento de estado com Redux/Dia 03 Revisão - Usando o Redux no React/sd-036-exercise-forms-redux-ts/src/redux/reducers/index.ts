import { combineReducers } from 'redux';
import { PersonalData } from '../../types';
import { ADD_INFO } from '../actions';

type ActionType = {
  type: string,
  payload: PersonalData,
};

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
  resume: '',
  role: '',
  description: '',
};

const formReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case ADD_INFO: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ formReducer });

export default rootReducer;
