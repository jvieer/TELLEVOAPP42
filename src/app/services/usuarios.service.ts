import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient:HttpClient) { }

  //metodo para obtener un usuario aleatorio de la api
  getRandomuser(): Observable<any> {
    return this.httpClient.get('https://randomuser.me/api');

  }
  getUsers(count: number = 20) {
    return this.httpClient.get(`https://randomuser.me/api/?results=${count}`);
  }
}
