import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-agregarconductor',
  templateUrl: './agregarconductor.page.html',
  styleUrls: ['./agregarconductor.page.scss'],
})
export class AgregarconductorPage implements OnInit {
  nuevoConductor = {
    nombre: '',
    auto: '',
    comuna: '',
    disponible: 'si',
  };
  constructor( private http: HttpClient ) { }
  agregarConductor() {
    this.http.post('https://jsonserver-5flx.onrender.com/conductores', this.nuevoConductor)
      .subscribe((response: any) => {
        console.log('Conductor agregado con éxito', response);
        this.mensajea();
      });
  }

  mensajea(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Conductor agregado!'
    })
  }

  ngOnInit() {
  }

}
