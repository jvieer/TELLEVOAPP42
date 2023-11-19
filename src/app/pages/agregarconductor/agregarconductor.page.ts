import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-agregarconductor',
  templateUrl: './agregarconductor.page.html',
  styleUrls: ['./agregarconductor.page.scss'],
})
export class AgregarconductorPage {
  nuevoConductor = {
    nombre: '',
    auto: '',
    comuna: '',
    disponible: 'si',
  };

  nuevoUsuario = {
    nombre: '',
    email: '', // No incluir el dominio aquí
    contrasena: '',
    rol: 'conductor',
  };

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private http: HttpClient,
  ) {}

  agregarConductor() {
    // Construir el correo electrónico completo con el dominio '@conductor.com'
    const correoConductor = `${this.nuevoUsuario.email}@conductor.com`;

    // Agregar conductor a la colección 'conductores' en Firebase Database
    this.firestore.collection('conductores').add(this.nuevoConductor)
      .then((conductorResponse) => {
        console.log('Conductor agregado con éxito a Firebase Database', conductorResponse);

        // Agregar usuario a la autenticación de Firebase
        this.auth.createUserWithEmailAndPassword(correoConductor, this.nuevoUsuario.contrasena)
          .then((authResponse) => {
            console.log('Usuario agregado con éxito a la autenticación de Firebase', authResponse);

            // Actualizar el objeto nuevoUsuario con el correo completo
            this.nuevoUsuario.email = correoConductor;

            // Agregar usuario a la colección 'usuarios' en Firebase Database
            this.firestore.collection('usuarios').add(this.nuevoUsuario)
              .then((usuarioResponse) => {
                console.log('Usuario agregado con éxito a Firebase Database', usuarioResponse);
                this.mensajea();
              })
              .catch((usuarioError) => {
                console.error('Error al agregar usuario a Firebase Database', usuarioError);
              });
          })
          .catch((authError) => {
            console.error('Error al agregar usuario a la autenticación de Firebase', authError);
          });
      })
      .catch((conductorError) => {
        console.error('Error al agregar conductor a Firebase Database', conductorError);
      });
  }

  mensajea() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Conductor agregado!',
    });
  }
}
