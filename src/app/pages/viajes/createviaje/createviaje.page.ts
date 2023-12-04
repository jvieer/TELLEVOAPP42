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

  constructor(private viajesService: ViajesTomadosService, private router: Router) {}

  ngOnInit() {
    this.loadViajes();
  }

  loadViajes() {
    this.viajesService.getViajesTomados().subscribe((data) => {
      console.log('Viajes cargados:', data);
      this.viajes = data.sort((a, b) => {
        const fechaHoraA = new Date(`${a.fecha} ${a.hora}`);
        const fechaHoraB = new Date(`${b.fecha} ${b.hora}`);
        return fechaHoraA.getTime() - fechaHoraB.getTime();
      });
    });
  }

  tomarViajes() {
    const viajesSeleccionados = this.viajes.filter(viaje => viaje.selected);
  
    if (viajesSeleccionados.length > 0) {
      console.log('Viajes seleccionados:', viajesSeleccionados);
      console.log('IDs de los viajes seleccionados:', viajesSeleccionados.map(viaje => viaje.id));
  
      // Realiza acciones adicionales según los viajes seleccionados
      // ...
  
      // Reinicia la selección después de tomar los viajes
      this.viajes.forEach(viaje => (viaje.selected = false));
  
      // Puedes redirigir a la página de generar QR aquí
      this.router.navigate(['generarqr']);
      this.mensaje();
    } else {
      console.log('Selecciona al menos un viaje antes de tomarlos');
    }
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
  }

  doRefresh(event: CustomEvent) {
    this.carga();

    setTimeout(() => {
      (event.target as HTMLIonRefresherElement).complete();
    }, 1500);
  }

  carga() {
    Swal.fire({
      imageUrl: 'https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif',
      imageHeight: 100,
      showConfirmButton: false,
      allowOutsideClick: false,
      heightAuto: false,
    });

    setTimeout(() => {
      this.resetearCampos();
      Swal.close();
    }, 1500);
  }

  resetearCampos() {
    this.viajes.forEach(viaje => (viaje.selected = false));
  }
}
