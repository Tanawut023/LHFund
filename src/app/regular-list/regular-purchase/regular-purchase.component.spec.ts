import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPurchaseComponent } from './regular-purchase.component';

describe('RegularPurchaseComponent', () => {
  let component: RegularPurchaseComponent;
  let fixture: ComponentFixture<RegularPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
