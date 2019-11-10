
/* NgRx */
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRoot from "../../state/app.state";
import { City } from '../cityList';
import { CityActions, CityActionTypes } from './city.actions';


// State for this feature (Product)

export interface CityState {
  cityList: any;
  error: string;
}

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.

export interface State extends fromRoot.State {
  cityList: CityState;
};

const initialState: CityState = {
  cityList: null,
  error: ""
};

// Selector functions
const getCityFeatureState = createFeatureSelector<CityState>("cities");


export const getCityList = createSelector(
  getCityFeatureState,
  state => state.cityList
);

export const getError = createSelector(
  getCityFeatureState,
  state => state.error
);

export function reducer(
  state = initialState,
  action: CityActions
): CityState {
  switch (action.type) {

    case CityActionTypes.LoadSuccess:
      return {
        ...state,
        cityList: action.payload,
        error: ""
      };

    case CityActionTypes.LoadFail:
      return {
        ...state,
        cityList: [],
        error: action.payload
      };


    default:
      return state;
  }
}

// export function reducer(state, action) {
//   switch (action.type) {

//     case 'TOGGLE_PRODUCT_CODE':
//       return {
//         ...state,
//         cityList: action.payload
//       };

//     default:
//       return state;
//   }
// }