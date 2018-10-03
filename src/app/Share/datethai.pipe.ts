import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datethai'})
export class DateThai implements PipeTransform {
  transform(value: any): any {
    var date = new Date(value);
    var datefor = date.getDate()+"/"+(date.getMonth()+1)+"/"+(0+date.getFullYear()+543);
    return datefor;
  }
}