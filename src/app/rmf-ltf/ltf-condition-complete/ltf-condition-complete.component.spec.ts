import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtfConditionCompleteComponent } from './ltf-condition-complete.component';

describe('LtfConditionCompleteComponent', () => {
  let component: LtfConditionCompleteComponent;
  let fixture: ComponentFixture<LtfConditionCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtfConditionCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtfConditionCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
