import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'viajes',
    children:[
      {
        path: "",
        loadChildren: () => import('./pages/viajes/viajes.module').then( m => m.ViajesPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/viajes/detalle/detalle.module').then( m => m.DetallePageModule)
      },
      
    ]

  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'viajes-c',
    loadChildren: () => import('./pages/viajes-c/viajes-c.module').then( m => m.ViajesCPageModule)
  },
  {
    path: 'viajes-p',
    loadChildren: () => import('./pages/viajes-p/viajes-p.module').then( m => m.ViajesPPageModule)
  },
  {
    path: 'createviaje',
    loadChildren: () => import('./pages/viajes/createviaje/createviaje.module').then( m => m.CreateviajePageModule)
  },
  {
    path: 'viajes-conductor',
    loadChildren: () => import('./pages/viajes/viajes-conductor/viajes-conductor.module').then( m => m.ViajesConductorPageModule)
  },
  {
    path: 'tomarviaje',
    loadChildren: () => import('./pages/tomarviaje/tomarviaje.module').then( m => m.TomarviajePageModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./pages/seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },
  {
    path: 'misviajes',
    loadChildren: () => import('./pages/misviajes/misviajes.module').then( m => m.MisviajesPageModule)
  },
  {
    path: 'registro-c',
    loadChildren: () => import('./pages/registro-c/registro-c.module').then( m => m.RegistroCPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./pages/confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule)
  },
  {
    path: 'apihome',
    loadChildren: () => import('./pages/api/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'apilist',
    loadChildren: () => import('./pages/api/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'apiadd',
    loadChildren: () => import('./pages/api/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'apiupdate',
    loadChildren: () => import('./pages/api/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'apidelete',
    loadChildren: () => import('./pages/api/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'apidetail',
    loadChildren: () => import('./pages/api/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./pages/terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'usuarios20',
    loadChildren: () => import('./pages/usuarios20/usuarios20.module').then( m => m.Usuarios20PageModule)
  },
  {
    path: 'elegirconductor',
    loadChildren: () => import('./pages/elegirconductor/elegirconductor.module').then( m => m.ElegirconductorPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'agregarconductor',
    loadChildren: () => import('./pages/agregarconductor/agregarconductor.module').then( m => m.AgregarconductorPageModule)
  },  {
    path: 'agregarusuarios',
    loadChildren: () => import('./pages/agregarusuarios/agregarusuarios.module').then( m => m.AgregarusuariosPageModule)
  },


 

  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
