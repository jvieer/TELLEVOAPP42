import { Injectable } from '@angular/core';
import { viajes } from '../pages/viajes/viajes.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IViajes } from 'src/app/interfaces/iviajes';
import { environment } from 'src/environments/environment';
import { IViaje } from 'src/app/interfaces/iviaje';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  viajes: viajes[] = [
    {
    id: '1',
    nombre: 'Juan Tapia',
    disponible: 'Si',
    imagen: 'https://i.pinimg.com/236x/67/e4/7b/67e47b8e7052f0449c5d725282deee78.jpg',
    hora: '13:44PM',
    fecha: '28-08-2023',
    comuna: 'Puente Alto'
    },

    {
    id: '2',
    nombre: 'Jorge Ortiz',
    disponible: 'Si',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpDXwcyUfDg3m9OpaFebi2j_WvNLDfGm-rA&usqp=CAU',
    hora: '15:00PM',
    fecha: '29-08-2023',
    comuna: 'La florida'
    },

    {
    id: '3',
    nombre: 'Francisca Olivares',
    disponible: 'no',
    imagen: 'https://dercocenter-api.s3.us-east-1.amazonaws.com/images/version/1671189134-NAGRlVbY2R.webp',
    hora: '17:44PM',
    fecha: '18-08-2023',
    comuna: 'Puente Alto'
    },

    {
    id: '4',
    nombre: 'Ruben Tuesta',
    disponible: 'Si',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzURKho-Xgbp67p6YCjAyLIgK8Lhr9MRzsg&usqp=CAU',
    hora: '13:15PM',
    fecha: '09-05-2023',
    comuna: 'Puente Alto'
    },

  ]
  constructor(private httpClient: HttpClient) { }




  getAll() {
    return [...this.viajes]
  }

  getViaje(id: string) {
    return{
      ...this.viajes.find( aux => {
        return aux.id === id
      }

      )
    }
  }

 

  addViaje(nombre: String, disponible: String, imagen: String, hora: String, fecha: String, comuna: String){
    this.viajes.push({
        nombre, disponible, imagen, hora, fecha, comuna, id: this.viajes.length + 1 + "" 
    })
  }

  deleteViaje(id: String){
    this.viajes = this.viajes.filter(aux => {
      return aux.id !== id
    })
  }
}
