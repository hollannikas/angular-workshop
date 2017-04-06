import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { TodoService } from '../shared/todo.service';
import { todoServiceStub } from '../testing/todo.service.mock';
import { MyDateFormatPipe } from '../shared/my-date-format.pipe';
import { Router } from '@angular/router';
import { RouterStub } from '../testing/router.mocks';
import { FormsModule } from '@angular/forms';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        TodoItemComponent,
        MyDateFormatPipe
      ],
      providers: [
        { provide: TodoService, useValue: todoServiceStub },
        { provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = { name: 'do stuff', done: false};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
