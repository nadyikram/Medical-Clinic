import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceImagerieComponent } from './service-imagerie.component';

describe('ServiceImagerieComponent', () => {
  let component: ServiceImagerieComponent;
  let fixture: ComponentFixture<ServiceImagerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceImagerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceImagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
