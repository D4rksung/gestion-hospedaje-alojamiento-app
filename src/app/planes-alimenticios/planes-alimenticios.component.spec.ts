import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesAlimenticiosComponent } from './planes-alimenticios.component';

describe('PlanesAlimenticiosComponent', () => {
  let component: PlanesAlimenticiosComponent;
  let fixture: ComponentFixture<PlanesAlimenticiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesAlimenticiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesAlimenticiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
