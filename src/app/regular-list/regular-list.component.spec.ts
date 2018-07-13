import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularListComponent } from './regular-list.component';

describe('RegularListComponent', () => {
  let component: RegularListComponent;
  let fixture: ComponentFixture<RegularListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
