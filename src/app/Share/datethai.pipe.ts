import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datethai'})
export class DateThai implements PipeTransform {
  transform(value: any): any {
    var date = new Date(value);
    var datefor = date.getDate()+"/"+(date.getMonth()+1)+"/"+(0+date.getFullYear()+543);
    return datefor;
  }
}

@Pipe({name: 'expiresdatethai'})
export class ExpiresDateThai implements PipeTransform {
  transform(value: any): any {
    var date = new Date(value);
    var datefor = date.getDate()+"/"+(date.getMonth()+1)+"/"+(2+date.getFullYear()+543);
    return datefor;
  }
}



@Pipe({name: 'yearthai'})
export class YearThai implements PipeTransform {
  transform(value: any): any {
    var yearthai = parseInt(value)+543;
    return yearthai;
  }
}

@Pipe({name: 'time'})
export class Time implements PipeTransform {
  transform(value: any): any {
    var date = new Date(value);
    var time = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2)
    return time;
  }
}


