import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rduplicates'
})
export class RduplicatesPipe implements PipeTransform {

  transform(value: any[]): any {
    if (value == null || value == undefined)
      return value;
    return value.filter((el, i, a) => i === a.indexOf(el));
  }

}
