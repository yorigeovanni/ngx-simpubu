import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataPersonilComponent } from './master-data-personil.component';

describe('MasterDataPersonilComponent', () => {
  let component: MasterDataPersonilComponent;
  let fixture: ComponentFixture<MasterDataPersonilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataPersonilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataPersonilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
