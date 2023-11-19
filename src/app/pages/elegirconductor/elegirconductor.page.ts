// Importa Angular Router
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductoresService } from 'src/app/services/conductores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-elegirconductor',
  templateUrl: './elegirconductor.page.html',
  styleUrls: ['./elegirconductor.page.scss']
})
export class ElegirconductorPage implements OnInit {
  conductores: any[] = [];

  constructor(
    private conductoresService: ConductoresService,
    private router: Router
  ) {}

  ngOnInit() {
    this.conductoresService.getConductores().subscribe((data: any[]) => {
      this.conductores = data;
    });
  }

  seleccionarConductor(conductor: any) {
    this.conductoresService.setConductorSeleccionado(conductor);
    console.log('Conductor seleccionado:', conductor);
  }

  verDetalleConductor(conductor: any) {
    if (conductor.disponible === 'si') {
      this.router.navigate(['/detalles-conductor', conductor.id]);
    }
  }

  mensajet() {
    Swal.fire({
      title: '¿Estas seguro de elegir conductor?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elegir este conductor',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.carga();
        this.router.navigate(['tomarviaje']);
      }
    });
  }

  carga() {
    Swal.fire({
      imageUrl: 'https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif',
      imageHeight: 100,
      showConfirmButton: false,
      allowOutsideClick: false,
      heightAuto: false
    });

    setTimeout(() => {
      Swal.close();
    }, 1500);
  }
}
