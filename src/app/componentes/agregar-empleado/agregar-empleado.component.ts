import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormsModule } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioDeEmpleados:FormGroup;
  inicio: boolean = false;

  constructor(public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) {

    this.formularioDeEmpleados = this.formulario.group({
      nombre:[''],
      apellido:[''],
      edad:[''],
      trabajo:[''],
      email:[''],
      telefono:[''],
      password:[''],
      barrio:[''],
      descripcion:['']
    });
   }

  ngOnInit(): void {
    this.inicio = this.crudService.obtenerLocalStorageActivo();
  }
  enviarDatos():any{
    this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe();
    this.ruteador.navigateByUrl('/login');
  }
}
