import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisiDaratComponent } from './sisi-darat.component';

describe('SisiDaratComponent', () => {
  let component: SisiDaratComponent;
  let fixture: ComponentFixture<SisiDaratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisiDaratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisiDaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
