import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImagerieComponent } from './edit-imagerie.component';

describe('EditImagerieComponent', () => {
  let component: EditImagerieComponent;
  let fixture: ComponentFixture<EditImagerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImagerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
