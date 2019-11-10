import { NgModule } from '@angular/core';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { SelectCityComponent } from './select-city/select-city.component';
import { DropDownListComponent } from '../common/atom/drop-down-list/drop-down-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { reducer } from './state/city.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CityEffects } from './state/city.effects';


@NgModule({
  imports: [BrowserModule,
    StoreModule.forFeature('cities', reducer),
    // EffectsModule.forFeature(
    //   [CityEffects]
    // ),
  ],
  declarations: [
    DropDownListComponent,
    SelectCityComponent
  ],
  exports: [DropDownListComponent,
    SelectCityComponent, BrowserModule]
})
export class CityModule { }
