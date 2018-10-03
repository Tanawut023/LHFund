import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tofix' })
export class toFixed implements PipeTransform {
  transform(value: any): any {
    var tofix = value.toFixed(2);
    return tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

@Pipe({ name: 'tofix4' })
export class toFixed4 implements PipeTransform {
  transform(value: any): any {
    var tofix = value.toFixed(4);
    var parts = tofix.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
    // return tofix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

