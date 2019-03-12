import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodtransComponent } from './bodtrans.component';

describe('BodtransComponent', () => {
  let component: BodtransComponent;
  let fixture: ComponentFixture<BodtransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodtransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
