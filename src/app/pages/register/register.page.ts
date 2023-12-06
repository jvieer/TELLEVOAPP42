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
  nombreValue: string = '';
  autoValue: string = '';
  comunaValue: string = '';
  disponibleValue: boolean = false;

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
      nombre: [''],
      auto: [''],
      comuna: [''],
      disponible: [''],
    });
  }

  ngOnInit() {}

  register() {
    if (this.passValue && this.selectedRole) {
      if (!this.emailValue) {
        this.emailValue = this.generateEmailForRole(this.selectedRole);
        this.isEmailEditable = false;
      } else {
        this.emailValue += '@' + this.getDomainForRole(this.selectedRole);
      }

      const additionalInfo = {
        nombre: this.nombreValue,
        auto: this.autoValue,
        comuna: this.comunaValue,
        disponible: this.disponibleValue,
        // Agregar otros campos según sea necesario
      };

      this.AuthService.register(this.emailValue, this.passValue, additionalInfo);

      this.emailValue = '';
      this.passValue = '';
      this.selectedRole = '';
      this.nombreValue = '';
      this.autoValue = '';
      this.comunaValue = '';
      this.disponibleValue = false;
      this.isEmailEditable = true;

      this.loginForm.reset();
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

  changeLanguage(event: any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    localStorage.setItem('appLang', selectedLang);
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
