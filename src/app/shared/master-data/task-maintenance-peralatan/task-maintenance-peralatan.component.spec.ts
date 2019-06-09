import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMaintenancePeralatanComponent } from './task-maintenance-peralatan.component';

describe('TaskMaintenancePeralatanComponent', () => {
  let component: TaskMaintenancePeralatanComponent;
  let fixture: ComponentFixture<TaskMaintenancePeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskMaintenancePeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMaintenancePeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
