import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfImageriesComponent } from './list-of-imageries.component';

describe('ListOfImageriesComponent', () => {
  let component: ListOfImageriesComponent;
  let fixture: ComponentFixture<ListOfImageriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfImageriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfImageriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
