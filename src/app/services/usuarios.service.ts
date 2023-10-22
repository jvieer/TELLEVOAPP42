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
  guardarUsuario(usuario: any): Observable<any> {
    // Asume que tienes una API en tu backend para guardar usuarios
    // Ajusta la URL y el método HTTP (por ejemplo, POST) según tu API
    const url = 'https://jsonserver-5flx.onrender.com/usuarios';
    
    // Realiza una solicitud HTTP POST para guardar el usuario
    return this.httpClient.post(url, usuario);
  }
}
