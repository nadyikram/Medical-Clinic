import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDepistageComponent } from './list-of-depistage.component';

describe('ListOfDepistageComponent', () => {
  let component: ListOfDepistageComponent;
  let fixture: ComponentFixture<ListOfDepistageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfDepistageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDepistageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
