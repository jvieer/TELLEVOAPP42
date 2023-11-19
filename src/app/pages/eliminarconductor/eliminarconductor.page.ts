import { Component, OnInit } from '@angular/core';
import { ConductoresService } from 'src/app/services/conductores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminarconductor',
  templateUrl: './eliminarconductor.page.html',
  styleUrls: ['./eliminarconductor.page.scss'],
})
export class EliminarconductorPage implements OnInit {
  conductores: any[] = [];

  constructor(private conductoresService: ConductoresService) {}

  ngOnInit() {
    this.conductoresService.getConductores().subscribe((data: any) => {
      this.conductores = data;
    });
  }

  async eliminarConductor(conductorId: number) {
    const conductorIdString = conductorId.toString(); // Convertir a string

    try {
      await this.conductoresService.eliminarConductor(conductorIdString);
      // Si la eliminación en el servidor es exitosa, elimina el elemento del array
      const index = this.conductores.findIndex((conductor) => conductor.id === conductorId);
      if (index !== -1) {
        this.conductores.splice(index, 1);
      }

      this.mensajeee();
    } catch (error) {
      console.error('Error al eliminar conductor:', error);
      // Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
    }
  }

  mensajee(id: number) {
    Swal.fire({
      title: '¿Estás seguro de eliminar este conductor?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarConductor(id);
      }
    });
  }

  mensajeee() {
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
      title: 'Conductor eliminado!',
    });
  }
}
