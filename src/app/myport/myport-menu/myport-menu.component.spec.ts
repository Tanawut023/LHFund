import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyportMenuComponent } from './myport-menu.component';

describe('MyportMenuComponent', () => {
  let component: MyportMenuComponent;
  let fixture: ComponentFixture<MyportMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyportMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyportMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
