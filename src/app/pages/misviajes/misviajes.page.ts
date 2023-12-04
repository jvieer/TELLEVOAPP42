import { Component, OnInit } from '@angular/core';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/firebase/auth.service';


@Component({
  selector: 'app-misviajes',
  templateUrl: './misviajes.page.html',
  styleUrls: ['./misviajes.page.scss'],
})

export class MisviajesPage implements OnInit {
  misViajes: any[] = [];

  constructor(
    private viajesTomadosService: ViajesTomadosService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadMisViajes();
  }

  async loadMisViajes() {
    try {
      // Obtén el UID del usuario actual
      const userId = await this.authService.getCurrentUserId();

      if (userId) {
        // Llama al servicio para obtener solo los viajes del usuario actual
        this.viajesTomadosService.getViajesTomadosByUserId(userId).subscribe(
          data => {
            console.log('Datos recibidos:', data);
            this.misViajes = data || [];
          },
          error => {
            console.error('Error al cargar los viajes tomados', error);
          }
        );
      } else {
        console.error('No se pudo obtener el UID del usuario');
      }
    } catch (error) {
      console.error('Error al obtener el UID del usuario', error);
    }
  }

  async eliminarViaje(id: string) {
    try {
      await this.viajesTomadosService.eliminarViaje(id);
      // Viaje eliminado exitosamente, actualiza la lista de misViajes
      await this.loadMisViajes();
    } catch (error) {
      console.error('Error al eliminar el viaje', error);
    }
  }

  mensajedelete(id: string) {
    Swal.fire({
      title: '¿Estás seguro de eliminar este viaje?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarViaje(id);
      }
    });
  }
}
