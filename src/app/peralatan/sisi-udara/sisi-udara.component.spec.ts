import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisiUdaraComponent } from './sisi-udara.component';

describe('SisiUdaraComponent', () => {
  let component: SisiUdaraComponent;
  let fixture: ComponentFixture<SisiUdaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisiUdaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisiUdaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
