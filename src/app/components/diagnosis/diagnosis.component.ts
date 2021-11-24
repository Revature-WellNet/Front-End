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
  user!: User;
  patient!: Patient;
  role!: Role;

  constructor(
    private patientService: PatientService,
    private diagnosisService: DiagnosisFormService,
    private userService: UserService
  ) {
    // this.patient = patientService.patient;
    
  }

  ngOnInit() {
    this.patient = new Patient(
      -1,
      'Vincent',
      'Caccamo',
      new Date('1991-01-11'),
      73,
      240,
      'O-',
      'M'
    );
    this.role = new Role(2,"doctor");
    this.user = new User("5555", "bob", "white", "birdsarentreal@hotmail.com", this.role);
  }
  onSubmit(symptoms: string, diagnosis: string, treatment: string) {
    let current = new Date();
    let diagnosisDTO: DiagnosisDTO = new DiagnosisDTO(
      symptoms,
      diagnosis,
      treatment,
      false,
      current,
      this.patientService.patient,
      this.room,
      null,
      null
    );
    console.log(diagnosisDTO);
    switch (this.user.role.role) {
      case 'nurse':
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
      case 'doctor':
        console.log(this.user);
        diagnosisDTO.doctor=this.user; 
        diagnosisDTO.resolutionStatus = true;
        this.diagnosisService.putDiagnosisForm(diagnosisDTO).subscribe(
          (success) => {
            console.log('form was submitted');
          },
          (error) => {
            console.log('there was an error');
          }
        );
        break;
    }
  }

  prescribeTreatment(treatment: string) {}
}
