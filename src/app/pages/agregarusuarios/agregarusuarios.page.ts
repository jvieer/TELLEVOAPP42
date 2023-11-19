import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agregarusuarios',
  templateUrl: './agregarusuarios.page.html',
  styleUrls: ['./agregarusuarios.page.scss'],
})
export class AgregarusuariosPage {
  nuevoUsuario = {
    nombre: '',
    email: '',
    contrasena: '',
    rol: 'pasajero',
  };

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
  ) {}

  agregarUsuario() {
    // Asegurar que el correo tenga el dominio "@gmail.com"
    this.nuevoUsuario.email = this.nuevoUsuario.email.trim() + '@gmail.com';

    // Guardar usuario en Firebase Authentication
    this.auth.createUserWithEmailAndPassword(this.nuevoUsuario.email, this.nuevoUsuario.contrasena)
      .then((authResponse) => {
        console.log('Usuario autenticado con éxito', authResponse);

        // Agregar usuario a la colección 'usuarios' en Firebase Database
        this.firestore.collection('usuarios').add(this.nuevoUsuario)
          .then((dbResponse) => {
            console.log('Usuario agregado con éxito a Firebase Database', dbResponse);
            this.mensajeu();
          })
          .catch((dbError) => {
            console.error('Error al agregar usuario a Firebase Database', dbError);
          });
      })
      .catch((authError) => {
        console.error('Error al autenticar usuario', authError);
      });
  }

  mensajeu() {
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
      title: 'Usuario agregado!',
    });
  }
}
