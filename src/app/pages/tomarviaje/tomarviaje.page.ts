// Importa Angular Router
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import Swal from 'sweetalert2';

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

  constructor(
    private viajesTomadosService: ViajesTomadosService,
    private router: Router
  ) {}

  ngOnInit() {
    const now = new Date();
    this.viajeData.fecha = now.toISOString().split('T')[0];
    this.viajeData.hora = now.toTimeString().split(' ')[0];
  }

  registerViajeTomado() {
    console.log(this.viajeData);
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
      this.router.navigate(['/viajes-p']);
    });
  }
}
