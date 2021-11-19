import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19-verification',
  templateUrl: './covid19-verification.component.html',
  styleUrls: ['./covid19-verification.component.css']
})
export class Covid19VerificationComponent implements OnInit { 

  public testedPositive:string = 'false'; 
  public diagnosedResults:string = 'false';
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
  public contactCheck:string = 'false';
 
  
  public vaccinatedOrRecovered:string = 'false';
  public tested:string = 'false';
  public testedResult:string = 'false';
  public covidArray:any = [];

  public testedPositiveQuestions:string = 'true';
  public diagnosedQuestions:string = 'false';
  public symptomQuestions:string = 'false'; 
  public contactQuestions:string = 'false';
  
  public testedQuestions:string = 'false';
  public testedQuestionsResult:string = 'false';
  public getTested:string = 'false';
  public formSubmit:string = 'false';

  public lastTest:Date = new Date(1970, 1, 1, 0, 0, 0);
  public finalStatus:boolean = false;
  
  

  constructor() { }

  ngOnInit(): void {
  }

    testedPositiveSubmit() {
    this.testedPositiveQuestions='false';
    if(this.testedPositive=='true'){
      this.getTested='true';
    }
    else{this.diagnosedQuestions='true';}
  }
  
    diagnosedSubmit(){
    this.diagnosedQuestions='false';
    console.log(this.diagnosedResults);

    if(this.diagnosedResults=='true'){
      this.getTested='true';
    }
    else{this.symptomQuestions='true';}
  }

  symptomSubmit(){
    console.log(this.diarrhea);
    this.covidCheck();
    this.symptomQuestions='false';
    if(this.symptomCheck=='true'){
      this.testedQuestions='true';
    }
    else{
    this.contactQuestions='true';}
  }

  contactSubmit(){
    this.contactQuestions='false';
    if(this.contactCheck=='true'){
      this.testedQuestions='true';
    }
    else{
      this.formSubmit='true';
    }
    ;
  }
  

  testedSubmit(){
    this.testedQuestions='false';

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
