import { Component, OnInit } from '@angular/core';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createviaje',
  templateUrl: './createviaje.page.html',
  styleUrls: ['./createviaje.page.scss'],
})
export class CreateViajePage implements OnInit {
  viajes: any[] = [];
  viajeSeleccionado: number | null = null; // Inicializado como null

  constructor(private viajesService: ViajesTomadosService, private router: Router) {}

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

      // Realiza acciones adicionales según el viaje seleccionado
      // ...

      this.viajeSeleccionado = null; // Reinicia la selección después de tomar el viaje
    } else {
      console.log('Selecciona un viaje antes de tomarlo');
    }
  }

  selectViaje(event: any, viajeId: number) {
    if (this.viajeSeleccionado === viajeId) {
      // Desmarca la opción si ya está seleccionada
      this.viajeSeleccionado = null;
    } else {
      // Marca la opción seleccionada
      this.viajeSeleccionado = viajeId;
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
        // Redirige al usuario a la página "generarqr" después de tomar el viaje
        this.router.navigate(['generarqr']);
        this.mensaje();
      }
    });
  }

  mensaje() {
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
      title: 'Viaje tomado!',
    });
  }
}
