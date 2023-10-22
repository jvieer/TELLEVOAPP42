import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define el tipo de viaje
interface Viaje {
  fecha: string;
  hora: string; // Agrega la propiedad hora
  // Agrega otros campos si es necesario
}

@Injectable({
  providedIn: 'root'
})
export class ViajesTomadosService {
  private baseUrl = 'https://jsonserver-5flx.onrender.com';

  constructor(private http: HttpClient) { }

  createViajeTomado(viajeData: Viaje): Observable<any> {
    return this.http.post(`${this.baseUrl}/viajes`, viajeData); // Envía el objeto viajeData completo
  }

  getViajesTomados(): Observable<any> {
    return this.http.get(`${this.baseUrl}/viajes`);
  }

  eliminarViaje(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/viajes/${id}`);
  }
}
