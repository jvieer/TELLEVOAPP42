import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-createviaje',
  templateUrl: './createviaje.page.html',
  styleUrls: ['./createviaje.page.scss'],
})
export default class CreateviajePage implements OnInit {
  

  constructor(
              private toastController:ToastController, 
              private alertController:AlertController,
              private viajeService: ViajesService,
              private router: Router ) { }

  ngOnInit() {
  }
  crearviaje() {
    this.router.navigate(['viajes-c']);
  }

  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom' 
    }); 
    toast.present()
  }

  deleteViaje() {
    this.mensajeToast("VIAJE ELIMINADO!")
  }

  addViaje(nombre: any,disponible: any,imagen: any,hora: any,fecha: any,comuna: any){
    this.viajeService.addViaje(nombre.value,disponible.value,imagen.value,hora.value,fecha.value,comuna.value);
    this.mensajeToast("VIAJE CREADO!")
    this.router.navigate(['/viajes']);
  }

}
