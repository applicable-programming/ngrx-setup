import * as fromProducts from './products.reducer';
import {productsFeatureKey} from './products.reducer';
import * as fromRoot from '../../reducers';
import {Action, combineReducers, createFeatureSelector, createSelector} from "@ngrx/store";


export const productsModuleFeatureKey = 'productsModule';

export interface ProductState {
  [fromProducts.productsFeatureKey]: fromProducts.State;
}

export interface State extends fromRoot.State {
  [productsModuleFeatureKey]: ProductState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: ProductState | undefined, action: Action) {
  return combineReducers({
    [fromProducts.productsFeatureKey]: fromProducts.reducer,
  })(state, action);
}




/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectProductState = createFeatureSelector<State, ProductState>(
  productsModuleFeatureKey
);

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const selectProducts = createSelector(
  selectProductState,
  (state) => state[fromProducts.productsFeatureKey].products
);

export const selectProductSearch = createSelector(
  selectProductState,
  (state) => state[fromProducts.productsFeatureKey].searchValue
);
