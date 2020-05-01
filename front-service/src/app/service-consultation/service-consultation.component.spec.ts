import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConsultationComponent } from './service-consultation.component';

describe('ServiceConsultationComponent', () => {
  let component: ServiceConsultationComponent;
  let fixture: ComponentFixture<ServiceConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
