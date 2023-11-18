import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {

  }
  
  login() {
    if(this.emailValue && this.passValue){
      this.AuthService.login(this.emailValue,this.passValue);
 
    }
  
  }
  
  register() {
    if(this.emailValue && this.passValue){
      this.AuthService.register(this.emailValue,this.passValue);
 
    }
  
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
}
