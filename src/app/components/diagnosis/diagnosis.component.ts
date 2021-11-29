import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DiagnosisDTO } from 'src/app/models/diagnosis-dto';
import { DiagnosisForm } from 'src/app/models/diagnosis-form';
import { Patient } from 'src/app/models/patient';
import { Role } from 'src/app/models/role';
import { Room } from 'src/app/models/rooms/room';
import { User } from 'src/app/models/user';
import { DiagnosisFormService } from 'src/app/services/diagnosis-form.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';
import { NurseComponent } from '../nurse/nurse.component';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css'],
})
export class DiagnosisComponent implements OnInit {
  diagnosis: string = ' ';
  symptoms: string = ' ';
  treatment: string = ' ';
  iter: number = 0;
  diagnosisDTO!: DiagnosisDTO;
  room!: Room;
  patient!: Patient;
  role!: Role;
  user!: User;

  constructor(
    private patientService: PatientService,
    private diagnosisService: DiagnosisFormService,
    private userService: UserService
  ) {
    this.patientService = patientService;
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userinfo') || '{}');
    this.patient = this.patientService.patient;
  }
  onSubmit(symptoms: string, diagnosis: string, treatment: string) {
    let current = new Date();    

    switch (this.user.role.role){
      case 'nurse': {
        let diagnosisDTO: DiagnosisDTO = new DiagnosisDTO(
          symptoms,
          diagnosis,
          treatment,
          false,
          current,
          this.patient,
          this.room,
          this.user,
          null
        );
        diagnosisDTO.nurse=this.user; 
        this.diagnosisService.postDiagnosisForm(diagnosisDTO).subscribe(
          (success) => {
            console.log('form was submitted');
          },
          (error) => {
            console.log('there was an error');
          }
        );
        break;
      }
      case 'doctor':{
          let diagFormTemp: DiagnosisDTO = this.getExistingForm(this.patient);
          diagFormTemp.doctor = this.user;
          diagFormTemp.treatment = treatment;
          diagFormTemp.resolutionStatus = true;
         
         this.diagnosisService.putDiagnosisForm(diagFormTemp).subscribe(
          (success) => {
            console.log('form was submitted as ', diagFormTemp);
          },
          (error) => {
            console.log('there was an error');
          }
        );
        break;
      }     
    }
  }

  getExistingForm( patient: Patient): DiagnosisDTO{
    this.diagnosisService.getDiagnosisForm(this.patient.patientId).subscribe(
      (data:DiagnosisForm) => {
        this.diagnosisDTO = data;
        console.log(diagForm);
        return diagForm;
      },
      (error) => {
        console.log("ERROR");
      }
        );
  }
  prescribeTreatment(treatment: string) {}
}
