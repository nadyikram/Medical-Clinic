import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDepistageComponent } from './single-depistage.component';

describe('SingleDepistageComponent', () => {
  let component: SingleDepistageComponent;
  let fixture: ComponentFixture<SingleDepistageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDepistageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDepistageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
