import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuCadangComponent } from './suku-cadang.component';

describe('SukuCadangComponent', () => {
  let component: SukuCadangComponent;
  let fixture: ComponentFixture<SukuCadangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuCadangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuCadangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
