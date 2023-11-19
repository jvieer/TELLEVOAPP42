import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { viajes } from '../viajes.model';
import { ViajesService } from 'src/app/services/viajes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  viaje: viajes | undefined;
  private subscription: Subscription | undefined;

  constructor(private viajesService: ViajesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap.subscribe((param) => {
      const aux = param.get('id');
      if (aux) {
        this.subscription = this.viajesService.getViaje(aux).subscribe((viaje) => {
          this.viaje = viaje;
        });
      }
    });
  }

  ngOnDestroy() {
    // Asegúrate de desuscribirte para evitar posibles problemas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
