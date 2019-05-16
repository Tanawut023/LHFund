import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterforwarningComponent } from './footerforwarning.component';

describe('FooterforwarningComponent', () => {
  let component: FooterforwarningComponent;
  let fixture: ComponentFixture<FooterforwarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterforwarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterforwarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
