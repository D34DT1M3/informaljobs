import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  iniciarSecion:FormGroup;
  error: boolean = false;
  inicio: boolean = false;
  

  constructor(public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router,
    private app:AppComponent,
    ) {

    this.iniciarSecion = this.formulario.group({
      email:[''],
      password:['']
    });
    
   }

  ngOnInit(): void {
    this.inicio = this.crudService.obtenerLocalStorageActivo();
  }
  enviarDatos():any{
    this.crudService.iniciarSecionUsuario(this.iniciarSecion.value).subscribe((respuesta:any)=>{
      if(respuesta.length > 0){
        localStorage.setItem("activo", "true");
        let nombre = respuesta[0]["nombre"]+" "+respuesta[0]["apellido"];
        localStorage.setItem("usuario", nombre);
        localStorage.setItem("activo", "true");
        localStorage.setItem("id", respuesta[0]["id"]); 
        this.app.cambiar();
        this.ruteador.navigateByUrl('/listar-empleado');
      }
      else{
        this.error = true;
      }
    });
    

  }
}
