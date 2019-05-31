import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SertifikasiComponent } from './sertifikasi.component';

describe('SertifikasiComponent', () => {
  let component: SertifikasiComponent;
  let fixture: ComponentFixture<SertifikasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SertifikasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SertifikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
