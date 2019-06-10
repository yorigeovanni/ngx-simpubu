import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataSatkerComponent } from './master-data-satker.component';

describe('MasterDataSatkerComponent', () => {
  let component: MasterDataSatkerComponent;
  let fixture: ComponentFixture<MasterDataSatkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataSatkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataSatkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
