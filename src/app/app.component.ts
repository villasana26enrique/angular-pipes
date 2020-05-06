import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string;
  arreglo: number[];
  decimal: number;

  constructor() {
    this.nombre = 'Enrique';
    this.arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.decimal = 3.141592653589793238;
  }
}
