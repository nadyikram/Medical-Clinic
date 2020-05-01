import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImageriesComponent } from './single-imageries.component';

describe('SingleImageriesComponent', () => {
  let component: SingleImageriesComponent;
  let fixture: ComponentFixture<SingleImageriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleImageriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImageriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
