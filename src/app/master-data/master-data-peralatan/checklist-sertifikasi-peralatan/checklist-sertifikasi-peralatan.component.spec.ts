import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistSertifikasiPeralatanComponent } from './checklist-sertifikasi-peralatan.component';

describe('ChecklistSertifikasiPeralatanComponent', () => {
  let component: ChecklistSertifikasiPeralatanComponent;
  let fixture: ComponentFixture<ChecklistSertifikasiPeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistSertifikasiPeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistSertifikasiPeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
