import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLotesComponent } from './registro-lotes.component';

describe('RegistroLotesComponent', () => {
  let component: RegistroLotesComponent;
  let fixture: ComponentFixture<RegistroLotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
