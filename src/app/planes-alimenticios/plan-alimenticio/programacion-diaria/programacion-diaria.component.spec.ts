import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionDiariaComponent } from './programacion-diaria.component';

describe('ProgramacionDiariaComponent', () => {
  let component: ProgramacionDiariaComponent;
  let fixture: ComponentFixture<ProgramacionDiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionDiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
