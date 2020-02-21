import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any): any {

    if (value.length > 15) {
      return value.substr(0, 15) + ' ...';
    }
    return value;
  }

}
