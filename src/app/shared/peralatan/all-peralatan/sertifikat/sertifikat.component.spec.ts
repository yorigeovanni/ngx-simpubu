import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SertifikatComponent } from './sertifikat.component';

describe('SertifikatComponent', () => {
  let component: SertifikatComponent;
  let fixture: ComponentFixture<SertifikatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SertifikatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SertifikatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
