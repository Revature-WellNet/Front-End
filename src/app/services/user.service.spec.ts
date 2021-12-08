import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { Vaccination } from 'src/app/models/vaccination';
import { NurseService } from 'src/app/services/nurse.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, Subscription } from 'rxjs';
import { Patient } from '../models/patient';
import { PatientCheckInComponent } from '../components/patient-check-in/patient-check-in.component';
import { routes } from '../app-routing.module';
import { AuthGuardGuard } from '../user-auth/services/auth-guard.guard';
import { ProfileComponent } from '../components/profile/profile.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { RegistrationService } from './registration.service';
import { User } from '../models/user';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock : HttpTestingController;
  let routerMock : Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[HttpClientTestingModule, RouterTestingModule],
      providers : [UserService]});
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
    routerMock = TestBed.inject(Router);
  });

  it('User Service should be created', () => {
    expect(service instanceof UserService).toBeTruthy();
  });
  
  it('should have Get User Function', ()=> {
    expect(service.getUser).toBeTruthy();
  });

  it('should have create or update user Function', ()=> {
    expect(service.createOrUpdateUser).toBeTruthy();
  });

  describe('getUser', () => {
    it('#getUser should return the User', (done) =>{
      
      let testIdString = "idString"

      const singularUser : User[] = 
        [{ id: testIdString, firstname: 'johnny', lastname: 'test', email: "johnny.test@hotmail.com",
          role: { roleId : 1, role : "nurse" },
        }];

      let response : User;
      
      spyOn(service, 'getUser')
        .withArgs(testIdString).and.returnValue(of(singularUser[0]));
      
      service.getUser(testIdString).subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(singularUser[0]);
        done();
      });

      httpMock.verify();
      
    });
  });

  describe('createOrUpdateUser', () => {
    it('#createOrUpdateUser should put a User', (done) =>{
      
      const singularUser : User[] = 
        [{ id: "idString", firstname: 'johnny', lastname: 'test', email: "johnny.test@hotmail.com",
          role: { roleId : 1, role : "nurse" },
        }];

      let responseSubscription = new Subscription( () => { return; } );

      spyOn(service, 'createOrUpdateUser').withArgs(singularUser[0]).and.returnValue(responseSubscription);

      expect(service.createOrUpdateUser(singularUser[0])).toEqual(responseSubscription);

      done();
      
    });
  });



});
