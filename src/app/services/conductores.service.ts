import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConductoresService {
  private baseUrl = 'https://jsonserver-5flx.onrender.com'; // Reemplaza con la URL de tu JSON Server

  // Agrega una variable BehaviorSubject para almacenar el conductor seleccionado
  private conductorSeleccionado = new BehaviorSubject<any | null>(null);

  constructor(private http: HttpClient) {}

  getConductores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conductores`);
  }

  // Agrega un método para establecer el conductor seleccionado
  setConductorSeleccionado(conductor: any) {
    this.conductorSeleccionado.next(conductor);
  }

  // Agrega un método para obtener el conductor seleccionado
  getConductorSeleccionado(): Observable<any | null> {
    return this.conductorSeleccionado.asObservable();
  }

  storeConductor(conductor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/conductores`, conductor);
  }
}
