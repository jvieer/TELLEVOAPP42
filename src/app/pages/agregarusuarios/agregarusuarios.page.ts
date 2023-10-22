import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-agregarusuarios',
  templateUrl: './agregarusuarios.page.html',
  styleUrls: ['./agregarusuarios.page.scss'],
})
export class AgregarusuariosPage implements OnInit {
  nuevoUsuario = {
    nombre: '',
    email: '',
    contrasena: '',
    rol: 'conductor',
  };
  constructor(private http: HttpClient) { }

  agregarUsuario() {
    this.http.post('https://jsonserver-5flx.onrender.com/usuarios', this.nuevoUsuario)
      .subscribe((response) => {
        console.log('Usuario agregado con éxito', response);
        this.mensajeu();
      });
  }

  mensajeu(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Usuario agregado!'
    })
  }


  ngOnInit() {
  }

}
