import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { httpInterceptorProviders } from "./shared/Interceptors";
import { SelectCityComponent } from "./cityListComponents/select-city/select-city.component";
import { PageNotFoundComponent } from "./common/organism/page-not-found/page-not-found.component";
import { DropDownListComponent } from "./common/atom/drop-down-list/drop-down-list.component";
import { HomeComponent } from "./home/home.component";
import { WeatherDetailsComponent } from "./WeatherComponents/weather-details/weather-details.component";
import { RadioButtonComponent } from "./common/atom/radio-button/radio-button.component";
import { WeatherDetailsListComponent } from "./WeatherComponents/weather-details-list/weather-details-list.component";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { CityModule } from './cityListComponents/city.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    WeatherDetailsComponent,
    WeatherDetailsListComponent,
    RadioButtonComponent,
    WeatherDetailsListComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: "AngularWeatherApp",
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    CityModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
