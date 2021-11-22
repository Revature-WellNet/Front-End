import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCheckInComponent } from './patient-check-in.component';

describe('PatientCheckInComponent', () => {
  let component: PatientCheckInComponent;
  let fixture: ComponentFixture<PatientCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
