import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ConductoresService {
  private baseUrl = 'https://tellevoapp7.firebaseio.com';

  private conductorSeleccionado = new BehaviorSubject<any | null>(null);

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  getConductores(): Observable<any[]> {
    return this.firestore.collection<any>('conductores').valueChanges();
  }

  setConductorSeleccionado(conductor: any) {
    this.conductorSeleccionado.next(conductor);
  }

  getConductorSeleccionado(): Observable<any | null> {
    return this.conductorSeleccionado.asObservable();
  }

  storeConductor(conductor: any): Observable<any> {
    return from(this.firestore.collection('conductores').add(conductor));
  }

  eliminarConductor(conductorId: string) {
    return this.firestore.collection('conductores').doc(conductorId).delete();
  }
}
