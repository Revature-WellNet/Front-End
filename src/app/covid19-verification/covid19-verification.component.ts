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
  public musclesOrBodyAches:boolean = false;
  public headache:boolean = false;
  public lossOfTastSmell:boolean = false;
  public soreThroat:boolean = false;
  public congestionRunnyNose:boolean = false;
  public nauseaVomiting:boolean = false;
  public diarrhea:boolean = false;
  public symptomCheck:boolean = false;
  public vaccinatedOrRecovered:boolean = false;
  public testedPositive:boolean = false;
  public lastTest:Date = new Date(1970, 1, 1, 0, 0, 0);
  

  constructor() { }

  ngOnInit(): void {
  }

}
