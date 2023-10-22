import { Component, OnInit } from '@angular/core';
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
        },
        (error) => {
          console.error('Error al tomar el viaje', error);
        }
      );
    } else {
      console.error('Campos incompletos. Por favor, completa todos los campos antes de tomar el viaje.');
    }
  }
}