import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { Vaccination } from 'src/app/models/vaccination';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Patient } from '../models/patient';


describe('DoctorService', () => {
  let service: DoctorService;
  let httpMock : HttpTestingController;
  let routerMock : Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[HttpClientTestingModule, RouterTestingModule],
      providers : [DoctorService]});
    service = TestBed.inject(DoctorService);
    httpMock = TestBed.inject(HttpTestingController);
    routerMock = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have get patients', ()=> {
    expect(service.getPatients).toBeTruthy();
  });

  it('should have get patients By Doc ID', ()=> {
    expect(service.getPatientsByDocId).toBeTruthy();
  });

  it('should have get patients By Doc ID User', ()=> {
    expect(service.getPatientsByDocIdUser).toBeTruthy();
  });

  it('should have get patients By Doc Name', ()=> {
    expect(service.getPatientsByDoctorName).toBeTruthy();
  });

  it('should have get patients By Log In Information', ()=> {
    expect(service.getUserInfo).toBeTruthy();
  });

//done: DoneFn
  describe('getPatients', () => {
  it('#getPatients should return all patients', () =>{
    
    const vacc1 : Vaccination = new Vaccination(1, "Walrus Pox");

    const somePatients : Patient[] = 
    [{
      patientId: 1,
      firstName: 'johnny',
      lastName: 'test', 
      dob: new Date, 
      height: 72, 
      weight: 200, 
      bloodType: { 
        typeId : 4,
        type : "A+" },
      sex: {
        sexId: 1,
        sex: 'male'
      },
      patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
      patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
    },
    {
      patientId: 2,
      firstName: 'johnny2',
      lastName: 'test2', 
      dob: new Date, 
      height: 72, 
      weight: 200, 
      bloodType: { 
        typeId : 4,
        type : "A+" },
      sex: {
        sexId: 1,
        sex: 'male'
    },
      patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
      patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
    },
    {
      patientId: 3,
      firstName: 'johnny3',
      lastName: 'test3', 
      dob: new Date, 
      height: 72, 
      weight: 200, 
      bloodType: { 
        typeId : 4,
        type : "A+" },
      sex: {
        sexId: 1,
        sex: 'male'
      },  //{new Vaccination(1, "Walrus Pox")},
      patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
      patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
  }
  ];

    // console.log("Outside Get Patients Subscription");

    let response : Patient[];
    
    spyOn(service, 'getPatients').and.returnValue(of(somePatients));
    
    service.getPatients().subscribe( (res) => { 
      // console.log(response);

      response = res; 
       //console.log(response); 
      expect(response).toEqual(somePatients);
    });

    // service.detectChanges();

    // let response2 : Patient[];

    // console.log(Object(service.getPatients()).value);
    // console.log(somePatients);
    // console.log(response);

    // expect(response).toEqual(somePatients);

    // service.getPatients().subscribe(
    //   (patients: Patient[]) => {
    //     console.log("Inside Get Patients Subscription");
    //     expect(patients.length).toBe(3);
    //     expect(patients).toEqual(somePatients);
    //     //done();
    //   },
    //   //done.fail
    // ); 
    // expect(httpMock.expectOne(``));

    httpMock.verify();
    
  });
  });



  
  describe('getPatientsByDoctorName', () => {
    it('#getPatientsByDoctorName should return all patients for a given doctor', () =>{
      
      const somePatients : Patient[] = 
      [{
        patientId: 1,
        firstName: 'johnny',
        lastName: 'test', 
        dob: new Date, 
        height: 72, 
        weight: 200, 
        bloodType: { 
          typeId : 4,
          type : "A+" },
        sex: {
          sexId: 1,
          sex: 'male'
        },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
      },
      {
        patientId: 2,
        firstName: 'johnny2',
        lastName: 'test2', 
        dob: new Date, 
        height: 72, 
        weight: 200, 
        bloodType: { 
          typeId : 4,
          type : "A+" },
        sex: {
          sexId: 1,
          sex: 'male'
      },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
      },
      {
        patientId: 3,
        firstName: 'johnny3',
        lastName: 'test3', 
        dob: new Date, 
        height: 72, 
        weight: 200, 
        bloodType: { 
          typeId : 4,
          type : "A+" },
        sex: {
          sexId: 1,
          sex: 'male'
        },  //{new Vaccination(1, "Walrus Pox")},
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
    }
    ];

      let response : Patient[];
      
      spyOn(service, 'getPatientsByDoctorName').and.returnValue(of(somePatients));
      
      service.getPatientsByDoctorName("Bob", "Bar").subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(somePatients);
      });

      httpMock.verify();
      
    });
  });

  
  describe('getUserInfo', () => {
    it('#getUserInfo should return all patients for logged in doctor', () =>{
      
      const somePatients : Patient[] = 
      [{
        patientId: 1,
        firstName: 'johnny',
        lastName: 'test', 
        dob: new Date, 
        height: 72, 
        weight: 200, 
        bloodType: { 
          typeId : 4,
          type : "A+" },
        sex: {
          sexId: 1,
          sex: 'male'
        },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
      },
      {
        patientId: 2,
        firstName: 'johnny2',
        lastName: 'test2', 
        dob: new Date, 
        height: 72, 
        weight: 200, 
        bloodType: { 
          typeId : 4,
          type : "A+" },
        sex: {
          sexId: 1,
          sex: 'male'
      },
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
      },
      {
        patientId: 3,
        firstName: 'johnny3',
        lastName: 'test3', 
        dob: new Date, 
        height: 72, 
        weight: 200, 
        bloodType: { 
          typeId : 4,
          type : "A+" },
        sex: {
          sexId: 1,
          sex: 'male'
        },  //{new Vaccination(1, "Walrus Pox")},
        patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
        patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
    }
    ];

      let response : Patient[];
      
      spyOn(service, 'getPatientsByDoctorName').and.returnValue(of(somePatients));
      
      service.getPatientsByDoctorName("Bob", "Bar").subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(somePatients);
      });

      httpMock.verify();
      
    });
  });
















//   it('should return an error when server returns 404', (done: DoneFn)=>{
//     const error = new HttpErrorResponse({
//       error: 'test 404 error',
//       status: 404, statusText: 'Not Found'
//     });


//     //let response : Patient[] = [];
//     //let response : String = '';

//     let response : Response;
  
//     spyOn(service, 'getPatients').and.throwError('404 jioji');//rejectWith();//throwError('404');

//     expect( service.getPatients().toThrowError('404 jioji');

//     //expectSnackbar('error', '404');

//     console.log("Before Subscription jiojioj");
//  //console.log(response.status);

//       //expect( () => Object(service.getPatients()).toThrowError('404'));

//     //let test = service.getPatients(null);

//   //   service.getPatients().subscribe( (_patients: any) =>  {
//   //     done.fail('expected an error, not patients')

//   //     console.log("Object Get Gotted");
     
//   // },
//   //     (error: { message: any; }) => {

//   //       console.log("Expected Error");

//   //       expect(error.message).toContain('test 404 error');
//   //       done();
//   //     }
//   //   );

//   });
});