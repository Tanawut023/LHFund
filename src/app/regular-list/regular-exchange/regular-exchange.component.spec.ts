import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularExchangeComponent } from './regular-exchange.component';

describe('RegularExchangeComponent', () => {
  let component: RegularExchangeComponent;
  let fixture: ComponentFixture<RegularExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
