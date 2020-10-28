import {createAction, props} from "@ngrx/store";
import {Product} from "../model/product";


export const addToReadingList = createAction(
  '[Products Reading List] Add to the list',
  props<{ product: Product }>()
);


export const removeFromReadingList = createAction(
  '[Products Reading List] Remove from list',
  props<{ productId: string }>()
);
