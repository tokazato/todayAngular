import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastLoanComponent } from './fast-loan.component';

describe('FastLoanComponent', () => {
  let component: FastLoanComponent;
  let fixture: ComponentFixture<FastLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
