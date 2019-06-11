import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalibrasiPeralatanComponent } from './kalibrasi-peralatan.component';

describe('KalibrasiPeralatanComponent', () => {
  let component: KalibrasiPeralatanComponent;
  let fixture: ComponentFixture<KalibrasiPeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalibrasiPeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalibrasiPeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
