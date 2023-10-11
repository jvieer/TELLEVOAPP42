import { Component, OnInit } from '@angular/core';

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
