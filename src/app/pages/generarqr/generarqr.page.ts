import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {
  langs: string[] = [];
  idioma!: string;
  texto:any;
  constructor(private transService: TranslateService) {
    this.langs = this.transService.getLangs();
   }

  ngOnInit() {
  }
  changeLanguage(event: any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    localStorage.setItem('appLang', selectedLang);
  }

}
