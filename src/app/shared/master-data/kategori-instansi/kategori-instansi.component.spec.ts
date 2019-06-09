import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriInstansiComponent } from './kategori-instansi.component';

describe('KategoriInstansiComponent', () => {
  let component: KategoriInstansiComponent;
  let fixture: ComponentFixture<KategoriInstansiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriInstansiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriInstansiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
