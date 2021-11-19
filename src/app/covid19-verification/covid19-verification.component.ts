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
  public symptomCheck:string = 'false';
  public testedPositive:string = 'false';
  public awaitingTestResults:string = 'false';
  public diagnosedResults:string = 'false';
  public suspectedCovid:string = 'false';
  public vaccinatedOrRecovered:string = 'false';
  public covidArray:any = [];
  
  public lastTest:Date = new Date(1970, 1, 1, 0, 0, 0);
  public symptomQuestions:string = 'true';
  public testedPositiveQuestions:string = 'false';
  public diagnosedQuestions:string = 'false';
  public suspectedQuestions:string = 'false';
  

  constructor() { }

  ngOnInit(): void {
  }

  symptomSubmit(){
    console.log(this.diarrhea);
    this.covidCheck();
    this.symptomQuestions='false';
    this.testedPositiveQuestions='true';
  }

  testedPositiveSubmit() {
    this.testedPositiveQuestions='false';
    this.diagnosedQuestions='true';
  }



  diagnosedSubmit(){
    this.diagnosedQuestions='false';
    this.suspectedQuestions='true';
  }


  covidCheck(){
    let count=0;
    this.covidArray = [this.feverChills, this.cough, this.shortnessOfBreath, this.fatigue, this.muscleOrBodyAches,
      this.headache, this.lossOfTasteSmell, this.soreThroat, this.congestionRunnyNose, this.nauseaVomiting, this.diarrhea]
    for(let i=0; i<this.covidArray.length;i++){
      console.log(this.covidArray[i]);
      console.log(this.covidArray);
      if (this.covidArray[i]=='true'){
        this.covidArray[i];
        count++;
      }
      }
      console.log(count);
      if(count>1){
        this.symptomCheck='true';
    }
      
  }

}
