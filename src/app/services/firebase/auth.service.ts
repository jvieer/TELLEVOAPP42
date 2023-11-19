import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) { }

  async login(email: string, pass: string){
    try {
      const user = await this.auth.signInWithEmailAndPassword(email, pass);
      this.handleUserRedirect(user);
      console.log(user);
    } catch (error) {
      console.error('Error en login: ', error);
    }
  }

  async register(email: string, pass: string, additionalInfo: any){
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email, pass);
      await this.handleUserRedirect(user);

      // Guardar información adicional en Firestore
      await this.saveAdditionalInfo(user.user?.uid, email, additionalInfo);

      console.log(user);
    } catch (error) {
      console.error('Error en register: ', error);
    }
  }

  async handleUserRedirect(user: any) {
    if (user) {
      const userEmail = user.user.email;
      if (userEmail) {
        let userType: string | null = null;
  
        // Determina el tipo de usuario según el dominio del correo electrónico
        if (userEmail.endsWith('@gmail.com')) {
          userType = 'viajes-p';
        } else if (userEmail.endsWith('@conductor.com')) {
          userType = 'viajes-c';
        } else {
          console.error('Correo no compatible');
          // Puedes manejar el caso en el que el correo no es compatible
        }
  
        if (userType) {
          // Almacena el tipo de usuario en el almacenamiento local
          localStorage.setItem('userType', userType);
  
          // Redirige al usuario según el tipo almacenado
          this.router.navigate([userType]);
        }
      }
    }
  }

  async saveAdditionalInfo(uid: string | undefined, email: string, additionalInfo: any) {
    if (uid) {
      await this.firestore.collection('conductores').doc(uid).set({
        email: email,
        ...additionalInfo
      });
    }
  }

async logout() {
  try {
    await this.auth.signOut();
    // Limpia la información almacenada en el localStorage
    localStorage.removeItem('userType');
    this.router.navigate(['/login']);  // O la ruta que desees después del cierre de sesión
  } catch (error) {
    console.error('Error en el logout', error);
  }
}

  checkAuth(){
    return new Promise((resolve, reject) =>{
      this.auth.onAuthStateChanged((user) =>{
        resolve(user);
      })
    })
  }

  async recoverPassword(email: string) {
    try {
      await this.auth.sendPasswordResetEmail(email);
    } catch (error) {
      throw error; // Puedes manejar el error aquí o dejar que el componente lo maneje
    }
  }

  getCurrentUserId() {
    return this.auth.currentUser?.then(user => user?.uid);
  }
}
