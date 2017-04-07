import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import { TodoService } from '../shared/todo.service';
import { todoServiceStub } from '../testing/todo.service.mock';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AddTodoComponent ],
      providers: [
        { provide: Store, useValue: {} },
        { provide: TodoService, useValue: todoServiceStub }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
