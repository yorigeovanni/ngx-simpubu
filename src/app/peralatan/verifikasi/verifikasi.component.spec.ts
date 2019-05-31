import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifikasiComponent } from './verifikasi.component';

describe('VerifikasiComponent', () => {
  let component: VerifikasiComponent;
  let fixture: ComponentFixture<VerifikasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifikasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
