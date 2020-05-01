import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepistageComponent } from './edit-depistage.component';

describe('EditDepistageComponent', () => {
  let component: EditDepistageComponent;
  let fixture: ComponentFixture<EditDepistageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepistageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepistageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
