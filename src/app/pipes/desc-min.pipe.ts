import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'descMin'
})
export class DescMinPipe implements PipeTransform {
  transform(value: string, args?: any, cvalue?: string): any {
    let num: number = 15;
    if (args) num = args;
    if (value.length > num) {
      cvalue = (cvalue == undefined) ? '...': '   ... click to ' + cvalue;
      const str = value.substr(0, num).replace(/\r?\n/g, '').replace('<br />', '') + cvalue;
      return str.replace('<br />', '');
    }

    return value.replace('<br />', '');
  }
}