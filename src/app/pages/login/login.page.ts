import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonRefresher } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/firebase/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  loginForm: FormGroup;
  user: any;
  emailValue?: string;
  passValue?: string;
  langs: string[] = [];
  idioma!: string;

  constructor(
    private router: Router,
    private usuarios: UsuariosService,
    private formBuilder: FormBuilder,
    private transService: TranslateService,
    private AuthService: AuthService
  ) { 
    this.langs = this.transService.getLangs();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    // Recupera el tipo de usuario almacenado
    const userType = localStorage.getItem('userType');

    if (userType) {
      // Redirige al usuario según el tipo almacenado
      this.router.navigate([userType]);
    }
  }
  
  login() {
    if (this.emailValue && this.passValue) {
      this.AuthService.login(this.emailValue, this.passValue)
        .catch(error => {
          console.error('Error en el proceso de inicio de sesión: ', error);
        });
    }
  }
  
  register() {
    this.router.navigate(['register']);
  }

  carga() {
    Swal.fire({
      imageUrl: 'https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif',
      imageHeight: 100,
      showConfirmButton: false, // Oculta el botón "OK"
      allowOutsideClick: false, // Evita que se cierre haciendo clic afuera
      heightAuto: false
    });

    // Simula un proceso de carga (puedes reemplazarlo con tu lógica real)
    setTimeout(() => {
      Swal.close();
      // Redirige a la página 'home' después de cerrar el mensaje de carga
    }, 1500); // Cambia el tiempo de espera según tus necesidades
  }

  changeLangs(event: any){
    this.transService.use(event.detail.value);
  }
  async recoverPassword() {
    const email = this.loginForm.get('email')?.value;

    if (email) {
      try {
        await this.AuthService.recoverPassword(email);
        // Mostrar un mensaje de éxito o redirigir a una página de confirmación
        console.log('Correo de recuperación enviado con éxito');
      } catch (error) {
        // Manejar el error, mostrar un mensaje de error, etc.
        console.error('Error al enviar el correo de recuperación: ', error);
      }
    }
  }
  async showRecoverPasswordPrompt() {
    const { value: email, dismiss } = await Swal.fire({
      title: 'Recuperar Contraseña',
      input: 'email',
      inputPlaceholder: 'Ingresa tu correo electrónico',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Enviar',
      inputValidator: (value) => {
        if (!value || !value.trim()) {
          return 'Por favor, ingresa tu correo electrónico';
        }

        return undefined; // Retorna undefined cuando no hay errores
      },
      heightAuto: false, // Controla la altura de la ventana emergente
    });

    if (dismiss === Swal.DismissReason.cancel) {
      // El usuario hizo clic en Cancelar
      return;
    }

    if (email) {
      try {
        await this.AuthService.recoverPassword(email);
        Swal.fire({
          title: 'Correo de recuperación enviado con éxito',
          heightAuto: false, // Controla la altura de la ventana emergente
          icon: 'success',
        });
      } catch (error) {
        Swal.fire({
          title: 'Error al enviar el correo de recuperación',
          heightAuto: false, // Controla la altura de la ventana emergente
          icon: 'error',
        });
        console.error('Error al enviar el correo de recuperación: ', error);
      }
    }
  }
  logout() {
    this.AuthService.logout();
  }

  doRefresh(event: CustomEvent) {
    // Muestra un mensaje o indicador de recarga
    this.carga();
  
    // Simula un proceso de recarga (puedes reemplazarlo con tu lógica real)
    setTimeout(() => {
      // Cierra el indicador de recarga
      (event.target as HTMLIonRefresherElement).complete();
    }, 1500); // Cambia el tiempo de espera según tus necesidades
  }
}
