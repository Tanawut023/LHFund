import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyportComponent } from './myport.component';

describe('MyportComponent', () => {
  let component: MyportComponent;
  let fixture: ComponentFixture<MyportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
