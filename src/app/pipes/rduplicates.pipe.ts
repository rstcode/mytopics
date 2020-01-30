import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rduplicates'
})
export class RduplicatesPipe implements PipeTransform {

  transform(value: any[]): any {
    if (value == null || value == undefined)
      return value;
    let val = value.filter((el, i, a) => i === a.indexOf(el));

    return val.sort((a, b) => (a.Type.length > b.Type.length) ? 1 : ((b.Type.length > a.Type.length) ? -1 : 0));
  }

}
