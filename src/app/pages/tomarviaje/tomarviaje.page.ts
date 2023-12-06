// Importa Angular Router
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajesTomadosService } from 'src/app/viajestomados.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/firebase/auth.service';

interface Viaje {
  fecha: string;
  hora: string;
  status: string;

  // Agrega otros campos de tu viaje si es necesario
}

@Component({
  selector: 'app-tomarviaje',
  templateUrl: './tomarviaje.page.html',
  styleUrls: ['./tomarviaje.page.scss'],
})
export class TomarviajePage implements OnInit {
  viajeData: Viaje = {
    fecha: '',
    hora: '',
    status: 'pendiente',
    // Inicializa otros campos de tu viaje si es necesario
  };
  langs: string[] = [];
  idioma!: string;

  conductoresDisponibles: any[] = [
    { id: '1', nombre: 'Conductor 1' },
    { id: '2', nombre: 'Conductor 2' },
    // Agrega más conductores según sea necesario
  ];

  constructor(
    private viajesTomadosService: ViajesTomadosService,
    private router: Router,
    private transService: TranslateService,
    private authService: AuthService
  ) {
    this.langs = this.transService.getLangs();
  }

  ngOnInit() {
    const now = new Date();
    this.viajeData.fecha = now.toISOString().split('T')[0];
    this.viajeData.hora = now.toTimeString().split(' ')[0];
  }

  async registerViajeTomado() {
    console.log(this.viajeData);
    if (
      this.viajeData.fecha.trim() !== '' &&
      this.viajeData.hora.trim() !== ''
    ) {
      try {
        // Obtiene el UID del usuario actual
        const userId = await this.authService.getCurrentUserId();
  
        if (userId) {
          // Llama al método createViajeTomado con el UID del usuario
          this.viajesTomadosService.createViajeTomado(this.viajeData, userId).subscribe(
            (response) => {
              console.log('Viaje tomado con éxito', response);
              this.mensajer();
            },
            (error) => {
              console.error('Error al tomar el viaje', error);
            }
          );
        } else {
          console.error('No se pudo obtener el UID del usuario');
        }
      } catch (error) {
        console.error('Error al obtener el UID del usuario', error);
      }
    } else {
      console.error('Campos incompletos. Por favor, completa todos los campos antes de tomar el viaje.');
    }
  }
  mensajer() {
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
      title: '¡Viaje tomado!'
    }).then(() => {
      this.router.navigate(['/viajes-p']);
    });
  }

  changeLanguage(event: any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    localStorage.setItem('appLang', selectedLang);
  }
}
