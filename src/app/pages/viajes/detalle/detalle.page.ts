import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { viajes } from '../viajes.model';
import { ViajesService } from 'src/app/services/viajes.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { __param } from 'tslib';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  viaje!: viajes;

  constructor(private viajesService: ViajesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param =>{
      const aux = param.get('id')
      if (aux){
        this.viaje = this.viajesService.getViaje(aux)
      }
      
    })
    
  }
 
}
export class mensaje{
  mostrarAlerta() {
    Swal.fire({
      title: '¡Hola!',
      text: 'Esto es una alerta de SweetAlert2.',
      icon: 'success', // Puedes cambiar el icono (success, error, warning, etc.)
      confirmButtonText: 'Aceptar'
    });
  }
}


export class ExampleComponent {
  public alertButtons = ['OK'];
}

