// import { Injectable } from "@angular/core";

// import { Observable, of } from "rxjs";
// import { mergeMap, map, catchError } from "rxjs/operators";

// /* NgRx */
// import { Action } from "@ngrx/store";
// import { Actions, Effect, ofType } from "@ngrx/effects";
// import * as cityActions from "./city.actions";
// import { GenericServiceService } from 'src/app/shared/services/generic-service.service';
// import { env } from 'src/environments/environment-loader';

// @Injectable()

// export class CityEffects {
//   constructor(
//     private genericService: GenericServiceService,
//     private actions$: Actions
//   ) { }

//   @Effect()
//   loadProducts$: Observable<Action> = this.actions$.pipe(
//     ofType(cityActions.CityActionTypes.Load),
//     mergeMap(action =>
//       this.genericService.getServiceResponse(env.mocking ? env.cityList.getcitiesMock : env.cityList.getcities).pipe(
//         map(cities => new cityActions.LoadSuccess(cities)),
//         catchError(err => of(new cityActions.LoadFail(err)))
//       )
//     )
//   );


// }
