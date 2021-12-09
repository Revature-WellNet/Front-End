import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { Vaccination } from 'src/app/models/vaccination';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Patient } from '../models/patient';
import { DiagnosisFormService } from './diagnosis-form.service';
import { DiagnosisForm } from '../models/diagnosis-form';
import { RoomDto } from '../models/rooms/room-dto';


describe('DiagnosisFormService', () => {
  let service: DiagnosisFormService;
  let httpMock : HttpTestingController;
  let routerMock : Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[HttpClientTestingModule, RouterTestingModule],
      providers : [DiagnosisFormService]});
    service = TestBed.inject(DiagnosisFormService);
    httpMock = TestBed.inject(HttpTestingController);
    routerMock = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a getDiagnosisForm method', () => {
    expect(service.getDiagnosisForm).toBeTruthy();
  });

  it('should have a postDiagnosisForm method', () => {
    expect(service.postDiagnosisForm).toBeTruthy();
  });

  it('should have a putDiagnosisForm method', () => {
    expect(service.putDiagnosisForm).toBeTruthy();
  });

  it('should have a getAllDiagnosisForms method', () => {
    expect(service.getAllDiagnosisForms).toBeTruthy();
  });


  
  // getDiagnosisForm(patientId: number): Observable<DiagnosisForm[]>{
  //   return this.http.get<DiagnosisForm[]>(this.backendUrl+"patientId/"+patientId) as Observable<DiagnosisForm[]>;
  // }
  describe('getDiagnosisForm', () => {
    it('#getDiagnosisForm should get a diagnosis form', () =>{
      
      const diagnosisForm : DiagnosisForm[] =
        [{ diagId: 1, diagnosis: "test diagnosis", symptoms: "test symptoms",
            treatment: "test treatment", resolutionStatus: true,
            checkIn: new Date(), checkOut: new Date(), 
            patient:{ patientId: 3, firstName: 'johnny', lastName: 'test', dob: new Date, 
              height: 72, weight: 200, 
              bloodType: { typeId : 4, type : "A+" },
              sex: { sexId: 1, sex: 'male' },
              patientVaccinations: [{vaccinationId : 1, vaccination : "Walrus Pox"}],
              patientAllergies: [{allergyId : 1, allergy : "Serpentine"}],
              fullName():string{return (this.firstName + " " + this.lastName);}
              },
            room: {roomId : 1, roomNumber : 1, area: {areaId: 1, name: "test room area"}},
            nurse: {id: "nurse ID", firstname: "susan", lastname: "test", 
              email: "email@test.com", role: {roleId: 1, role: "nurse"}},
            doctor: {id: "doctor ID", firstname: "mary", lastname: "test", 
              email: "email@test.com", role: {roleId: 1, role: "nurse"}},
            getResolutionStatus():boolean{return this.resolutionStatus}, 
            getRoom():RoomDto{return this.room}, 
            getPatient():Patient{return this.patient}
        }];

      let response : DiagnosisForm[];
      
      spyOn(service, 'getDiagnosisForm')
        .withArgs(4).and.returnValue(of(diagnosisForm));
      
      service.getDiagnosisForm(4).subscribe( (res) => { 
        response = res; 
        expect(response).toEqual(diagnosisForm);
      });

      httpMock.verify();
      
    });
  });

});
