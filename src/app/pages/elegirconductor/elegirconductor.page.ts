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
        this.carga();
        this.router.navigate(['tomarviaje']);
      }
    });
  }

  carga() {
    Swal.fire({
      imageUrl: 'https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif',
      imageHeight: 100,
      showConfirmButton: false, // Oculta el botón "OK"
      allowOutsideClick: false, // Evita que se cierre haciendo clic afuera
      heightAuto: false
    });
  
    // Simula un proceso de carga (puedes reemplazarlo con tu lógica real)
    setTimeout(() => {
      Swal.close();
      // Redirige a la página 'home' después de cerrar el mensaje de carga
    }, 1500); // Cambia el tiempo de espera según tus necesidades
  }

  
}
