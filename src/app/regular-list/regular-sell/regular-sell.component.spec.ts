import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularSellComponent } from './regular-sell.component';

describe('RegularSellComponent', () => {
  let component: RegularSellComponent;
  let fixture: ComponentFixture<RegularSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
