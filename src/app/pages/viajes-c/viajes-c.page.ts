import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-viajes-c',
  templateUrl: './viajes-c.page.html',
  styleUrls: ['./viajes-c.page.scss'],
})
export default class ViajesCPage implements OnInit {
  langs: string[] = [];
  idioma!: string;
  router: any;

  constructor(private transService: TranslateService) {
    this.langs = this.transService.getLangs();
   }

  ngOnInit() {
  }

  conductor() {
    
    this.router.navigate(['viajes-c']);
  }

  changeLanguage(event: any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    localStorage.setItem('appLang', selectedLang);
  }
}
