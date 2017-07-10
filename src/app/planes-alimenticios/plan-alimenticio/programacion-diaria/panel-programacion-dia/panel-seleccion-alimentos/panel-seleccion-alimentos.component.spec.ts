import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSeleccionAlimentosComponent } from './panel-seleccion-alimentos.component';

describe('PanelSeleccionAlimentosComponent', () => {
  let component: PanelSeleccionAlimentosComponent;
  let fixture: ComponentFixture<PanelSeleccionAlimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSeleccionAlimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSeleccionAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
