import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRegistroSecosComponent } from './nuevo-registro-secos.component';

describe('NuevoRegistroSecosComponent', () => {
  let component: NuevoRegistroSecosComponent;
  let fixture: ComponentFixture<NuevoRegistroSecosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoRegistroSecosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoRegistroSecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
