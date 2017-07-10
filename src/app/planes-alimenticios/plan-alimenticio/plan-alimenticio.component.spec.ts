import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAlimenticioComponent } from './plan-alimenticio.component';

describe('PlanAlimenticioComponent', () => {
  let component: PlanAlimenticioComponent;
  let fixture: ComponentFixture<PlanAlimenticioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAlimenticioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAlimenticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
