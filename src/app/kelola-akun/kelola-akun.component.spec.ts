import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelolaAkunComponent } from './kelola-akun.component';

describe('KelolaAkunComponent', () => {
  let component: KelolaAkunComponent;
  let fixture: ComponentFixture<KelolaAkunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelolaAkunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelolaAkunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
