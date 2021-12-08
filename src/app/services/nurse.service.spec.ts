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

describe('NurseService', () => {
  let service: NurseService;
  let httpMock : HttpTestingController;
  let routerMock : Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[HttpClientTestingModule, RouterTestingModule],
      providers : [NurseService]});
    service = TestBed.inject(NurseService);
    httpMock = TestBed.inject(HttpTestingController);
    routerMock = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have get patients Method', ()=> {
    expect(service.getPatients).toBeTruthy();
  });

  it('should have get patients By ID Method', ()=> {
    expect(service.getPatientById).toBeTruthy();
  });

  it('should have get patients By First Name Method', ()=> {
    expect(service.getPatientByFirstName).toBeTruthy();
  });

  
  it('should have get patients By Full Name Method', ()=> {
    expect(service.getPatientByFullName).toBeTruthy();
  });

  it('should have get patients By Name And DOB Method', ()=> {
    expect(service.getPatientByNameDOB).toBeTruthy();
  });

  it('should have add Patients Method', ()=> {
    expect(service.addPatients).toBeTruthy();
  });

  it('should have get User Info Method', ()=> {
    expect(service.getUserInfo).toBeTruthy();
  });

  it('should have logout Method', ()=> {
    expect(service.logout).toBeTruthy();
  });
 
  it('should have go Back Method', ()=> {
    expect(service.goBack).toBeTruthy();
  });




  // getPatients(): Observable<Patient[]>{
  //   console.log("This will return patients");
  //   return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient`);
  // // }
  describe('getPatients', () => {
    it('#getPatients should return all patients', () =>{
      
      const somePatients : Patient[] = 
      [{ patientId: 1, firstName: 'johnny', lastName: 'test', dob: new Date, 
        height: 72, weight: 200, 
        bloodType: { typeId : 4, type : "A+" },
        sex: { sexId: 1, sex: 'male' },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
        fullName():string{return (this.firstName + " " + this.lastName);}
        },
      { patientId: 2, firstName: 'johnny2', lastName: 'test2', dob: new Date, 
        height: 72, weight: 200, 
        bloodType: { typeId : 4, type : "A+" },
        sex: { sexId: 1, sex: 'male' },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
        fullName():string{return (this.firstName + " " + this.lastName);}
      },
      { patientId: 3, firstName: 'johnny3', lastName: 'test3', dob: new Date, 
        height: 72, weight: 200, 
        bloodType: { typeId : 4, type : "A+" },
        sex: { sexId: 1, sex: 'male' },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
        fullName():string{return (this.firstName + " " + this.lastName);}
      }
    ];

      let response : Patient[];
      
      spyOn(service, 'getPatients').and.returnValue(of(somePatients));
      
      service.getPatients().subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(somePatients);
      });

      httpMock.verify();
      
    });
  });

  
// getPatientById(patientId:number): Observable<Patient>{
//     console.log("This will return patients");
//     return this.http.get<Patient>(`${this.patientApiServerUrl}patient/${patientId}`);
//   }
describe('getPatientById', () => {
    it('#getPatientById should return all patients', () =>{
      
      const singularPatient : Patient = 
        { patientId: 1, firstName: 'johnny', lastName: 'test', dob: new Date, 
        height: 72, weight: 200, 
        bloodType: { typeId : 4, type : "A+" },
        sex: { sexId: 1, sex: 'male' },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
        fullName():string{return (this.firstName + " " + this.lastName);}
        }

      let response : Patient;
      
      spyOn(service, 'getPatientById').and.returnValue(of(singularPatient));
      
      service.getPatientById(4).subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(singularPatient);
      });

      httpMock.verify();
      
    });
  });

  // //getPatientByFirstName(firstName: string) :Observable<Patient[]>{
  //   console.log("in function");
  //   return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient/firstname/${firstName}`);
  // }
  describe('getPatientByFirstName', () => {
    it('#getPatientByFirstName should return all patients', () =>{
      
      const singularPatient : Patient[] = 
        [{ patientId: 1, firstName: 'johnny', lastName: 'test', dob: new Date, 
        height: 72, weight: 200, 
        bloodType: { typeId : 4, type : "A+" },
        sex: { sexId: 1, sex: 'male' },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
        fullName():string{return (this.firstName + " " + this.lastName);}
        }];

      let response : Patient[];
      
      spyOn(service, 'getPatientByFirstName')
        .withArgs("johnny").and.returnValue(of(singularPatient));
      
      service.getPatientByFirstName("johnny").subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(singularPatient);
      });

      httpMock.verify();
      
    });
  });


  // // getPatientByFullName(firstName: string, lastName: string): Observable<Patient[]>{
  //   return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient/fullname/${firstName}/${lastName}`);
  // }
  describe('getPatientByFullName', () => {
    it('#getPatientByFullName should return all patients', () =>{
      
      const singularPatient : Patient[] = 
        [{ patientId: 1, firstName: 'johnny', lastName: 'test', dob: new Date, 
        height: 72, weight: 200, 
        bloodType: { typeId : 4, type : "A+" },
        sex: { sexId: 1, sex: 'male' },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
        fullName():string{return (this.firstName + " " + this.lastName);}
        }];

      let response : Patient[];
      
      spyOn(service, 'getPatientByFullName')
        .withArgs("johnny", "test").and.returnValue(of(singularPatient));
      
      service.getPatientByFullName("johnny", "test").subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(singularPatient);
      });

      httpMock.verify();
      
    });
  });

  // getPatientByNameDOB(firstName: string, lastName: string, dob: string): Observable<Patient[]>{
  //   return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient/fullnamedob/${firstName}/${lastName}/${dob}`);
  // }
  describe('getPatientByNameDOB', () => {
    it('#getPatientByNameDOB should return all patients', () =>{
      
      const dateToUse : Date = new Date();

      const singularPatient : Patient[] = 
        [{ patientId: 1, firstName: 'johnny', lastName: 'test', dob: dateToUse, 
        height: 72, weight: 200, 
        bloodType: { typeId : 4, type : "A+" },
        sex: { sexId: 1, sex: 'male' },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
        fullName():string{return (this.firstName + " " + this.lastName);}
        }];

      let response : Patient[];
      
      spyOn(service, 'getPatientByNameDOB')
        .withArgs("johnny", "test", dateToUse.toString()).and.returnValue(of(singularPatient));
      
      service.getPatientByNameDOB("johnny", "test", dateToUse.toString()).subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(singularPatient);
      });

      httpMock.verify();
      
    });
  });


  describe('getPatientByNameDOB', () => {
    it('#getPatientByNameDOB should return all patients', () =>{
      
      const dateToUse : Date = new Date();

      const singularPatient : Patient[] = 
        [{ patientId: 1, firstName: 'johnny', lastName: 'test', dob: dateToUse, 
        height: 72, weight: 200, 
        bloodType: { typeId : 4, type : "A+" },
        sex: { sexId: 1, sex: 'male' },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
        fullName():string{return (this.firstName + " " + this.lastName);}
        }];

      let response : Patient[];
      
      spyOn(service, 'getPatientByNameDOB')
        .withArgs("johnny", "test", dateToUse.toString()).and.returnValue(of(singularPatient));
      
      service.getPatientByNameDOB("johnny", "test", dateToUse.toString()).subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(singularPatient);
      });

      httpMock.verify();
      
    });
  });


  // addPatients(): void{
  //     this.router.navigate(['patientcheckin']);
  //   // return this.http.post<Patient>(`${this.patientApiServerUrl}/diagnosis/patient`, patient);
  // }
  describe('addPatients', () => {
    it('#addPatients should route to Patient Check In', () =>{
      
      const expectedRoute = { path:"patientcheckin", canActivate:[AuthGuardGuard], component:PatientCheckInComponent }

      expect(routes).toContain(expectedRoute);
      
    });
  })

  
  // getUserInfo(){
  //   this.router.navigate(['profile']);
  // }
  describe('getUserInfo', () => {
    it('#getUserInfo should route to Profile', () =>{
      
      const expectedRoute = { path: "profile", canActivate:[AuthGuardGuard], component: ProfileComponent }

      expect(routes).toContain(expectedRoute);
      
    });
  })

  // logout(){
  //   this.router.navigate(["registration"]);
  // }
  describe('logout', () => {
    it('#logout should route to Registration', () =>{
      
      const expectedRoute = { path: "registration", component: RegistrationComponent }

      expect(routes).toContain(expectedRoute);
      
    });
  })


})