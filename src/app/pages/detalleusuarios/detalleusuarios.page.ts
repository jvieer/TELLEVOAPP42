import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-detalleusuarios',
  templateUrl: './detalleusuarios.page.html',
  styleUrls: ['./detalleusuarios.page.scss'],
})
export class DetalleusuariosPage implements OnInit {
  usuario: any;

  constructor(private route: ActivatedRoute,
    private usuariosService: UsuariosService) { }

    ngOnInit() {
      this.route.params.subscribe((params) => {
        const userId = +params['id']; // Convierte el ID a un número
        this.usuariosService.getUsuarios().subscribe((usuarios) => {
          this.usuario = usuarios.find((usuario) => usuario.id === userId);
        });
      });
    }
}
