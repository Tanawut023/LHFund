import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseForSellComponent } from './purchase-for-sell.component';

describe('PurchaseForSellComponent', () => {
  let component: PurchaseForSellComponent;
  let fixture: ComponentFixture<PurchaseForSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseForSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseForSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
