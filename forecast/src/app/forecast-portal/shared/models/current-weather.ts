export class CurrentWeather {
  constructor(
    public name?: string,
    public country?: string,
    public condition?: string,
    public icon?: string,
    public temp?: number,
    public pressure?: number,
    public humidity?: number,
    public windSpeed?: number,
    public clouds?: number) {}
}