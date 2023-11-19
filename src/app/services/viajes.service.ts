import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  constructor(private firestore: AngularFirestore) {}

  getViajes(): Observable<any[]> {
    return this.firestore.collection<any>('viajes').valueChanges();
  }

  getViaje(viajeId: string): Observable<any | undefined> {
    return this.firestore.collection<any>('viajes').doc(viajeId).valueChanges();
  }

  addViaje(viaje: any): Observable<any> {
    return from(this.firestore.collection('viajes').add(viaje));
  }

  deleteViaje(viajeId: string) {
    return this.firestore.collection('viajes').doc(viajeId).delete();
  }
}
