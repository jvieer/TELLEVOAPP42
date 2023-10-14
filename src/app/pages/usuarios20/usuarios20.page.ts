import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios20',
  templateUrl: './usuarios20.page.html',
  styleUrls: ['./usuarios20.page.scss'],
})
export class Usuarios20Page implements OnInit {

  users: any[] = [];

  constructor(private usuarios : UsuariosService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.usuarios.getUsers(20).subscribe((data: any) => {
      this.users = data.results;
    });
  }
}
