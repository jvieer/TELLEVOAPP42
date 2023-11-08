import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core/dist/public-api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  showMenu: boolean = true; // Mostrar el menú por defecto
  
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Jugadores', url: 'jugadores', icon: 'people-circle' },
    { title: 'Equipos', url: 'equipos', icon: 'people' },
    { title: 'API', url: 'apihome', icon: 'people' },
    { title: 'Estadisticas', url: 'estadisticas', icon: 'analytics' },
    { title: 'Campeon', url: 'campeon', icon: 'medal' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];
  public appApi = [
    { title: 'Home', url: 'apihome', icon: 'home' },
    { title: 'List', url: 'apilist', icon: 'people-circle' },
    { title: 'Add', url: 'apiadd', icon: 'people' },
    { title: 'Delete', url: 'apidelete', icon: 'people' },
    { title: 'Detail', url: 'apidetail', icon: 'analytics' },
    { title: 'Update', url: 'apiupdate', icon: 'analytics' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];
  

  constructor(private router: Router,private menuController : MenuController,private transService : TranslateService){
    this.transService.setDefaultLang('fr');
    this.transService.addLangs(['es','en']);
  }
  
  mostrarMenu(){
    return this.router.url !== '/login';
  }

  mostrarMenuApi(){
    const aux = ['apihome','apiadd','apilist','apidelete','apiupdate','apidetail']
    return aux.includes(this.router.url.substring(1));
    //return this.router.url == '/apihome';
  }
 


}

  