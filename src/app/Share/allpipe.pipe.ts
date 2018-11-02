import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'type' })
export class Type implements PipeTransform {
  transform(value: any): any {
      var type
      if((value) == "Subscription"){
        type = "SUB";
      }
      else if((value) == "Redemption"){
        type = "RDM";
      }
      else if((value) == "Switching In"){
        type = "SWI";
      }
      else if((value) == "Switching Out"){
        type = "SWO";
      }
    return type;
  }
}
