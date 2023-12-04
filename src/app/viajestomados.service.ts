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

  createViajeTomado(viajeData: any, userId: string): Observable<any> {
    // Agrega el UID del usuario a los datos del viaje
    viajeData.userId = userId;
  
    // Ahora guarda los datos en Firestore
    return from(this.firestore.collection('viajes').add(viajeData));
  }

  getViajesTomados(): Observable<any[]> {
    return this.firestore.collection<any>('viajes').valueChanges();
  }

  eliminarViaje(viajeId: string) {
    return this.firestore.collection('viajes').doc(viajeId).delete();
  }
  getViajesTomadosByUserId(userId: string): Observable<any[]> {
    return this.firestore.collection<any>('viajes', ref => ref.where('userId', '==', userId)).valueChanges();
  }

  actualizarStatusViaje(viajeId: string, status: string): Observable<any> {
    return from(this.firestore.collection('viajes').doc(viajeId).update({ status }));
  }
  
}
