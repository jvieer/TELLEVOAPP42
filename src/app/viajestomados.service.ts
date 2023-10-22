import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define el tipo de viaje
interface Viaje {
  // Define la estructura de un viaje, por ejemplo:
  origen: string;
  destino: string;
  fecha: string;
  // ... otros campos
}

@Injectable({
  providedIn: 'root'
})
export class ViajesTomadosService {
  private baseUrl = 'https://jsonserver-5flx.onrender.com';

  constructor(private http: HttpClient) { }

  createViajeTomado(viajeData: Viaje): Observable<any> {
    return this.http.post(`${this.baseUrl}/viajestomados`, viajeData);
  }

  getViajesTomados(): Observable<any> {
    return this.http.get(`${this.baseUrl}/viajestomados`);
  }

  eliminarViaje(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/viajes/${id}`);
  }
  
}
