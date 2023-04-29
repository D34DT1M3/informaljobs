import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ListarEmpleadoComponent } from '../listar-empleado/listar-empleado.component';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  constructor(private crudService:CrudService,
     private ruteador:Router, private app:AppComponent) { }

  ngOnInit(): void {
  }

  salir(){
    localStorage.removeItem('activo');
    localStorage.removeItem('usuario');
    this.app.salir();
    this.ruteador.navigateByUrl('/login');
  }

}
