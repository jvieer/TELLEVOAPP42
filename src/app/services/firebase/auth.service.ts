import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async login(email: string, pass: string){
    try {
      const user = await this.auth.signInWithEmailAndPassword(email,pass);
      console.log(user);
    } catch (error) {
      console.error('Error en login: ',error);
    }
  }

  async register(email: string, pass: string){
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email,pass);
      this.login(email,pass);
      console.log(user);
    } catch (error) {
      console.error('Error en register: ',error);
    }
  }

  async logout(){
    try {
      await this.auth.signOut(); 
    } catch (error) {
     console.error('error en el logout',error);
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
