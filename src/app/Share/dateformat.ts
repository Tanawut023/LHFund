import { NgbDateParserFormatter, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { Observable } from 'rxjs';
@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
  lang: Observable<string>;
  constructor(private langservice: LanguageService) {
    super();
  }
  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('/');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { day: toInteger(dateParts[0]), month: null, year: null };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return { day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: null };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return { day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: toInteger(dateParts[2]) };
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    this.langservice.listen().subscribe((m: any) => {
      console.log(m);
      this.lang = m;
    })
    if (String(this.lang) == 'en') {
      return date ?
        `${isNumber(date.day) ? padNumber(date.day) : ''}/${isNumber(date.month) ? padNumber(date.month) : ''}/${date.year}` :
        '';
    } else {
      return date ?
        `${isNumber(date.day) ? padNumber(date.day) : ''}/${isNumber(date.month) ? padNumber(date.month) : ''}/${date.year + 543}` :
        '';
    }

  }
}
const I18N_VALUES = {
  en: {
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  th: {
    weekdays: ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
    months: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  }
};

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  lang: Observable<string>;
  constructor(
    private _i18n: I18n,
    private langservice: LanguageService) {
    super();
    this.langservice.listen().subscribe((m: any) => {
      console.log(m);
      this.lang = m;
    })
  }

  getWeekdayShortName(weekday: number): string {
    if (String(this.lang) == 'en') {
      return I18N_VALUES['en'].weekdays[weekday - 1];
    } else {
      return I18N_VALUES['th'].months[weekday - 1];
    }
  }
  getMonthShortName(month: number): string {
    if (String(this.lang) == 'en') {
      return I18N_VALUES['en'].months[month - 1];
    } else {
      return I18N_VALUES['th'].months[month - 1];
    }
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
  getYearNumerals(year: number): string {
    if (String(this.lang) == 'th') {
      return year + 543 + '';
    } else {
      return year + '';
    }

  }
}
@Injectable()
export class I18n {
  language = 'fr';
}


export var datethai;
var now = new Date();
var thday = new Array("อาทิตย์", "จันทร์",
  "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์");
var thmonth = new Array("มกราคม", "กุมภาพันธ์", "มีนาคม",
  "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน",
  "ตุลาคม", "พฤศจิกายน", "ธันวาคม");
// datethai ="วัน" + thday[now.getDay()]+ "ที่ "+ now.getDate()+ " " + thmonth[now.getMonth()]+ " " + (0+now.getFullYear()+543);
datethai = now.getDate() + " " + thmonth[now.getMonth()] + " " + (0 + now.getFullYear() + 543);

export var dateeng;
var now = new Date();
var thday = new Array("Sunday", "Monday",
  "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var thmonth = new Array("January", "February", "March ",
  "April", "May", "June", "July", "August", "September",
  "October", "November", "December");
// datethai ="วัน" + thday[now.getDay()]+ "ที่ "+ now.getDate()+ " " + thmonth[now.getMonth()]+ " " + (0+now.getFullYear()+543);
dateeng = now.getDate() + " " + thmonth[now.getMonth()] + " " + (0 + now.getFullYear());


export function formatdatethai(d) {
  var date = new Date(d);
  var thday = new Array("อาทิตย์", "จันทร์",
    "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์");
  var thmonth = new Array("มกราคม", "กุมภาพันธ์", "มีนาคม",
    "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน",
    "ตุลาคม", "พฤศจิกายน", "ธันวาคม");
  var datefor = date.getDate() + " " + thmonth[date.getMonth()] + " " + (0 + date.getFullYear() + 543);
  return datefor;
}
export function boostrapdatepicker(d) {
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

export function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

export function toString(value: any): string {
  return (value !== undefined && value !== null) ? `${value}` : '';
}

export function getValueInRange(value: number, max: number, min = 0): number {
  return Math.max(Math.min(value, max), min);
}

export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

export function isInteger(value: any): value is number {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

export function isDefined(value: any): boolean {
  return value !== undefined && value !== null;
}

export function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}