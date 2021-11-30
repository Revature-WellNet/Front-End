import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
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
  diagForm!: DiagnosisForm;
  room!: Room;
  role!: Role;
  user!: User;
  returnVal!: any;
  bloodType: Object = {typeId:1,type:'a'};
  sex: Object = {sexId:1,sex:'male'};
  patient: Patient = new Patient(1, 'Captain', 'America', new Date("1920-3-31"), 72, 200, this.bloodType, this.sex, [], []);

  constructor(
    private patientService: PatientService,
    private diagnosisService: DiagnosisFormService,
    private userService: UserService,
  ) {
    this.patientService = patientService;
  }

  ngAfterViewInit(){
    if(this.user.role.role == 'doctor'){
      console.log("I don't think this works.")
      this.getExistingForm(this.patient.patientId);
      //this.diagnosis = this.diagForm.diagnosis;
     // this.symptoms = this.diagForm.symptoms;
      console.log("on view init: ", this.diagForm, this.symptoms, this.diagnosis, this.treatment);
    }
   // console.log("user", this.user.role.role);
  }

  ngOnInit() {
    
      // this.patient = this.patientService.patient;
      let data = JSON.parse(localStorage.getItem('userinfo') || '{}');
      this.userService.getUser(data.id).subscribe(
        (response:User) => {
         // console.log("data", response);
          this.user = response;
        },
        (error) => {
          console.log("error", error);
        });
     // console.log("role before check",this.user.role.role);
    
    
  }
 onSubmit(symptoms: string, diagnosis: string, treatment: string) {
    let current = new Date();

    switch (this.user.role.role){
      case 'nurse': {
        let diagFormTemp: DiagnosisForm = new DiagnosisForm();
        diagFormTemp.diagnosis = diagnosis;
        diagFormTemp.symptoms = symptoms;
        diagFormTemp.resolutionStatus = false;
        diagFormTemp.checkIn = new Date();
        diagFormTemp.patient = this.patient;
        diagFormTemp.nurse=this.user;

        this.diagnosisService.postDiagnosisForm(diagFormTemp).subscribe(
          (success) => {
            console.log('form was submitted');
          },
          (error) => {
            console.log('there was an error', diagFormTemp);
          }
        );
        break;
      }
      case 'doctor':{
          console.log(this.diagForm);
          console.log(this.user);
          this.diagForm.doctor = this.user;
          this.diagForm.treatment = treatment;
          this.diagForm.resolutionStatus = true;
          this.diagForm.checkOut = new Date();

         this.diagnosisService.putDiagnosisForm(this.diagForm).subscribe(
          (success) => {
            console.log('form was submitted as ', this.diagForm);
          },
          (error) => {
            console.log('there was an error');
          }
        );
        break;
      }
    }
  }

  getExistingForm( patientId: number){
    this.diagnosisService.getDiagnosisForm(patientId).subscribe(
      (data:DiagnosisForm[]) => {
        
        this.diagForm = data[data.length-1];
        
      },
      (error) => {
        console.log("ERROR");
        
      }
    );
  }
  prescribeTreatment(treatment: string) {}
}
