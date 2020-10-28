import {createReducer, on} from "@ngrx/store";
import {ProductReadingListActions} from "../actions";
import {Product} from "../model/product";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export const productReadingListFeatureKey = 'productReadingList';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State extends EntityState<Product> {
}


/**
 * createEntityAdapter creates an object of many helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id,
  sortComparer: false,
});

/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = adapter.getInitialState({
});

export const reducer = createReducer(
  initialState,
  on(ProductReadingListActions.addToReadingList, (state,{ product }) => adapter.addOne(product, state)
  /*{
    const existingReadingProducts = state.readingListProducts;
    if (!state.readingListProducts.some(existingProduct => existingProduct.id === product.id)){
      existingReadingProducts.push(product);
    }
    return ({
      ...state,
      readingListProducts: existingReadingProducts
    })
  }*/
  ),
  on(ProductReadingListActions.removeFromReadingList, (state, { productId }) =>
    adapter.removeOne(productId, state)
   /*
  {
    const existingProducts = state.readingListProducts.filter((product: Product) => product.id !== productId)
    return {
    ...state,
      readingListProducts: existingProducts
    }
  }*/
  )
);
