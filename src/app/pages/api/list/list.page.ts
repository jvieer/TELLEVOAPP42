import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajesService } from 'src/app/services/api/viajes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  listaViajes:any = [];
  constructor(
    private router:Router,
    private viajesapi: ViajesService
  ) { }

  ngOnInit() {
    //aa
  }

 
  addViaje(){
    this.router.navigate(['/createviaje']);
  }
}
