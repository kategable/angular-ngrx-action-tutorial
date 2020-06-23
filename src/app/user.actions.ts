import { createAction ,props} from '@ngrx/store';

export const updateUserName = createAction('[User Component] Name Change', 
props<{ name: string }>());