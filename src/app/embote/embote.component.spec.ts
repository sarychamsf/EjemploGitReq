import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmboteComponent } from './embote.component';

describe('EmboteComponent', () => {
  let component: EmboteComponent;
  let fixture: ComponentFixture<EmboteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmboteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmboteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
