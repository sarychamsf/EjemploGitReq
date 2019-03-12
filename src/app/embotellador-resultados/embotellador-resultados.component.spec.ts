import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbotelladorResultadosComponent } from './embotellador-resultados.component';

describe('EmbotelladorResultadosComponent', () => {
  let component: EmbotelladorResultadosComponent;
  let fixture: ComponentFixture<EmbotelladorResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbotelladorResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbotelladorResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
