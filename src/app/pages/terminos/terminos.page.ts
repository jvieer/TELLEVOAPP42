import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {
  terminosAceptados = false;
  ngOnInit() {
  }
  constructor(private navCtrl: NavController) { }
  aceptarTerminos() {
    // Guarda el estado de términos aceptados y luego navega a la página principal.
    // Puedes usar el NavController para la navegación.
    this.terminosAceptados = true;
    this.navCtrl.navigateRoot('/login'); 
  }
  onCheckboxChange() {
    this.terminosAceptados = !this.terminosAceptados; // Cambia el estado del checkbox
  }
  
  

}
