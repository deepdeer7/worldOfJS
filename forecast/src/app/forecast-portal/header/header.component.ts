import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

import { CurrentWeather } from '../shared/models/current-weather';

@Component({
  selector: 'forecast-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() currentWeather: CurrentWeather;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {}

  public enterCityName(name: string) {
    this.sharedService.enterName(name);
  }
}

