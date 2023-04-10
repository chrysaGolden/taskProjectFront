import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any[], willDo: string): any[] {
    if (!todos || !willDo) {
      return todos;
    }
  
    return todos.filter(todo => todo.willDo === willDo);
  }

}
