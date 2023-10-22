import { Component, OnInit } from '@angular/core';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

interface Viaje {
  fecha: string;
  hora: string;
  // Agrega otros campos de tu viaje
}

@Component({
  selector: 'app-tomarviaje',
  templateUrl: './tomarviaje.page.html',
  styleUrls: ['./tomarviaje.page.scss'],
})
export class TomarviajePage implements OnInit {
  viajeData: Viaje = {
    fecha: '',
    hora: '',
    // Completa con otros campos de tu viaje
  };
    router: any;

  constructor(private viajesTomadosService: ViajesTomadosService) {}

  ngOnInit() {
    // Inicializar la fecha y hora cuando se carga la página
    const now = new Date();
    this.viajeData.fecha = now.toISOString().split('T')[0]; // Obtener la fecha actual (YYYY-MM-DD)
    this.viajeData.hora = now.toTimeString().split(' ')[0];  // Obtener la hora actual (HH:MM:SS)
  }

  registerViajeTomado() {
    console.log(this.viajeData); // Agrega este log para verificar el contenido de viajeData
    if (this.viajeData.fecha.trim() !== '' && this.viajeData.hora.trim() !== '') {
      this.viajesTomadosService.createViajeTomado(this.viajeData).subscribe(
        (response) => {
          console.log('Viaje tomado con éxito', response);
          this.mensajer();
        },
        (error) => {
          console.error('Error al tomar el viaje', error);
        }
      );
    } else {
      console.error('Campos incompletos. Por favor, completa todos los campos antes de tomar el viaje.');
    }
  }



  mensajer() {
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
      title: '¡Viaje tomado!'
    }).then(() => {
      // Redirigir al usuario a la página de inicio (home)
      this.router.navigate(['/viajes-p']);
    });
  }
  
}