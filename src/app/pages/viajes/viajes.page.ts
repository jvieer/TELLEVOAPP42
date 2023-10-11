import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { viajes } from './viajes.model';
import { ViajesService } from 'src/app/services/viajes.service'; 
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  listaViajes: viajes[] = [];

  buscador: viajes[] = [];

  

  constructor(
              private router: Router,
              private viajesServices: ViajesService) { }

  

  ngOnInit() {
    this.listaViajes = this.viajesServices.getAll();
    
  }

  ionViewWillEnter(){
    this.listaViajes = this.viajesServices.getAll()
  }

  listar(){
    this.listaViajes = this.viajesServices.getAll()
  }

  addViaje(){
    this.router.navigate(['/createviaje']);
  }

  handleRefresh(event: any){
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);

  }

  buscarViaje(event: any){
    const texto = event.target.value;
    if ( texto && texto.trim() != '' ){
      this.listaViajes = this.listaViajes.filter((aux: any) => {
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >-1 );
      })
    }
  }

}

