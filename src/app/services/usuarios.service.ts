import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiURL = 'https://jsonserver-5flx.onrender.com/usuarios'; // Reemplaza con la URL correcta de tu base de datos JSON Server

  constructor(private httpClient: HttpClient) { }

  // Método para obtener un usuario aleatorio de la API
  getRandomuser(): Observable<any> {
    return this.httpClient.get('https://randomuser.me/api');
  }

  getUsers(count: number = 20) {
    return this.httpClient.get(`https://randomuser.me/api/?results=${count}`);
  }

  guardarUsuario(usuario: any): Observable<any> {
    // Asume que tienes una API en tu backend para guardar usuarios
    // Ajusta la URL y el método HTTP (por ejemplo, POST) según tu API
    const url = this.apiURL; // Utiliza la URL definida en la propiedad apiURL

    // Realiza una solicitud HTTP POST para guardar el usuario
    return this.httpClient.post(url, usuario);
  }

  login(email: string, password: string) {
    return this.httpClient.get<any[]>(this.apiURL).pipe(
      map((usuarios: any[]) => usuarios.find(user => user.email === email && user.password === password))
    );
  }

  eliminarUsuario(usuarioId: number) {
    return this.httpClient.delete(`${this.apiURL}/${usuarioId}`);
  }

  getUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiURL);
  }


}
