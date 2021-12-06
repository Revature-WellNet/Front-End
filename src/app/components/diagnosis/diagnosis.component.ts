import { Component, OnInit } from '@angular/core';
import { DiagnosisForm } from 'src/app/models/diagnosis-form';
import { Patient } from 'src/app/models/patient';
import { Room } from 'src/app/models/rooms/room';
import { User } from 'src/app/models/user';
import { DiagnosisFormService } from 'src/app/services/diagnosis-form.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css'],
})

export class DiagnosisComponent implements OnInit {
  diagnosis: string = '';
  symptoms: string = '';
  treatment: string = '';
  diagForm!: DiagnosisForm;
  room!: Room; // = this.patientService.room
  public user!: User;
  patient: Patient = this.patientService.patient;

  constructor(
    private patientService: PatientService,
    private diagnosisService: DiagnosisFormService,
    private userService: UserService,
  ) {}

  ngAfterViewInit(){
    if(this.user.role.role == 'doctor'){
      this.getExistingForm(this.patient.patientId);
      this.diagnosis = this.diagForm.diagnosis;
      this.symptoms = this.diagForm.symptoms;
    }
    console.log(this.patient);
  }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('userinfo') || '{}');
    this.userService.getUser(data.id).subscribe(
      (response:User) => {
        this.user = response;
      },
      (error) => {
        console.log("error", error);
      });
  }

 onSubmit(symptoms: string, diagnosis: string, treatment: string) {
    switch (this.user.role.role){
      case 'nurse': {
        this.diagForm = new DiagnosisForm();
        this.diagForm.diagnosis = diagnosis;
        this.diagForm.symptoms = symptoms;
        this.diagForm.resolutionStatus = false;
        this.diagForm.checkIn = new Date();
        this.diagForm.patient = this.patient;
        this.diagForm.nurse=this.user;
        //this.diagForm.room = this.room;

        this.diagnosisService.postDiagnosisForm(this.diagForm).subscribe(
          (success) => {
            console.log('form was submitted');
          },
          (error) => {
            console.log('there was an error', this.diagForm);
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
        this.symptoms = this.diagForm.symptoms;
        this.diagnosis = this.diagForm.diagnosis;
        console.log("in method with: ",data[data.length-1]);
        // Logic only retrieves the most recent diagnosis form for a patient.
        // Logically this should be okay but practically will likely cause issues if patients just kind of leave without being given a treatement by a doctor
      },
      (error) => {
        console.log("ERROR");

      }
    );
  }
}
