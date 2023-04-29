import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { AgregarUsuarioComponent } from './componentes/agregar-usuario/agregar-usuario.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { CuentaComponent } from './componentes/cuenta/cuenta.component';

//para redirecionar a los componentes creados
const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'login'},
  {path: 'agregar-empleado', component:AgregarEmpleadoComponent},
  {path: 'agregar-usuario', component:AgregarUsuarioComponent},
  {path: 'listar-empleado', component:ListarEmpleadoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cuenta', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
