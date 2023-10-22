import { Component, OnInit } from '@angular/core';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-misviajes',
  templateUrl: './misviajes.page.html',
  styleUrls: ['./misviajes.page.scss'],
})
export class MisviajesPage implements OnInit {
  misViajes: any[] = []; // Inicializado como un arreglo vacío

  constructor(private viajesTomadosService: ViajesTomadosService) {}

  ngOnInit() {
    this.viajesTomadosService.getViajesTomados().subscribe((data: any) => {
      this.misViajes = data;
    });
  }

  loadMisViajes() {
    this.viajesTomadosService.getViajesTomados().subscribe((data: any) => {
      this.misViajes = data;
    });
  }

  eliminarViaje(id: number) {
    this.viajesTomadosService.eliminarViaje(id).subscribe(() => {
      // Viaje eliminado exitosamente, actualiza la lista de misViajes
      this.loadMisViajes();
    });
  }

  mensajedelete(id: number) {
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
