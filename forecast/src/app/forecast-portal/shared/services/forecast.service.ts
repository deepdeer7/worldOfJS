import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { CurrentWeather } from '../models/current-weather';
import { WeatherInfo } from '../models/weather-info';

@Injectable()
export class ForecastService {
  constructor(private http: HttpClient) { }

  public getCurrentWeatherByCity(cityName: string) {
    const currentWeatherURL: string = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=6faba59474ebc938074c30e6acd2aff1`;
    return this.http.get(currentWeatherURL)
      .map((res: any) => new CurrentWeather(res.name,
                                            res.sys.country,
                                            res.weather[0].main,
                                            res.weather[0].icon,
                                            res.main.temp,
                                            res.main.pressure,
                                            res.main.humidity,
                                            res.wind.speed,
                                            res.clouds.all)); 
  }

  private formatDate(miliseconds: number): string {
    const date = new Date(miliseconds * 1000),
      locale = "en-us",
      month = date.toLocaleString(locale, { month: "short" }),
      dateOfMonth = date.getDate(),
      nameOfDate = `${dateOfMonth} ${month}`;

    return nameOfDate;
  }

  public getSixteenDaysForecastTemperatureByCity(cityName: string) {
    const listOfTemperatures: WeatherInfo[] = [],
      sixteenDaysForecastTemperatureURL: string = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=16&APPID=edb941c294b159c0267b5ff08891bd23`;
    return this.http.get(sixteenDaysForecastTemperatureURL)
      .map((res: any) => {
        res.list.forEach((el) => {
          const date = this.formatDate(el.dt);
          listOfTemperatures.push(new WeatherInfo(date, el.temp.day));
        });

        return listOfTemperatures;
      });   
  }

  public getSixteenDaysForecastWindByCity(cityName: string) {
    const listOfWinds: WeatherInfo[] = [],
      sixteenDaysForecastWindURL: string = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=16&APPID=edb941c294b159c0267b5ff08891bd23`;
    return this.http.get(sixteenDaysForecastWindURL)
      .map((res: any) => {
        res.list.forEach((el) => {
          const date = this.formatDate(el.dt);
          listOfWinds.push(new WeatherInfo(date, el.speed));
        });

        return listOfWinds;
      });    
  }

  public getSixteenDaysForecastPressureByCity(cityName: string) {
    const listOfPressures: WeatherInfo[] = [],
      dixteenDaysDorecastPressureURL: string = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=16&APPID=edb941c294b159c0267b5ff08891bd23`;
    return this.http.get(dixteenDaysDorecastPressureURL)
      .map((res: any) => {
        res.list.forEach((el) => {
          const date = this.formatDate(el.dt);
          listOfPressures.push(new WeatherInfo(date, el.pressure));
        });
        return listOfPressures;
      });    
  }

  public getSixteenDaysForecastHumidityByCity(cityName: string) {
    const listOfHumidities: WeatherInfo[] = [],
      sixteenDaysForecastHunidityURL: string = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=16&APPID=edb941c294b159c0267b5ff08891bd23`;
    return this.http.get(sixteenDaysForecastHunidityURL)
      .map((res: any) => {
        res.list.forEach((el) => {
          const date = this.formatDate(el.dt);
          listOfHumidities.push(new WeatherInfo(date, el.humidity));
        });
        return listOfHumidities;
      });    
  }
}



