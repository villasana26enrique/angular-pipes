import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string;
  arreglo: number[];
  PI: number;
  porcentaje: number;
  salario: number;
  objeto: any;
  valorPromesa: any;
  fecha: Date;

  constructor() {
    this.nombre = 'Enrique';
    this.arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.PI = Math.PI;
    this.porcentaje = 0.234;
    this.salario =  12345;
    this.objeto = {
      nombre: 'Enrique',
      apellido: 'Villasana',
      edad: 27,
      direccion: {
        urb: 'lomas de la Hacienda',
        condominio: 'Pinar 5',
        casa: 24
      }
    };

    this.valorPromesa = new Promise<string>( (resolve) => {
      setTimeout(() => {
        resolve('Llegó la data');
      }, 4500);
    } );

    this.fecha = new Date();
  }
}
