import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  Empleados:any;
  filterPost = '';
  filterPost2 = '';
  usuario:any;
  salio: boolean = false;
  constructor(
    private crudService:CrudService
  ) { 
  }

  ngOnInit(): void {
      this.crudService.ObtenerEmpleados().subscribe(respuesta=>{
        this.Empleados=respuesta;
      });
      this.usuario = localStorage.getItem("usuario");
      this.salio = this.crudService.obtenerLocalStorageActivo();
  }

}