import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanesAlimenticiosComponent } from './lista-planes-alimenticios.component';

describe('ListaPlanesAlimenticiosComponent', () => {
  let component: ListaPlanesAlimenticiosComponent;
  let fixture: ComponentFixture<ListaPlanesAlimenticiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlanesAlimenticiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanesAlimenticiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
