import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should add a todo', inject([TodoService], (service: TodoService) => {
    const todo = { description: 'bob', done: false};
    service.addTodo(todo);
    expect(service.getTodos()).toContain(todo);
  }));

  it('should remove a cloned todo from the correct index', inject([TodoService], (service: TodoService) => {
    const original = { description: 'bob', done: false};
    const clone = Object.assign({}, original);
    const startIndex = service.getTodos().length;
    service.addTodo(original);
    service.addTodo({ description: 'elisa', done: false});
    service.addTodo(clone);
    service.removeTodo(clone);
    const todos = service.getTodos();
    expect(todos[startIndex+1]).toBe(original);
  }));

});
