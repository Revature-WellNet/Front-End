// import { HttpErrorResponse } from '@angular/common/http';
// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


// import { Vaccination } from 'src/app/models/vaccination';
// import { Allergy } from 'src/app/models/allergy';
// import { DoctorService } from 'src/app/services/doctor.service';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';


// describe('DoctorService', () => {
//   let service: DoctorService,
//     httpMock: HttpTestingController;
  
//   beforeEach(() => {
//     TestBed.configureTestingModule({imports: [HttpClientTestingModule, RouterTestingModule],  
//     providers: [DoctorService, Router]});
//     service = TestBed.inject(DoctorService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

// //   it('should have get patients', ()=> {
// //     expect(service.getPatients).toBeTruthy();
// //   });

// //   it('should have get patients', ()=> {
// //     expect(service.getPatientsByDocId).toBeTruthy();
// //   });

// //   it('should have get patients', ()=> {
// //     expect(service.getPatientsByDocIdUser).toBeTruthy();
// //   });

// //   it('should have get patients', ()=> {
// //     expect(service.getPatientsByDoctorName).toBeTruthy();
// //   });

// //   it('should have get patients', ()=> {
// //     expect(service.getUserInfo).toBeTruthy();
// //   });

// //   it('should return expected patients', () =>{
// //     const somePatients = 
// //     [{
// //       patientId: 1,
// //       firstName: 'johnny',
// //       lastName: 'test', 
// //       dob: new Date, 
// //       height: 72, 
// //       weight: 200, 
// //       bloodType: { 
// //         typeId : 4,
// //         type : "A+" },
// //       sex: {
// //         sexId: 1,
// //         sex: 'male'
// //       },
// //       vaccinations: {
// //         vaccinationId : 1,
// //         vaccination : "Walrus Pox",
// //       },//Vaccination,
// //       allergies: {

// //         allergyId : 1,
// //         allergy : "Serpentine"
// //       },
// //     },
// //     {
// //       patientId: 2,
// //       firstName: 'johnny2',
// //       lastName: 'test2', 
// //       dob: new Date, 
// //       height: 72, 
// //       weight: 200, 
// // bloodType: { 
// //         typeId : 4,
// //         type : "A+" },
// //       sex: {
// //         sexId: 1,
// //         sex: 'male'
// //     },
// //       vaccinations: {
// //         vaccinationId : 1,
// //         vaccination : "Walrus Pox",
// //       },//Vaccination,
// //       allergies: {

// //         allergyId : 1,
// //         allergy : "Serpentine"
// //       },
// //   },
// //     {
// //       patientId: 3,
// //       firstName: 'johnny3',
// //       lastName: 'test3', 
// //       dob: new Date, 
// //       height: 72, 
// //       weight: 200, 
// // bloodType: { 
// //         typeId : 4,
// //         type : "A+" },
// //       sex: {
// //         sexId: 1,
// //         sex: 'male'
// //     },
// //       vaccinations: {
// //         vaccinationId : 1,
// //         vaccination : "Walrus Pox",
// //       },//Vaccination,
// //       allergies: {

// //         allergyId : 1,
// //         allergy : "Serpentine"
// //       },
// //   }
// //   ];

// //     service.getPatients().subscribe(
// //       (patients: string | any[]) => {
// //         expect(patients.length).toBe(3);
// //         expect(patients).toEqual(somePatients);
// //       },
// //     );
// //     expect(httpMock.expectOne(``));
    
// //   });

// //   it('should return an error when server returns 404', ()=>{
// //     const error = new HttpErrorResponse({
// //       error: 'test 404 error',
// //       status: 404, statusText: 'Not Found'
// //     });

// //     service.getPatients().subscribe(
// //       (_patients: any) => fail('expected an error, not patients'),
// //       (error: { message: any; }) => {
// //         expect(error.message).toContain('test 404 error');
// //       }
// //     );
// //   });
// });