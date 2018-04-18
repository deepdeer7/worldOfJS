import { Component, OnInit, Input, ViewEncapsulation,
 OnDestroy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

import { ForecastService } from '../shared/services/forecast.service';
import { SharedService } from '../shared/services/shared.service';

import { CurrentWeather } from '../shared/models/current-weather';
import { WeatherInfo } from '../shared/models/weather-info';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'forecast-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HistogramComponent implements OnInit, OnChanges {
  private data: WeatherInfo[];
  private cityName: string = 'London';
  private subscription: Subscription;
  @Input() state: string;

  constructor(
    private forecastService: ForecastService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.getSixteenDaysForecastTemperatureByCity();
    this.updateCurrentCity();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changeForecastData();
  }

  private changeForecastData() {
    switch (this.state) {
      case 'wind':
        this.getSixteenDaysForecastWindByCity();
        break;
      case 'humidity':
        this.getSixteenDaysForecastHumidityByCity();
        break;
      case 'pressure':
        this.getSixteenDaysForecastPressureByCity();
        break;
        
      // histogram with temperature is default
      default:
        this.getSixteenDaysForecastTemperatureByCity();
        break;
    }
  }

  private getSixteenDaysForecastWindByCity() {
    this.forecastService.getSixteenDaysForecastWindByCity(this.cityName)
      .subscribe((sixteenDaysForecast: any) => {
        this.data = sixteenDaysForecast;
        this.createChart();
    });
  }

  private getSixteenDaysForecastPressureByCity() {
    this.forecastService.getSixteenDaysForecastPressureByCity(this.cityName)
      .subscribe((sixteenDaysForecast: any) => {
        this.data = sixteenDaysForecast;
        this.createChart();
    });
  }

  private getSixteenDaysForecastHumidityByCity() {
    this.forecastService.getSixteenDaysForecastHumidityByCity(this.cityName)
      .subscribe((sixteenDaysForecast: any) => {
        this.data = sixteenDaysForecast;
        this.createChart();
    });
  }

  private getSixteenDaysForecastTemperatureByCity() {
    this.forecastService.getSixteenDaysForecastTemperatureByCity(this.cityName)
      .subscribe((sixteenDaysForecast: any) => {
        this.data = sixteenDaysForecast;
        this.createChart();
      });
  }

  private updateCurrentCity() {
    this.subscription = this.sharedService.nameEntered$.
      subscribe((name) => {
        this.cityName = name; 
        this.getSixteenDaysForecastTemperatureByCity();
    });
  }

  private createChart() {
    d3.select("svg").remove().exit();

    const margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 1400 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    const x = d3.scaleBand()
              .range([0, width])
              .padding(0.1);

    const y = d3.scaleLinear()
              .range([height, 0]);
          
    const svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", 
        "translate(" + margin.left + "," + margin.top + ")");

    x.domain(this.data.map((d) => { return d.date; }));
    y.domain([d3.min(this.data, (d) => { return d.value; }) - 1,
      d3.max(this.data, (d) => { return d.value; })]);


    svg.selectAll(".bar")
      .data(this.data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", (d) => { return x(d.date); })
      .attr("width", x.bandwidth()) 
      .attr("y", (d) => { return y(d.value); })
      .attr("height", (d) => { return height - y(d.value); });

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g")
      .call(d3.axisLeft(y));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  } 
}