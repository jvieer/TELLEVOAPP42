import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { viajes } from './viajes.model';
import { ViajesService } from 'src/app/services/viajes.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-easybutton';
import 'leaflet-control-geocoder';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {
  listaViajes: viajes[] = [];

  buscador: viajes[] = [];
  map: any;
  direccionInicio: string = '';
  direccionDestino: string = '';
  routingControl: any;

  constructor(
    private router: Router,
    private viajesServices: ViajesService,
  ) {}

  ngOnInit() {
    this.listaViajes = this.viajesServices.getAll();
  }

  ionViewWillEnter() {
    this.listaViajes = this.viajesServices.getAll();
  }

  listar() {
    this.listaViajes = this.viajesServices.getAll();
  }

  addViaje() {
    this.router.navigate(['/createviaje']);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  buscarViaje(event: any) {
    const texto = event.target.value;
    if (texto && texto.trim() !== '') {
      this.listaViajes = this.listaViajes.filter((aux: any) => {
        return aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) > -1;
      });
    }
  }

  ionViewDidEnter() {
    // Inicializa el mapa cuando la vista se carga completamente
    this.map = L.map('map').setView([-33.59846986791216, -70.57898785152217], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.routingControl = L.Routing.control({
      waypoints: [
        L.latLng(-33.59846986791216, -70.57898785152217), // Coordenadas de inicio
        L.latLng(-33.60121401427903, -70.57747353188937), // Coordenadas de destino
      ],
      routeWhileDragging: true,
    }).addTo(this.map);
  }

  generarRuta() {
    // Verifica si los campos de inicio y fin están vacíos
    if (!this.direccionInicio || !this.direccionDestino) {
      alert('Por favor, ingresa coordenadas de inicio y final.');
      return;
    }

    // Parsea las coordenadas ingresadas por el usuario
    const inicio = this.parseCoordenadas(this.direccionInicio);
    const fin = this.parseCoordenadas(this.direccionDestino);

    if (!inicio || !fin) {
      alert('Las coordenadas ingresadas son inválidas. Utiliza el formato "latitud, longitud".');
      return;
    }

    const coords: L.Routing.Waypoint[] = [
      {
        latLng: L.latLng(inicio),
      },
      {
        latLng: L.latLng(fin),
      },
    ];

    // Actualiza los marcadores
    this.map.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });

    // Actualiza la ruta en el mapa
    this.routingControl.setWaypoints(coords);
  }

  parseCoordenadas(coordenadas: string): [number, number] | null {
    const partes = coordenadas.split(',');
    if (partes.length === 2) {
      const lat = parseFloat(partes[0]);
      const lon = parseFloat(partes[1]);
      if (!isNaN(lat) && !isNaN(lon)) {
        return [lat, lon];
      }
    }
    return null;
  }
}
