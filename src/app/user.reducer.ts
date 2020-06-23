import { createReducer, on } from '@ngrx/store';
import { updateUserName } from './user.actions';
 

 export interface GlobalState {
  name: string
}

export const initialState: GlobalState = {
  name: null, 
};

const _userReducer = createReducer(initialState,
  on(updateUserName, (state: GlobalState, {name:string}) => ({
    ...state,  name}))
); 
 
export function userReducer(state:GlobalState, action) {
  return _userReducer(state, action);
}