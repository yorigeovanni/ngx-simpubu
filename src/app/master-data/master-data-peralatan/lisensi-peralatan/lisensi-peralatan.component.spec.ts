import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisensiPeralatanComponent } from './lisensi-peralatan.component';

describe('LisensiPeralatanComponent', () => {
  let component: LisensiPeralatanComponent;
  let fixture: ComponentFixture<LisensiPeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisensiPeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisensiPeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
