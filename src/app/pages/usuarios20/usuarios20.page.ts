import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-usuarios20',
  templateUrl: './usuarios20.page.html',
  styleUrls: ['./usuarios20.page.scss'],
})
export class Usuarios20Page implements OnInit {

  users: any[] = [];

  constructor(private usuarios: UsuariosService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Intentar cargar usuarios desde el almacenamiento local
    const storedUsers = localStorage.getItem('generatedUsers');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      // Si no hay usuarios almacenados, obtener nuevos usuarios de la API
      this.usuarios.getUsers(20).subscribe((data: any) => {
        this.users = data.results;
        // Guardar los usuarios generados en el almacenamiento local
        localStorage.setItem('generatedUsers', JSON.stringify(this.users));
      });
    }
  }

  generarUsuarios() {
    // Lógica para generar nuevos usuarios y guardarlos en el almacenamiento local
    this.usuarios.getUsers(20).subscribe((data: any) => {
      this.users = data.results;
      // Guardar los usuarios generados en el almacenamiento local
      localStorage.setItem('generatedUsers', JSON.stringify(this.users));
    });
  }
}
