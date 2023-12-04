import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/firebase/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu: boolean = true;


  constructor(
    private authService: AuthService,
    private router: Router,
    private menuController: MenuController,
    private transService: TranslateService
  ) {
    this.transService.setDefaultLang('es');
    this.transService.addLangs(['fr', 'en', 'ja']);

    // Escucha los cambios de la ruta para determinar si mostrar o no el menú
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = this.shouldShowMenu(event.urlAfterRedirects || '');
      }
    });
  }

  shouldShowMenu(url: string): boolean {
    // Define las rutas en las que deseas mostrar el menú
    const menuRoutes = [
      '/home', 
      '/perfil', 
      '/api', 
      '/confirmacion', 
      '/detalleusuarios', 
      '/elegirconductor', 
      '/eliminarconductor', 
      '/elimusuarios', 
      '/escanearqr', 
      '/generarqr', 
      '/agregar', 
      '/agregarconductor', 
      '/agregarusuarios', 
      '/misviajes', 
      '/registro-c', 
      '/seguimiento',  
      '/tomarviaje', 
      '/usuarios20', 
      '/viajes', 
      '/viajes-c', 
      '/viajes-p',
      '/register',
      '/login' ,
      '/createviaje'
    ];

    // Verifica si la ruta actual está en la lista de rutas de menú
    return menuRoutes.some((route) => url.startsWith(route));
  }

  redirigirSegunUsuario() {
    const user = this.authService.getCurrentUserId();
    this.authService.handleUserRedirect(user);
  }

  logout() {
    this.authService.logout();
  }

  // Método para resetear el formulario de inicio de sesión

  goToUserTypePage() {
    const userType = localStorage.getItem('userType');
    if (userType) {
      this.router.navigate([userType]);
    } else {
      console.error('Tipo de usuario no almacenado en el localStorage');
    }
  }
}
