import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  async login(email: string, pass: string){
    try {
      const user = await this.auth.signInWithEmailAndPassword(email, pass);
      this.handleUserRedirect(user);
      console.log(user);
    } catch (error) {
      console.error('Error en login: ', error);
    }
  }

  async register(email: string, pass: string){
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email, pass);
      await this.handleUserRedirect(user);
      console.log(user);
    } catch (error) {
      console.error('Error en register: ', error);
    }
  }

  async handleUserRedirect(user: any) {
    if (user) {
      const userEmail = user.user.email;
      if (userEmail) {
        if (userEmail.endsWith('@gmail.com')) {
          this.router.navigate(['viajes-p']);
        } else if (userEmail.endsWith('@conductor.com')) {
          this.router.navigate(['viajes-c']);
        } else {
          console.error('Correo no compatible');
          // Puedes manejar el caso en el que el correo no es compatible
        }
      }
    }
  }

  async logout(){
    try {
      await this.auth.signOut(); 
    } catch (error) {
     console.error('error en el logout', error);
    }
  }

  checkAuth(){
    return new Promise((resolve, reject) =>{
      this.auth.onAuthStateChanged((user) =>{
        resolve(user);
      })
    })
  }
}
