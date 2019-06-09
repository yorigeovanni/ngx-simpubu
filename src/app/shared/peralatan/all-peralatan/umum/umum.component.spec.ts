import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmumComponent } from './umum.component';

describe('UmumComponent', () => {
  let component: UmumComponent;
  let fixture: ComponentFixture<UmumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
