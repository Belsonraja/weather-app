import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiBaseUrl = 'https://openweather43.p.rapidapi.com/weather';
  XRapidAPIHostHeaderName = 'X-RapidAPI-Host';
  XRapidAPIHostHeaderValue = 'openweather43.p.rapidapi.com';
  XRapidAPIKeyHeaderName = 'X-RapidAPI-Key';
  XRapidAPIKeyHeaderValue = '93e01aed82mshf3c550f34a5793bp148eb7jsn6bea8480af56';
  appId = 'da0f9c8d90bde7e619c3ec47766a42f4';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('appid', this.appId)
      .set('units', 'metric')
      .set('lang', 'en')
    })
  }
}
