import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDepistageComponent } from './service-depistage.component';

describe('ServiceDepistageComponent', () => {
  let component: ServiceDepistageComponent;
  let fixture: ComponentFixture<ServiceDepistageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDepistageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDepistageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
