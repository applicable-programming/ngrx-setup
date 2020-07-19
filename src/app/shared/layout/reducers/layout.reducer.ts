import {createReducer, on} from "@ngrx/store";
import {LayoutActions} from "../actions";

export const layoutFeatureKey = 'layout';

export interface State {
  searchValue: string;
}

const initialState: State = {
  searchValue: '',
};

export const reducer = createReducer(
  initialState,
  // Even thought the `state` is unused, it helps infer the return type
  on(LayoutActions.typeInTheSearch, (state, {searchValue}) => ({ searchValue }))
);

export const selectSearchValue = (state: State) => state.searchValue;

