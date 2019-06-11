import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistVerifikasiPeralatanComponent } from './checklist-verifikasi-peralatan.component';

describe('ChecklistVerifikasiPeralatanComponent', () => {
  let component: ChecklistVerifikasiPeralatanComponent;
  let fixture: ComponentFixture<ChecklistVerifikasiPeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistVerifikasiPeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistVerifikasiPeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
