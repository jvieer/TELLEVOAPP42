import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IViaje } from 'src/app/interfaces/iviaje';
import { IViajes } from 'src/app/interfaces/iviajes';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getCollection (nombreColeccion: string) {
    return this.firestore.collection<IViaje>(nombreColeccion).valueChanges();
  }

  createDocument (nombreColeccion: string , data: IViaje) {
    return this.firestore.collection<IViaje>(nombreColeccion).add(data);
  }

  updateDocument (nombreColeccion: string , documentId: string, data: IViaje) {
    return this.firestore.collection<IViaje>(nombreColeccion).doc(documentId).update(data);
  }
  
  deleteDocument (nombreColeccion: string , documentId: string) {
    return this.firestore.collection<IViaje>(nombreColeccion).doc(documentId).delete();
  }

  searchDocument (nombreColeccion: string , documentId: string) {
    return this.firestore.collection<IViaje>(nombreColeccion).doc(documentId);
  }

  GetusuarioById (nombreColeccion: string , documentId: string) {
    return this.firestore.collection<IViaje>(nombreColeccion).doc(documentId).valueChanges;
  }
}
