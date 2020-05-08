import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    if ( activar ) {
      const CANTIDAD = value.length;
      /*let respuesta: string[] = [];
      for (let i = 0; i < CANTIDAD; i++) {
        respuesta[i] = '*';
      }
      return respuesta.join('');*/
      return '*'.repeat(CANTIDAD);
    } else {
      return value;
    }
  }

}
