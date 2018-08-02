import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateLtfComponent } from './certificate-ltf.component';

describe('CertificateLtfComponent', () => {
  let component: CertificateLtfComponent;
  let fixture: ComponentFixture<CertificateLtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateLtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateLtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
