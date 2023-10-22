import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarusuarios',
  templateUrl: './agregarusuarios.page.html',
  styleUrls: ['./agregarusuarios.page.scss'],
})
export class AgregarusuariosPage {
  nuevoUsuario = {
    nombre: '',
    email: '',
    contrasena: '',
    rol: 'pasajero',
  };

  constructor(private http: HttpClient) {}

  agregarUsuario() {
    // Agregar usuario
    this.http.post('https://jsonserver-5flx.onrender.com/usuarios', this.nuevoUsuario).subscribe((response: any) => {
      console.log('Usuario agregado con éxito', response);
      this.mensajeu();
    });
  }

  mensajeu() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Usuario agregado!',
    });
  }
}
