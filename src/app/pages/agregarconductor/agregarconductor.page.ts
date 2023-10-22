import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarconductor',
  templateUrl: './agregarconductor.page.html',
  styleUrls: ['./agregarconductor.page.scss'],
})
export class AgregarconductorPage {
  nuevoConductor = {
    nombre: '',
    auto: '',
    comuna: '',
    disponible: 'si',
  };

  nuevoUsuario = {
    nombre: '',
    email: '',
    contrasena: '',
    rol: 'conductor',
  };

  constructor(private http: HttpClient) {}

  agregarConductor() {
    // Agregar conductor
    this.http.post('https://jsonserver-5flx.onrender.com/conductores', this.nuevoConductor).subscribe((response: any) => {
      console.log('Conductor agregado con éxito', response);
      this.mensajea();
    });

    // Agregar usuario con "@conductor.com" agregado automáticamente
    this.nuevoUsuario.email = this.nuevoUsuario.email + '@conductor.com';
    this.http.post('https://jsonserver-5flx.onrender.com/usuarios', this.nuevoUsuario).subscribe((response: any) => {
      console.log('Usuario agregado con éxito', response);
    });
  }

  mensajea() {
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
      title: 'Conductor agregado!',
    });
  }
}
