
/* NgRx */
import { Action } from "@ngrx/store";
import { City } from '../cityList';


export enum CityActionTypes {
  Load = "[City] Load",
  LoadSuccess = "[City] Load Success",
  LoadFail = "[City] Load Fail"
}

// Action Creators

export class Load implements Action {
  readonly type = CityActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CityActionTypes.LoadSuccess;

  constructor(public payload: City[]) { }
}

export class LoadFail implements Action {
  readonly type = CityActionTypes.LoadFail;

  constructor(public payload: string) { }
}

// Union the valid types
export type CityActions = Load
  | LoadSuccess
  | LoadFail;
