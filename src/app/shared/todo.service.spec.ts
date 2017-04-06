import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Http, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  /* FIXME this needs a test
  it('should add a todo', inject([TodoService], (service: TodoService) => {
    const todo = { name: 'bob', done: false};
    service.addTodo(todo);
    expect(service.getTodos()).toContain(todo);
  }));
   */

});
