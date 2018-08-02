import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAvailableListComponent } from './not-available-list.component';

describe('NotAvailableListComponent', () => {
  let component: NotAvailableListComponent;
  let fixture: ComponentFixture<NotAvailableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAvailableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAvailableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
