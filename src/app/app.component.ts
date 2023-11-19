import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/firebase/auth.service';

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
  

  constructor(private authService: AuthService,private router: Router,private menuController : MenuController,private transService : TranslateService){
    this.transService.setDefaultLang('es');
    this.transService.addLangs(['fr','en','ja']);
  }
  
  mostrarMenu(){
    return this.router.url !== '/login';
  }

  mostrarMenuApi(){
    const aux = ['apihome','apiadd','apilist','apidelete','apiupdate','apidetail']
    return aux.includes(this.router.url.substring(1));
    //return this.router.url == '/apihome';
  }
 
  redirigirSegunUsuario() {
    // Aquí deberías obtener el usuario actual, puedes usar el servicio de autenticación
    const user = this.authService.getCurrentUserId();

    // Llamas a la función para redirigir según el tipo de usuario
    this.authService.handleUserRedirect(user);
  }
  logout() {
    this.authService.logout();
  }
}

  