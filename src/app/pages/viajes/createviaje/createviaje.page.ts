import { Component, OnInit } from '@angular/core';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-createviaje',
  templateUrl: './createviaje.page.html',
  styleUrls: ['./createviaje.page.scss'],
})
export class CreateViajePage implements OnInit {
  viajes: any[] = [];
  viajeSeleccionado: number | null = null; // Inicializado como null

  constructor(private viajesService: ViajesTomadosService) {}

  ngOnInit() {
    this.loadViajes();
  }

  loadViajes() {
    this.viajesService.getViajesTomados().subscribe((data) => {
      this.viajes = data;
    });
  }

  tomarViaje() {
    if (this.viajeSeleccionado !== null) {
      // Implementa la lógica para "tomar" el viaje seleccionado
      console.log(`Viaje seleccionado: ${this.viajeSeleccionado}`);
    
      this.viajeSeleccionado = null;
    } else {
      // Muestra un mensaje de error o notificación si no se seleccionó ningún viaje.
      console.log('Selecciona un viaje antes de tomarlo');
    }
  }

  mensajec() {
    Swal.fire({
      title: '¿Estás seguro de tomar este viaje?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, tomar',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.tomarViaje();
        window.location.href = 'viajes-c';
        this.mensaje();

      }
    });
  }

  mensaje(){
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
      title: 'Viaje tomado!'
    })
  }
}






