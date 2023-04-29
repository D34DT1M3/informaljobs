import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  formularioDeUsuarios:FormGroup;
  inicio: boolean = false;

  constructor(public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) {

    this.formularioDeUsuarios = this.formulario.group({
      nombre:[''],
      apellido:[''],
      edad:[''],
      email:[''],
      telefono:[''],
      password:['']
    });
   }

  ngOnInit(): void {
    this.inicio = this.crudService.obtenerLocalStorageActivo();
  }
  enviarDatos():any{
    this.crudService.AgregarUsuario(this.formularioDeUsuarios.value).subscribe();
    this.ruteador.navigateByUrl('/login'); //arreglar para login
  }

}
