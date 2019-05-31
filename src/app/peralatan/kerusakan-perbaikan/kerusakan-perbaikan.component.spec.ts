import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerusakanPerbaikanComponent } from './kerusakan-perbaikan.component';

describe('KerusakanPerbaikanComponent', () => {
  let component: KerusakanPerbaikanComponent;
  let fixture: ComponentFixture<KerusakanPerbaikanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerusakanPerbaikanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerusakanPerbaikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
