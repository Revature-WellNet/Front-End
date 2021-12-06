import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Covid19VerificationService } from '../services/covid19-verification.service';
import { UserService } from '../services/user.service';



import { Covid19VerificationComponent } from './covid19-verification.component';
import { of } from 'rxjs';

// describe('Covid19VerificationComponent', () => {
//   let component: Covid19VerificationComponent;
//   let fixture: ComponentFixture<Covid19VerificationComponent>;

  let serviceStub: any;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ Covid19VerificationComponent ],
      providers:[{provide: UserService, useValue: serviceStub}, {provide: Covid19VerificationService, useValue: serviceStub}]

    })
    .compileComponents();
  });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(Covid19VerificationComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
