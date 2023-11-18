import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/firebase/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  loginForm: FormGroup;
  user: any;
  emailValue: string = '';
  passValue?: string;
  selectedRole: string = '';
  langs: string[] = [];
  idioma!: string;
  isEmailEditable: boolean = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private transService: TranslateService,
    private AuthService: AuthService
  ) { 
    this.langs = this.transService.getLangs();
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    if (this.emailValue && this.passValue) {
      this.AuthService.login(this.emailValue, this.passValue);
    }
  }
  
  register() {
    if (this.passValue && this.selectedRole) {
      if (!this.emailValue) {
        this.emailValue = this.generateEmailForRole(this.selectedRole);
        this.isEmailEditable = false;
      } else {
        // Concatenar la parte seleccionada por el usuario y el dominio
        this.emailValue += '@' + this.getDomainForRole(this.selectedRole);
      }
      
      this.AuthService.register(this.emailValue, this.passValue);
    }
  }

  carga() {
    Swal.fire({
      imageUrl: 'https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif',
      imageHeight: 100,
      showConfirmButton: false,
      allowOutsideClick: false,
      heightAuto: false
    });

    setTimeout(() => {
      Swal.close();
    }, 1500);
  }

  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }

  generateEmailForRole(role: string): string {
    if (role === 'pasajero') {
      return 'pasajero';
    } else if (role === 'conductor') {
      return 'conductor';
    }
    return '';
  }

  getDomainForRole(role: string): string {
    return role === 'pasajero' ? 'gmail.com' : (role === 'conductor' ? 'conductor.com' : '');
  }

  updateEmail() {
    if (!this.isEmailEditable) {
      this.emailValue = this.generateEmailForRole(this.selectedRole);
    }
  }
}
