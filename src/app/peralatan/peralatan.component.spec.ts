import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeralatanComponent } from './peralatan.component';

describe('PeralatanComponent', () => {
  let component: PeralatanComponent;
  let fixture: ComponentFixture<PeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
