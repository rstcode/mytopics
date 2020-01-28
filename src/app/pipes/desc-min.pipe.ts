import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'descMin'
})
export class DescMinPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    let num: number = 15;
    if (args) num = args;
    if (value.length > num) {      
      const str = value.substr(0, num).replace(/\r?\n/g, '').replace('<br />', '');
      return str.replace('<br />', '');
    }

    return value.replace('<br />', '');
  }
}