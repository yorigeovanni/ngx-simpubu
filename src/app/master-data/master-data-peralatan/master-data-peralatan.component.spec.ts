import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataPeralatanComponent } from './master-data-peralatan.component';

describe('MasterDataPeralatanComponent', () => {
  let component: MasterDataPeralatanComponent;
  let fixture: ComponentFixture<MasterDataPeralatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataPeralatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataPeralatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
