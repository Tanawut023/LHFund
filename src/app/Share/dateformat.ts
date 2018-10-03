import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { isNumber, toInteger, padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('/');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {day: toInteger(dateParts[0]), month: null, year: null};
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: null};
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: toInteger(dateParts[2])};
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    return date ?
        `${isNumber(date.day) ? padNumber(date.day) : ''}/${isNumber(date.month) ? padNumber(date.month) : ''}/${date.year}` :
        '';
  }
}

export var datethai;
    var  now = new Date(); 
    var thday = new Array ("อาทิตย์","จันทร์",
    "อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์"); 
    var thmonth = new Array ("มกราคม","กุมภาพันธ์","มีนาคม",
    "เมษายน","พฤษภาคม","มิถุนายน", "กรกฎาคม","สิงหาคม","กันยายน",
    "ตุลาคม","พฤศจิกายน","ธันวาคม");    
    // datethai ="วัน" + thday[now.getDay()]+ "ที่ "+ now.getDate()+ " " + thmonth[now.getMonth()]+ " " + (0+now.getFullYear()+543);
    datethai = now.getDate()+ " " + thmonth[now.getMonth()]+ " " + (0+now.getFullYear()+543);

    
 export function formatdatethai(d){
  var date = new Date(d);
  var thday = new Array ("อาทิตย์","จันทร์",
    "อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์"); 
    var thmonth = new Array ("มกราคม","กุมภาพันธ์","มีนาคม",
    "เมษายน","พฤษภาคม","มิถุนายน", "กรกฎาคม","สิงหาคม","กันยายน",
    "ตุลาคม","พฤศจิกายน","ธันวาคม"); 
  var datefor = date.getDate()+" "+thmonth[date.getMonth()]+" "+(0+date.getFullYear()+543);
  return datefor;
 }