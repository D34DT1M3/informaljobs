import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarUsuarioComponent } from './componentes/agregar-usuario/agregar-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { CuentaComponent } from './componentes/cuenta/cuenta.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    ListarEmpleadoComponent,
    AgregarUsuarioComponent,
    LoginComponent,
    HomeComponent,
    CuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
