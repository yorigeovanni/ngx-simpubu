import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonilComponent } from './personil.component';

describe('PersonilComponent', () => {
  let component: PersonilComponent;
  let fixture: ComponentFixture<PersonilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
