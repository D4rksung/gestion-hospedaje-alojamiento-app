import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriosSeleccionComponent } from './criterios-seleccion.component';

describe('CriteriosSeleccionComponent', () => {
  let component: CriteriosSeleccionComponent;
  let fixture: ComponentFixture<CriteriosSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriosSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriosSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
