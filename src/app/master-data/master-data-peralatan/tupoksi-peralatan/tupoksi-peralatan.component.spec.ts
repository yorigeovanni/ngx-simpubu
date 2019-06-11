import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TupoksiPeralatanComponent } from './tupoksi-peralatan.component';

describe('TupoksiPeralatanComponent', () => {
  let component: TupoksiPeralatanComponent;
  let fixture: ComponentFixture<TupoksiPeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TupoksiPeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TupoksiPeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
