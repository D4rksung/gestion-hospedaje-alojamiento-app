import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProgramacionDiaComponent } from './panel-programacion-dia.component';

describe('PanelProgramacionDiaComponent', () => {
  let component: PanelProgramacionDiaComponent;
  let fixture: ComponentFixture<PanelProgramacionDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelProgramacionDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProgramacionDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
