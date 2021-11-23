import { Component, OnInit } from '@angular/core';
import { DiagnosisDTO } from 'src/app/models/diagnosis-dto';
import { Patient } from 'src/app/models/patient';
import { Room } from 'src/app/models/rooms/room';
import { User } from 'src/app/models/user';
import { DiagnosisFormService } from 'src/app/services/diagnosis-form.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';
import { NurseComponent } from '../nurse/nurse.component';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  diagnosis: string = ' ';
  symptoms: string = ' ';
  symptom: string = ' ';
  iter: number = 0;
  diagnosisDTO?: DiagnosisDTO;
  room!: Room;
  user!: User;
  constructor(private patientService: PatientService, private diagnosisService : DiagnosisFormService, private userService : UserService) { 

  }

  ngOnInit() {
  }
  onSubmit(diagnosis:string){
    let current = new Date();
    let diagnosisDTO : DiagnosisDTO = new DiagnosisDTO( 
                    this.symptoms,
                    diagnosis,
                    false,
                    current,
                    this.patientService.patient,
                    this.room,
                    this.user
    )
                  
    this.diagnosisService.postDiagnosisForm(diagnosisDTO);

  }

  addSymptom(symptom: string) {
    
    this.symptoms.concat(symptom[this.iter]+"; ");
    this.iter++;
    console.log(this.iter);
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = 
    '<input type= "text" '+ 
    'class= "form-control col-sm-3" '+ 
    'name= "symptom'+this.iter+'" '+
    'id= ""symptom'+this.iter+'" '+
    '[(ngModel)] = "symptom'+this.iter+'"/> '+
    '<button type="button" class="btn btn-secondary col-sm-1" (click)="addSymptom(symptom'+this.iter+')">+</button> '+
    '<br> ';
  document.querySelector('.symptomInput')?.appendChild(row);
  console.log(row);
}
  //   row.innerHTML = 
  //     '<input type= "text" '+ 
  //     'class= "form-control col-sm-3"'+ 
  //     'name= "symptom'+this.iter+'"'+
  //     'id= ""symptom'+this.iter+'"'+
  //     '[(ngModel)] = ""symptom'+this.iter+'""/>'+
  //     '<button type="button" class="btn btn-secondary col-sm-1" (click)="addSymptom(symptom'+this.iter+')">+</button>'+
  //     '<br>';
  //   document.querySelector('.symptomInput')?.appendChild(row);
  // }
  /*
  rejectDiagnosis(){
    // logic to inform nurse to revisit with patient.
  }

  overrideDiagnosis(diagnosis: string){
    // perhaps format invalid diagnosis (make italic or someting) then append new diagnosis.
  }*/

  prescribeTreatment(treatment: string){}

}
