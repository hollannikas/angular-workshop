

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { TodoService } from '../shared/todo.service';

@Injectable()
export class TodoEffects {


  @Effect({dispatch: false}) log$ = this.actions$
    .do(action => console.log(action));


  @Effect() load$: Observable<any> = this.actions$
    .ofType('LOAD')
    .switchMap(() => this.service.getTodos()
      .map((todos) => ({type: 'LOADED', payload: todos}))
      .catch(() => Observable.of({type: 'ACTION_ERROR'}))
    );

  @Effect() add$: Observable<any> = this.actions$
    .ofType('ADD')
    .switchMap((action) => this.service.addTodo(action.payload)
      .map(() => ({type: 'LOAD'}))
      .catch(() => Observable.of({type: 'ACTION_ERROR'}))
    );

  @Effect() remove$: Observable<any> = this.actions$
    .ofType('REMOVE')
    .switchMap((action) => this.service.removeTodo(action.payload)
      .map(() => ({type: 'LOAD'}))
      .catch(() => Observable.of({type: 'ACTION_ERROR'}))
    );

  constructor(
    private actions$: Actions,
    private service: TodoService
  ) {}
}
