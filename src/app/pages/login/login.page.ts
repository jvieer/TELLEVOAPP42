import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export default class LoginPage implements OnInit {
  loginForm: FormGroup;
  user: any;
  emailValue?: string;
  passValue?: string;

  constructor(
    private router: Router,
    private usuarios: UsuariosService,
    private formBuilder: FormBuilder
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {
    this.usuarios.getRandomuser().subscribe((data) => {
      this.user = data.results[0];
      const randomEmailPrefix = this.user.login.username;

      // Cambiamos el dominio a conductor.com si es necesario
      this.emailValue = `${randomEmailPrefix}@example.com`;
      if (this.emailValue.endsWith('@conductor.com')) {
        this.emailValue = this.emailValue.replace('@example.com', '@conductor.com');
      }

      this.passValue = this.user.login.password;
    });
  }
  
  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (email !== null && password !== null) {
      let rol = "pasajero";

      if (email.endsWith('@conductor.com')) {
        rol = "conductor";
      }

      if (rol === "conductor") {
        
        this.router.navigate(['viajes-c']);
        this.carga();
      } else {
        this.router.navigate(['viajes-p']);
        this.carga();
      }
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
}
