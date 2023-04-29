import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //para llamar api
import { Observable } from 'rxjs'; //espera de algo
import { Empleado } from './Empleado';
import { Usuario } from './Usuario'; //llamado del formatos para guardar
import { LoginComponent } from '../componentes/login/login.component'; //llamado de componentes


@Injectable({ 
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/empleados/'; //llamada api

  constructor(private clienteHttp:HttpClient) { } //variable para llamar a cliente http para llamar la api

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
  }
  iniciarSecionUsuario(datosLogin:LoginComponent):Observable<any>{
    return this.clienteHttp.post(this.API+"?login=1",datosLogin);

  }

  AgregarUsuario(datosUsuario:Usuario):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar2=1",datosUsuario);
  }
  contratar(id:any){
    return this.clienteHttp.get(this.API+"?contrato="+id);

  }
  obtenerLocalStorageActivo(){
    let usuario = localStorage.getItem("activo");
    if(usuario){
        return true;
    }
    else{
      return false;
    }

  }

  ObtenerEmpleados(){
    let usuario = this.obtenerLocalStorageActivo();
    if(usuario){
      return this.clienteHttp.get(this.API+"?empleados=1");
    }
    else{
      return this.clienteHttp.get(this.API);
    }
  }

}
