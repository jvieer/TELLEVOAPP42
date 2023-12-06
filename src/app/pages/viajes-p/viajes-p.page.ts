import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-viajes-p',
  templateUrl: './viajes-p.page.html',
  styleUrls: ['./viajes-p.page.scss'],
})
export default class ViajesPPage implements OnInit {
  langs: string[] = [];
  idioma!: string;
  router: any;

  constructor(private transService: TranslateService) { 
    this.langs = this.transService.getLangs();
  }

  ngOnInit() {
  }
  pasajero() {
    this.router.navigate(['viajes-p']);
  }

  changeLanguage(event: any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    localStorage.setItem('appLang', selectedLang);
  }
}
