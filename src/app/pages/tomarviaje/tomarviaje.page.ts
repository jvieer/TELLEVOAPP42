import { Component, OnInit } from '@angular/core';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import Swal from 'sweetalert2';

interface Viaje {
  origen: string;
  destino: string;
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
    origen: '',
    destino: '',
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
    // Validación: Asegúrate de que todos los campos estén llenos antes de guardar el viaje
    if (this.viajeData.origen && this.viajeData.destino && this.viajeData.fecha && this.viajeData.hora) {
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
