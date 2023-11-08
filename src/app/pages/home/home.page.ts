import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export default class HomePage {
  langs: string[]= [];
  idioma!: string;
  constructor(private router : Router,
              private transService: TranslateService) {
                this.langs = this.transService.getLangs();
              }

  login() {
    this.router.navigate(['home']);
  }
  crearviaje() {
    this.router.navigate(['viajes-c']);
  }  

  changeLangs(event:any){
    this.transService.use(event.detail.value);
  }
}
