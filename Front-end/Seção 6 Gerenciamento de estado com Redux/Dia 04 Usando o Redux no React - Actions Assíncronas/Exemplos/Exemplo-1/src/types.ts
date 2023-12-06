import { ThunkDispatch } from 'redux-thunk';
import { UnknownAction } from 'redux';

export type ReduxState = {
  isFetching: boolean,
  imageURL: string,
  errorMessage: string,
};

export type Dispatch = ThunkDispatch<ReduxState, null, UnknownAction>;
