import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19-verification',
  templateUrl: './covid19-verification.component.html',
  styleUrls: ['./covid19-verification.component.css']
})
export class Covid19VerificationComponent implements OnInit {

  public feverChills:string = 'false';
  public cough:string = 'false';
  public shortnessOfBreath:string = 'false';
  public fatigue:string = 'false';
  public muscleOrBodyAches:string = 'false';
  public headache:string = 'false';
  public lossOfTasteSmell:string = 'false';
  public soreThroat:string = 'false';
  public congestionRunnyNose:string = 'false';
  public nauseaVomiting:string = 'false';
  public diarrhea:string = 'false';
  public symptomCheck:boolean = false;
  public testedPositive:boolean = false;
  public awaitingTestResults:boolean = false;
  public diagnosedResults:boolean = false;
  public suspectedCovid:boolean = false;
  public vaccinatedOrRecovered:boolean = false;
  
  public lastTest:Date = new Date(1970, 1, 1, 0, 0, 0);
  public symptomQuestions:boolean = true;
  public testedPositiveQuestions:boolean = false;
  public awaitingTestQuestions:boolean = false;
  public diagnosedQuestions:boolean = false;
  public suspectedQuestions:boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  symptomSubmit(){
    console.log(this.diarrhea);
    this.symptomQuestions=false;
    this.testedPositiveQuestions=true;
  }

  testedPositiveSubmit() {
    this.testedPositiveQuestions=false;
    this.awaitingTestQuestions=true;
  }

  awaitingTestSubmit(){
    this.awaitingTestQuestions=false;
    this.diagnosedQuestions=true;
  }

  diagnosedSubmit(){
    this.diagnosedQuestions=false;
    this.suspectedQuestions=true;
  }

  suspectedSubmit(){
    this.suspectedQuestions=false;

  }

}
