import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19-verification',
  templateUrl: './covid19-verification.component.html',
  styleUrls: ['./covid19-verification.component.css']
})
export class Covid19VerificationComponent implements OnInit {

  public feverChills:boolean = false;
  public cough:boolean = false;
  public shortnessOfBreath:boolean = false;
  public fatigue:boolean = false;
  public muscleOrBodyAches:boolean = false;
  public headache:boolean = false;
  public lossOfTasteSmell:boolean = false;
  public soreThroat:boolean = false;
  public congestionRunnyNose:boolean = false;
  public nauseaVomiting:boolean = false;
  public diarrhea:boolean = false;
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
