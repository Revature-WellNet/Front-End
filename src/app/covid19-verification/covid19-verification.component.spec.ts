import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19VerificationComponent } from './covid19-verification.component';

describe('Covid19VerificationComponent', () => {
  let component: Covid19VerificationComponent;
  let fixture: ComponentFixture<Covid19VerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid19VerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19VerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
