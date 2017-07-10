import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionNutricionalComponent } from './informacion-nutricional.component';

describe('InformacionNutricionalComponent', () => {
  let component: InformacionNutricionalComponent;
  let fixture: ComponentFixture<InformacionNutricionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionNutricionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionNutricionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
