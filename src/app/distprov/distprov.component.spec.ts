import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistprovComponent } from './distprov.component';

describe('DistprovComponent', () => {
  let component: DistprovComponent;
  let fixture: ComponentFixture<DistprovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistprovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
