import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalibrasiComponent } from './kalibrasi.component';

describe('KalibrasiComponent', () => {
  let component: KalibrasiComponent;
  let fixture: ComponentFixture<KalibrasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalibrasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalibrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
