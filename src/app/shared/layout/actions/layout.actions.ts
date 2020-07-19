import {createAction, props} from '@ngrx/store';

export const typeInTheSearch = createAction(
  '[Layout] Searched for product',
  props<{searchValue: string}>()
);
