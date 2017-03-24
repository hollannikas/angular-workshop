import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoComponent } from './edit-todo.component';
import {FormsModule} from "@angular/forms";
import {todoServiceStub} from "../testing/todo.service.mock";
import {TodoService} from "../shared/todo.service";
import {ActivatedRoute} from "@angular/router";
import {ActivatedRouteStub} from "../testing/router.mocks";

describe('EditTodoComponent', () => {
  let component: EditTodoComponent;
  let fixture: ComponentFixture<EditTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditTodoComponent ],
      providers: [
        { provide: TodoService, useValue: todoServiceStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoComponent);
    component = fixture.componentInstance;
    component.todo = { description: "do stuff", done: false};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
