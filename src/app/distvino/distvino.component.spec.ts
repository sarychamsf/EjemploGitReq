import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistvinoComponent } from './distvino.component';

describe('DistvinoComponent', () => {
  let component: DistvinoComponent;
  let fixture: ComponentFixture<DistvinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistvinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistvinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
