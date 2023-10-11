import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-viajes-conductor',
  templateUrl: './viajes-conductor.page.html',
  styleUrls: ['./viajes-conductor.page.scss'],
})
export class ViajesConductorPage implements OnInit {


  constructor(  private toastController:ToastController, 
                private alertController:AlertController,
                private viajeService: ViajesService,
                private router: Router) { }

  ngOnInit() {
  }
  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom' 
    }); 
    toast.present()
  }

  async deleteViaje() {
    const alerta = await this.alertController.create({
      header: 'Eliminar viaje',
      message: '¿Estas seguro que desea eliminar este viaje?',
      buttons: [
        {
          text: 'Elimina',
          handler: () => {
            this.mensajeToast("VIAJE ELIMINADO!");
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.mensajeToast("ACCION CANCELADA");
          }
        }
      ]

    })
    await alerta.present();
    let resultado = await alerta.onDidDismiss();
  }


}
