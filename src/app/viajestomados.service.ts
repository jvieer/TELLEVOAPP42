import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ViajesTomadosService {
  private baseUrl = 'https://tellevoapp7.firebaseio.com'; // Cambia esto a tu URL de Firebase

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  createViajeTomado(viajeData: any): Observable<any> {
    return from(this.firestore.collection('viajes').add(viajeData));
  }

  getViajesTomados(): Observable<any[]> {
    return this.firestore.collection<any>('viajes').valueChanges();
  }

  eliminarViaje(viajeId: string) {
    return this.firestore.collection('viajes').doc(viajeId).delete();
  }
}
