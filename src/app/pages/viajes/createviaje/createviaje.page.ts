import { Component, OnInit } from '@angular/core';
import { ViajesTomadosService } from 'src/app/viajestomados.service';


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
      // Si deseas desmarcarlo después de tomarlo, puedes hacerlo aquí
      this.viajeSeleccionado = null;
    } else {
      // Muestra un mensaje de error o notificación si no se seleccionó ningún viaje.
      console.log('Selecciona un viaje antes de tomarlo');
    }
  }
}






