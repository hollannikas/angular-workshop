import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should add a todo', inject([TodoService], (service: TodoService) => {
    const todo = { name: 'bob', done: false};
    service.addTodo(todo);
    expect(service.getTodos()).toContain(todo);
  }));

  it('should add an id when adding a todo', inject([TodoService], (service: TodoService) => {
    const todo = { name: 'bob', done: false};
    service.addTodo(todo);
    expect(todo['id']).toBeTruthy();
  }));

});
