import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ForecastPortalComponent } from './forecast-portal.component';
import { HeaderComponent } from './header/header.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { SixteenDaysComponent } from './sixteen-days/sixteen-days.component';

import { ForecastService } from './shared/services/forecast.service';
import { SharedService } from './shared/services/shared.service';
import { HistogramComponent } from './histogram/histogram.component';


@NgModule({
  declarations: [
    ForecastPortalComponent,
    HeaderComponent,
    CurrentWeatherComponent,
    SixteenDaysComponent,
    HistogramComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule 
  ],
  providers: [
    ForecastService,
    SharedService
  ],
  exports: [
    ForecastPortalComponent 
  ]
})
export class ForecastPortalModule { }

