import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-elimusuarios',
  templateUrl: './elimusuarios.page.html',
  styleUrls: ['./elimusuarios.page.scss'],
})
export class ElimusuariosPage implements OnInit {
  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe((data: any[]) => {
      this.usuarios = data;
    });
  }

  eliminarUsuario(usuarioId: number) {
    const usuarioIdString = usuarioId.toString(); // Convierte el número a string
    this.usuariosService.eliminarUsuario(usuarioIdString)
      .then(() => {
        const index = this.usuarios.findIndex((usuario) => usuario.id === usuarioId);
        if (index !== -1) {
          this.usuarios.splice(index, 1);
        }
      })
      .catch(error => console.error('Error al eliminar usuario', error));
  }
  
  mensajeEliminar(id: number) {
    Swal.fire({
      title: '¿Estás seguro de eliminar este usuario?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarUsuario(id);
        this.mostrarMensajeEliminacion();
      }
    });
  }

  mostrarMensajeEliminacion() {
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
      title: 'Usuario eliminado!'
    });
  }
}
