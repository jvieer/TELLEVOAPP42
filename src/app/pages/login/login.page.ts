import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

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
      } else {
        this.router.navigate(['viajes-p']);
      }
    }
  }
}
