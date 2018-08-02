import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRmfComponent } from './certificate-rmf.component';

describe('CertificateRmfComponent', () => {
  let component: CertificateRmfComponent;
  let fixture: ComponentFixture<CertificateRmfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateRmfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateRmfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
