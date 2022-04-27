import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { Vaccination } from 'src/app/models/vaccination';
import { NurseService } from 'src/app/services/nurse.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Patient } from '../models/patient';
import { PatientCheckInComponent } from '../components/patient-check-in/patient-check-in.component';
import { routes } from '../app-routing.module';
import { AuthGuardGuard } from '../user-auth/services/auth-guard.guard';
import { ProfileComponent } from '../components/profile/profile.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { RegistrationService } from './registration.service';
import { User } from '../models/user';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let httpMock : HttpTestingController;
  let routerMock : Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[HttpClientTestingModule, RouterTestingModule],
      providers : [RegistrationService]});
    service = TestBed.inject(RegistrationService);
    httpMock = TestBed.inject(HttpTestingController);
    routerMock = TestBed.inject(Router);
  });

  it('should have Override Null Function', ()=> {
    expect(service.overrideNull).toBeTruthy();
  });

  it('should have Post Registration Function', ()=> {
    expect(service.postRegistration).toBeTruthy();
  });

  it('should have Route To Nurse Function', ()=> {
    expect(service.routeToNurseComponent).toBeTruthy();
  });

  describe('overrideNull', () => {
    it('#overrideNull should return session storage token', () => {

      let tokenSeen = sessionStorage.getItem('token');
      let expectation : String;

      if (tokenSeen === null) { expectation = ''; }
      else { expectation = (sessionStorage.getItem('token'))!; }

      expect(service.overrideNull()).toEqual(expectation);

    });
  });

  describe('postRegistration', () => {
    it('#postRegistration should register A User', (done) =>{
      
      const dateToUse : Date = new Date();

      const singularUser : User[] = 
        [{ id: "idString", firstname: 'johnny', lastname: 'test', email: "johnny.test@hotmail.com",
          role: { roleId : 1, role : "nurse" },
        }];

      let response : User[];
      
      spyOn(service, 'postRegistration')
        .withArgs(singularUser[0]).and.returnValue(Promise.resolve(singularUser));

      service.postRegistration(singularUser[0]).then( (res) => { 
        response = res; 
        
        expect(response).toEqual(singularUser);

        done();
        
      });

      httpMock.verify();
      
    });
  });

  describe('routeToNurseComponent', () => {
    it('#routeToNurseComponent should route to Registration', () =>{
      
      const expectedRoute = { path: "",  redirectTo: "login", pathMatch: "full" }

      expect(routes).toContain(expectedRoute);
      
    });
  })

})