import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataRegulasiComponent } from './master-data-regulasi.component';

describe('MasterDataRegulasiComponent', () => {
  let component: MasterDataRegulasiComponent;
  let fixture: ComponentFixture<MasterDataRegulasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataRegulasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataRegulasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
