import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmfLtfComponent } from './rmf-ltf.component';

describe('RmfLtfComponent', () => {
  let component: RmfLtfComponent;
  let fixture: ComponentFixture<RmfLtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmfLtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmfLtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
