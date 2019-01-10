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
 export function boostrapdatepicker(d){
  var date = new Date(d),
    year = date.getFullYear(),
    month = (date.getMonth() + 1).toString(),
    formatedMonth = (month.length === 1) ? ("0" + month) : month,
    day = date.getDate().toString(),
    formatedDay = (day.length === 1) ? ("0" + day) : day
    
  return year + "-" + formatedMonth + "-" + formatedDay;
 }

 export function getDate() {
  var date = new Date(),
    year = date.getFullYear(),
    month = (date.getMonth() + 1).toString(),
    formatedMonth = (month.length === 1) ? ("0" + month) : month,
    day = date.getDate().toString(),
    formatedDay = (day.length === 1) ? ("0" + day) : day,
    hour = date.getHours().toString(),
    formatedHour = (hour.length === 1) ? ("0" + hour) : hour,
    minute = date.getMinutes().toString(),
    formatedMinute = (minute.length === 1) ? ("0" + minute) : minute,
    second = date.getSeconds().toString(),
    formatedSecond = (second.length === 1) ? ("0" + second) : second;
  return year + "-" + formatedMonth + "-" + formatedDay + "T" + formatedHour + ':' + formatedMinute + ':' + formatedSecond;
};