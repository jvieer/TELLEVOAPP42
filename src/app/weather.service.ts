import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '0597c89f04f7275df4b738ce2731e9bf'; // Reemplaza 'TU_API_KEY' con la API key que obtuviste de OpenWeather.

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);
  }
}
