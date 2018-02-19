import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class TodoService {

  getTodos() {
    return from([]);
  }

}
