import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'datethai' })
export class DateThai implements PipeTransform {
  transform(value: any): any {
    var date = new Date(value);
    var datefor = date.getDate() + "/" + (date.getMonth() + 1) + "/" + (0 + date.getFullYear() + 543);
    // 01, 02, 03, ... 29, 30, 31
    var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    // 01, 02, 03, ... 10, 11, 12
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var yyyy = (0 + date.getFullYear() + 543);

    // create the format you want
    return (dd + "/" + MM + "/" + yyyy);
  }
  // return datefor;

}

@Pipe({ name: 'datethaiDM' })
export class DateThaiDM implements PipeTransform {
  transform(value: any): any {
    var date = new Date(value);
    var thday = new Array("อาทิตย์", "จันทร์",
      "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์");
    var thmonth = new Array("มกราคม", "กุมภาพันธ์", "มีนาคม",
      "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน",
      "ตุลาคม", "พฤศจิกายน", "ธันวาคม");
    // datethai ="วัน" + thday[now.getDay()]+ "ที่ "+ now.getDate()+ " " + thmonth[now.getMonth()]+ " " + (0+now.getFullYear()+543);
    var datethai = date.getDate() + " " + thmonth[date.getMonth()] + " " + (0 + date.getFullYear() + 543);

    return datethai;
  }
}

@Pipe({ name: 'dateengDM' })
export class DateEngDM implements PipeTransform {
  transform(value: any): any {
    var date = new Date(value);
    var thday = new Array ("Sunday","Monday",
    "Tuesday","Wednesday","Thursday","Friday","Saturday"); 
    var thmonth = new Array ("January","February","March ",
    "April","May","June", "July","August","September",
    "October","November","December");  
    // datethai ="วัน" + thday[now.getDay()]+ "ที่ "+ now.getDate()+ " " + thmonth[now.getMonth()]+ " " + (0+now.getFullYear()+543);
    var dateeng = date.getDate() + " " + thmonth[date.getMonth()] + " " + (0 + date.getFullYear());

    return dateeng;
  }
}

@Pipe({ name: 'expiresdatethai' })
export class ExpiresDateThai implements PipeTransform {
  transform(value: any): any {
    var date = new Date(value);
    var datefor = date.getDate() + "/" + (date.getMonth() + 1) + "/" + (0 + date.getFullYear() + 543);
    return datefor;
  }
}



@Pipe({ name: 'yearthai' })
export class YearThai implements PipeTransform {
  transform(value: any): any {
    var yearthai = parseInt(value) + 543;
    return yearthai;
  }
}

@Pipe({ name: 'time' })
export class Time implements PipeTransform {
  transform(value: any): any {
    var date = new Date(value);
    var time = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2)
    return time;
  }
}


