import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YandarComponent } from './yandar.component';

describe('YandarComponent', () => {
  let component: YandarComponent;
  let fixture: ComponentFixture<YandarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YandarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
