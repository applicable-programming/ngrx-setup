import {createAction, props} from "@ngrx/store";
import {Product} from "../model/product";


export const search = createAction(
  '[Products/API] Search is needed',
  props<{ query: string }>()
);


export const searchSuccess = createAction(
  '[Products/API] Search Success',
  props<{ products: Product[] }>()
);

export const searchFailure = createAction(
  '[Products/API] Search Failure',
  props<{ errorMsg: string }>()
);
