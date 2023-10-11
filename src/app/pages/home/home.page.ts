import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export default class HomePage {

  constructor(private router : Router) {}

  login() {
    this.router.navigate(['home']);
  }
  crearviaje() {
    this.router.navigate(['viajes-c']);
  }  
}
