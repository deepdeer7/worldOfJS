import { Component, OnInit, OnDestroy } from '@angular/core';
import { ForecastService } from './shared/services/forecast.service';
import { SharedService } from './shared/services/shared.service';

import { CurrentWeather } from './shared/models/current-weather';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'forecast-portal',
  templateUrl: './forecast-portal.component.html',
  styleUrls: ['./forecast-portal.component.scss']
})
export class ForecastPortalComponent implements OnInit {
  public currentWeather: CurrentWeather;
  private cityName: string = 'London';
  private subscription: Subscription;

  constructor(
    private sharedService: SharedService,
    private forecastService: ForecastService) { }

  ngOnInit() {
    this.getCurrentWeatherInfoByCity();
    this.updateCurrentCity();
  }

  private getCurrentWeatherInfoByCity() {
    this.forecastService.getCurrentWeatherByCity(this.cityName)
      .subscribe((currentWeather: CurrentWeather) => this.currentWeather = currentWeather);
  }

  private updateCurrentCity() {
    this.subscription = this.sharedService.nameEntered$.
      subscribe((name) => {
        this.cityName = name; 
        this.getCurrentWeatherInfoByCity();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
