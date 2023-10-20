// elegir-conductor.page.ts
import { Component, OnInit } from '@angular/core';
import { ConductoresService } from 'src/app/services/conductores.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-elegirconductor',
  templateUrl: './elegirconductor.page.html',
  styleUrls: ['./elegirconductor.page.scss']
})
export class ElegirconductorPage implements OnInit {
  conductores: any[] = [];

  constructor(private conductoresService: ConductoresService, private router: Router) {}

  ngOnInit() {
    this.conductoresService.getConductores().subscribe((data: any[]) => {
      this.conductores = data;
    });
  }

  verDetalleConductor(conductor: any) {
    if (conductor.disponible === 'si') {
      this.router.navigate(['/detalles-conductor', conductor.id]);
    }
  }


  mensajet() {
    Swal.fire({
      title: '¿Estas seguro elegir conductor?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elegir este conductor',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario ha confirmado, navega a la página "elegirconductor".
        this.router.navigate(['tomarviaje']);
      }
    });
  }


  
}
