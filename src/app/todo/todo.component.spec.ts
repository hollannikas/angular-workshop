import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { TodoService } from "../shared/todo.service";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { FormsModule } from "@angular/forms";
import {MyDateFormatPipe} from "../shared/my-date-format.pipe";
import {RouterStub} from "../testing/router.mocks";
import {Router} from "@angular/router";

const todoServiceStub = {
  getTodos: () => [{description: "do stuff", done: false}]
};

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        TodoComponent,
        TodoItemComponent,
        AddTodoComponent,
        MyDateFormatPipe
      ],
      providers: [
        { provide: TodoService, useValue: todoServiceStub },
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
