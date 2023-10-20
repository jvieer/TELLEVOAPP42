import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConductoresService {
  private baseUrl = 'https://my-json-server.typicode.com/jvieer/jsonserver'; // Reemplaza con la URL de tu JSON Server

  constructor(private http: HttpClient) {}

  getConductores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conductores`);
  }

  storeConductores(conductores: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/conductores`, conductores);
  }
}

