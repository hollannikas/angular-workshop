import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TodoComponent } from "./todo/todo.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { TodoService } from "./shared/todo.service";
import { todoServiceStub } from "./shared/todo.service.mock";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoComponent,
        TodoItemComponent,
        AddTodoComponent
      ],
      providers: [ { provide: TodoService, useValue: todoServiceStub } ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Todo app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Todo app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todo app');
  }));
});
