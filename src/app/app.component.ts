import { Component, OnInit} from '@angular/core';
import { CrudService } from './servicio/crud.service';
import { HomeComponent } from './componentes/home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TYSY';
  inicio: boolean = false;
  constructor(private crudService:CrudService) {
    this.inicio = this.crudService.obtenerLocalStorageActivo();
   }
  ngOnInit() {

  }
  cambiar(){
    this.inicio = true;
  }
  salir(){
    this.inicio = false;
  }
  
}
