import { Component, OnInit } from '@angular/core';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import Swal from 'sweetalert2'

interface Viaje {
  origen: string;
  destino: string;
  fecha: string;
  hora: string; // Agregamos el campo de hora
  // ... otros campos de tu viaje
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
    fecha: '', // Inicialmente vacío
    hora: '',  // Inicialmente vacío
    // Completa con otros campos de tu viaje
  };

  constructor(private viajesTomadosService: ViajesTomadosService) { }

  ngOnInit() {
    // Inicializar la fecha y hora cuando se carga la página
    const now = new Date();
    this.viajeData.fecha = now.toISOString().split('T')[0]; // Obtener la fecha actual (YYYY-MM-DD)
    this.viajeData.hora = now.toTimeString().split(' ')[0];  // Obtener la hora actual (HH:MM:SS)
  }

  registerViajeTomado() {
    this.viajesTomadosService.createViajeTomado(this.viajeData).subscribe(response => {
      // Manejar la respuesta del servidor, si es necesario.
      this.mensajetru();
    });
  }

  mensajetru(){
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
      title: 'Viaje tomado con exito!'
    })
  }
}
