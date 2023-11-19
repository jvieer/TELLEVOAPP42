import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private baseUrl = 'https://tellevoapp7.firebaseio.com';

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore) {}

  getRandomuser(): Observable<any> {
    return this.httpClient.get('https://randomuser.me/api');
  }

  getUsers(count: number = 20) {
    return this.httpClient.get(`https://randomuser.me/api/?results=${count}`);
  }

  guardarUsuario(usuario: any): Observable<any> {
    return from(this.firestore.collection('usuarios').add(usuario));
  }

  login(email: string, password: string) {
    return this.firestore.collection('usuarios', (ref) =>
      ref.where('email', '==', email).where('password', '==', password)
    )
    .valueChanges();
  }

  eliminarUsuario(usuarioId: string) {
    return this.firestore.collection('usuarios').doc(usuarioId).delete();
  }

  getUsuarios(): Observable<any[]> {
    return this.firestore.collection<any>('usuarios').valueChanges();
  }
}
