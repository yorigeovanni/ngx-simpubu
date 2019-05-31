import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPeralatanComponent } from './all-peralatan.component';

describe('AllPeralatanComponent', () => {
  let component: AllPeralatanComponent;
  let fixture: ComponentFixture<AllPeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
