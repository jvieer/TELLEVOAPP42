import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'; 

@Component({
  selector: 'app-viajes-p',
  templateUrl: './viajes-p.page.html',
  styleUrls: ['./viajes-p.page.scss'],
})
export default class ViajesPPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  pasajero() {
    this.router.navigate(['viajes-p']);
  }
}
