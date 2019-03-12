import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenamientoVinoComponent } from './almacenamiento-vino.component';

describe('AlmacenamientoVinoComponent', () => {
  let component: AlmacenamientoVinoComponent;
  let fixture: ComponentFixture<AlmacenamientoVinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenamientoVinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenamientoVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
