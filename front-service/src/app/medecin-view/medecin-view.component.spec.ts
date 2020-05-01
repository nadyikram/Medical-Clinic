import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinViewComponent } from './medecin-view.component';

describe('MedecinViewComponent', () => {
  let component: MedecinViewComponent;
  let fixture: ComponentFixture<MedecinViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
