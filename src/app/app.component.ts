import { Component } from '@angular/core';
import { ProductoInterface } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'practicaAngular';

  
  productos: ProductoInterface[] = [
    {
      nombre:"pan",
      precio:700
    },
    {
      nombre:"queso",
      precio:1200
    },
  ] 
  
  mostrar: boolean = true;

  ocultarLista() {
    return (this.mostrar = false);
  }
  mostrarLista() {
    return (this.mostrar = true);
  }

 
}


