import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Covid19VerificationService } from '../services/covid19-verification.service';
import { FirebaseService } from '../user-auth/services/firebase.service';

import { LockoutComponent } from './lockout.component';

import { of } from 'rxjs';

describe('LockoutComponent', () => {
  let component: LockoutComponent;
  let fixture: ComponentFixture<LockoutComponent>;

  let serviceStub: any;

  beforeEach(async () => {
    serviceStub

    await TestBed.configureTestingModule({
      declarations: [ LockoutComponent ], 
      providers:[{provide: FirebaseService, useValue: serviceStub}, {provide: Covid19VerificationService, useValue: serviceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

it('should call ')