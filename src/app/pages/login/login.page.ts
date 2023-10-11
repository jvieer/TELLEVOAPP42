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
  toggleValue: boolean = false;
  navCtrl: any;
  //declaracion
  loginForm: FormGroup //para validar el formulario
  user: any //para obtener el usuario
  emailValue?: string //para obtener el email del usuario
  passValue?: String //para obtener la contra del usuario

  constructor(
    private router : Router, 
    private usuarios : UsuariosService,
    private formBuilder: FormBuilder
    ) { 
      this.loginForm = this.formBuilder.group({
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]],
      })
    }

  ngOnInit() {
    this.usuarios.getRandomuser().subscribe(
      (data) => {
        //console.log(data)
        this.user = data.results[0]
        this.emailValue = this.user.email
        this.passValue = this.user.login.password

      })
  }

  
login() {
    this.router.navigate(['home']);
  }

conductor() {
    this.router.navigate(['viajes-c']);
  }
pasajero() {
    this.router.navigate(['viajes-p']);
  }


}
