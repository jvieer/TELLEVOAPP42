import { Component, OnInit } from '@angular/core';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-misviajes',
  templateUrl: './misviajes.page.html',
  styleUrls: ['./misviajes.page.scss'],
})

export class MisviajesPage implements OnInit {
  misViajes: any[] = [];

  constructor(private viajesTomadosService: ViajesTomadosService) {}

  ngOnInit() {
    this.loadMisViajes();
  }

  async loadMisViajes() {
    this.viajesTomadosService.getViajesTomados().subscribe(
      data => {
        console.log('Datos recibidos:', data);
        this.misViajes = data || [];
      },
      error => {
        console.error('Error al cargar los viajes tomados', error);
      }
    );
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
