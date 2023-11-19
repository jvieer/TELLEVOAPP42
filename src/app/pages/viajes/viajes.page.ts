import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { viajes } from './viajes.model';
import { ViajesService } from 'src/app/services/viajes.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-easybutton';
import 'leaflet-control-geocoder';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

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
  openCageApiKey: string = 'b5ce420a751f401ea700aca466850f93';
  constructor(
    private router: Router,
    private viajesServices: ViajesService,
    private http: HttpClient
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

  async buscarViaje(event: any) {
    const texto = event.target.value;
    if (texto && texto.trim() !== '') {
      this.listaViajes = this.listaViajes.filter((aux: any) => {
        return aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) > -1;
      });
    }
  }

  async buscarDireccion(direccion: string) {
    const response: any = await this.http
      .get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(direccion)}&key=${this.openCageApiKey}`)
      .toPromise();

    if (response.results.length > 0) {
      const result = response.results[0];
      return {
        lat: result.geometry.lat,
        lon: result.geometry.lng,
        address: result.formatted,
      };
    } else {
      return null;
    }
  }

  ionViewDidEnter() {
    this.map = L.map('map').setView([-33.59846986791216, -70.57898785152217], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.routingControl = L.Routing.control({
      waypoints: [],
      routeWhileDragging: true,
    }).addTo(this.map);

    this.direccionDestino = ''; // Limpiar dirección destino al cargar la página
  }

  async generarRuta() {
    if (!this.direccionInicio || !this.direccionDestino) {
      alert('Por favor, ingresa direcciones de inicio y final.');
      return;
    }

    const inicio = await this.buscarDireccion(this.direccionInicio);
    const fin = await this.buscarDireccion(this.direccionDestino);

    if (inicio && fin) {
      const coords: L.Routing.Waypoint[] = [
        {
          latLng: L.latLng(inicio.lat, inicio.lon),
        },
        {
          latLng: L.latLng(fin.lat, fin.lon),
        },
      ];

      this.map.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          this.map.removeLayer(layer);
        }
      });

      this.routingControl.setWaypoints(coords);
    } else {
      alert('No se pudieron obtener las coordenadas para las direcciones proporcionadas.');
    }
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

  mensajep() {
    Swal.fire({
      title: '¿Estas seguro de tomar este viaje?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, tomar viaje',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['elegirconductor']);
      }
    });
  }
}
