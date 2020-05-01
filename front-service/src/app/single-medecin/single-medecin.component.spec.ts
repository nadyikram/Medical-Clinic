import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMedecinComponent } from './single-medecin.component';

describe('SingleMedecinComponent', () => {
  let component: SingleMedecinComponent;
  let fixture: ComponentFixture<SingleMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
