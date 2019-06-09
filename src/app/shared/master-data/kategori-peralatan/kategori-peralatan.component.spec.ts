import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriPeralatanComponent } from './kategori-peralatan.component';

describe('KategoriPeralatanComponent', () => {
  let component: KategoriPeralatanComponent;
  let fixture: ComponentFixture<KategoriPeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriPeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriPeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
