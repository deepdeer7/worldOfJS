import { Component, OnInit, Input } from '@angular/core';

import { CurrentWeather } from '../shared/models/current-weather';

@Component({
  selector: 'forecast-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather: CurrentWeather;
  public date = new Date();

  constructor() {}

  ngOnInit() {}
}
