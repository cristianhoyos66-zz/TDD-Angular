import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      providers: [ TodoService ]
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

  it('todos should have an object array', () => {
    const todoService = TestBed.get(TodoService);

    spyOn(todoService, 'getTodos').and.callFake(() => {
      return from([[
        {title: 'Cambiar el mundo'}
      ]]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
  });

  it('todos should have an object array',
  inject([TodoService], (todoService: TodoService) => {
    spyOn(todoService, 'getTodos').and.callFake(() => {
      return from([[
        {title: 'Cambiar el mundo'}
      ]]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
  })
);

});
