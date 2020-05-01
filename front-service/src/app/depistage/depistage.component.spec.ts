import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepistageComponent } from './depistage.component';

describe('DepistageComponent', () => {
  let component: DepistageComponent;
  let fixture: ComponentFixture<DepistageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepistageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepistageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
