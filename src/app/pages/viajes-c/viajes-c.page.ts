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

  changeLangs(event: any){
    this.transService.use(event.detail.value);
  }

}
