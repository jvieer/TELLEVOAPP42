import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes-c',
  templateUrl: './viajes-c.page.html',
  styleUrls: ['./viajes-c.page.scss'],
})
export default class ViajesCPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }

  conductor() {
    this.router.navigate(['viajes-c']);
  }
}
