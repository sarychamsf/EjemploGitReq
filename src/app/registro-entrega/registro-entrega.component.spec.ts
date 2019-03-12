import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntregaComponent } from './registro-entrega.component';

describe('RegistroEntregaComponent', () => {
  let component: RegistroEntregaComponent;
  let fixture: ComponentFixture<RegistroEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
