import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { viajes } from './viajes.model';
import { ViajesService } from 'src/app/services/viajes.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-easybutton';
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

              map: any;
              direccionInicio: string = '';
              direccionDestino: string = '';

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
  ionViewDidEnter() {
    // Inicializa el mapa cuando la vista se carga completamente
    const map = L.map('map').setView([-33.59846986791216, -70.57898785152217], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // Agregar un marcador al mapa //const marker = L.marker([-33.59846986791216, -70.57898785152217]).addTo(map);
    

    // Puedes agregar un pop-up al marcador si lo deseas //marker.bindPopup('¡Mi marcador personalizado!').openPopup();
    
    const control = L.Routing.control({
      waypoints: [
        L.latLng(-33.59846986791216, -70.57898785152217), // Coordenadas de inicio
        L.latLng(-33.60121401427903, -70.57747353188937) // Coordenadas de destino
      ],
      routeWhileDragging: true
    }).addTo(map);
    
  }
  generarRuta() {
    // Usa las direcciones almacenadas en this.direccionInicio y this.direccionDestino
    // Convierte las direcciones en coordenadas utilizando un servicio de geocodificación
    // Luego, calcula y muestra la ruta en el mapa
  }
}

