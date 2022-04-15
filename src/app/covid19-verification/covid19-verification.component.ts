import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Covid19VerificationModel } from '../models/covid19-verification-model';
import { Covid19VerificationService } from '../services/covid19-verification.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FirebaseService } from '../user-auth/services/firebase.service';

@Component({
  selector: 'app-covid19-verification',
  templateUrl: './covid19-verification.component.html',
  styleUrls: ['./covid19-verification.component.css']
})
export class Covid19VerificationComponent implements OnInit {

  public testedPositive: string = 'false';
  public diagnosedResults: string = 'false';
  public feverChills: string = 'false';
  public cough: string = 'false';
  public shortnessOfBreath: string = 'false';
  public fatigue: string = 'false';
  public muscleOrBodyAches: string = 'false';
  public headache: string = 'false';
  public lossOfTasteSmell: string = 'false';
  public soreThroat: string = 'false';
  public congestionRunnyNose: string = 'false';
  public nauseaVomiting: string = 'false';
  public diarrhea: string = 'false';
  public covidArray: any = [];
  public symptomCheck: string = 'false';
  public contactCheck: string = 'false';
  public tested: string = 'false';
  public testedResult: string = 'false';

  public testedPositiveQuestions: string = 'true';
  public diagnosedQuestions: string = 'false';
  public symptomQuestions: string = 'false';
  public contactQuestions: string = 'false';
  public testedQuestions: string = 'false';
  public testedQuestionsResult: string = 'false';
  public lastPositiveTest: string = 'false';

  public previous1: string = 'false';
  public previous2: string = 'false';
  public previous3: string = 'false';
  public previous4: string = 'false';

  public id:number = 0;
  public userId: string = '';
  public lastTest: Date = new Date();
  public finalStatus: boolean = false;

  public inputError:boolean = false;



  constructor(private cvs: Covid19VerificationService, private router: Router, private userService:UserService, private firebase: FirebaseService) { }

  ngOnInit(): void {
    if(!this.firebase.autoSignIn())
      this.router.navigate(['/login']);  
  }

  //next question functions
  
  //question 1
  testedPositiveSubmit() {
    this.testedPositiveQuestions = 'false';
    if (this.testedPositive == 'true') {
      this.finalStatus = true;
      this.lastPositiveTest = 'true';
      this.previous1 = 'true';
    }
    else { this.diagnosedQuestions = 'true'; }
  }

  //question 2
  diagnosedSubmit() {
    this.diagnosedQuestions = 'false';
    if (this.diagnosedResults == 'true') {
      this.finalStatus = true;
      this.lastPositiveTest = 'true';
      this.previous2 = 'true';
    }
    else { this.symptomQuestions = 'true'; }
  }

  //question 3
  symptomSubmit() {
    console.log(this.diarrhea);
    this.covidCheck();
    this.symptomQuestions = 'false';
    if (this.symptomCheck == 'true') {
      this.previous3 = 'true';
      this.testedQuestions = 'true';
    }
    else {
      this.contactQuestions = 'true';
    }
  }

  //question 4
  contactSubmit() {
    this.contactQuestions = 'false';
    if (this.contactCheck == 'true') {
      this.previous4 = 'true';
      this.testedQuestions = 'true';
    }
    else {
      this.formSubmitFun();
    }
    ;
  }
  
  //form submitter
  formSubmitFun() {
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    console.log(userData.id);
    let now = new Date().getTime();
    
    console.log(this.lastTest);
    let date = new Date(this.lastTest).getTime();
    console.log(now-date);
    if ((now - date) > 1210000000 || date>now){
      console.log("date error");
      this.inputError=true;
    }
    else{
    let cv: Covid19VerificationModel = new Covid19VerificationModel(this.id,userData.id, this.finalStatus, this.lastTest);
    console.log(cv);
    this.cvs.submitFormServ(cv).subscribe((data: Object) => {
      console.log(data);
      localStorage.setItem('covidInfo', JSON.stringify(cv));
      if (this.finalStatus == false) {
        this.userService.getUser(userData.id).subscribe(
          data =>{
            this.cvs.getFormServByString(userData.id).subscribe((resp)=>{
              if(data.role.role=='nurse'){
                // nurseUI()
                this.router.navigate(['nurse']);
              }else if(data.role.role=='doctor'){
                // doctorUI()
                this.router.navigate(['doctor']);
              }else{
                // user does not have a role / could not find users role
                console.error('this user does not have a role');
              }
            });
            
          }
        )
      }
      else {
        this.router.navigate(['lockout']);
      }
    })
  }}
  
  testedSubmit() {
    this.testedQuestions = 'false';
    if (this.tested == 'false') {
      this.finalStatus = true;
      this.formSubmitFun();
    }
    this.testedQuestionsResult = 'true';
  }  
  
  testedResultSubmit() {
    this.testedQuestionsResult = 'false';
    if (this.testedPositive == 'true') {
      this.finalStatus=true;
      this.lastPositiveTest='true';
    }
    else if(this.previous3=='true'){
      this.contactQuestions='true'
    }
    else{
      this.formSubmitFun();
    }
  }

  //back button functions

  //question 1
  datePrevious1() {
    this.lastPositiveTest = 'false';
    this.finalStatus = false;
    this.previous1 = 'false';
    this.testedPositiveQuestions = 'true';
  }

   diagnosedPrevious() {
    this.diagnosedQuestions = 'false';
    this.testedPositiveQuestions = 'true';
  }
  //question 2
  
  datePrevious2() {
    this.lastPositiveTest = 'false';
    this.finalStatus = false;
    this.previous2 = 'false';
    this.diagnosedQuestions = 'true';
  }

  symptomPrevious() {
    this.symptomQuestions = 'false';
    this.diagnosedQuestions = 'true';
  }

  //question 3
  havePrevious3() {
    this.testedQuestions = 'false';
    this.previous3 = 'false';
    this.symptomQuestions = 'true';
  }

 contactPrevious() {
    this.contactQuestions = 'false';
    this.symptomQuestions = 'true';
  }

  //question 4
  havePrevious4() {
    this.testedQuestions = 'false';
    this.previous4 = 'false';
    this.contactQuestions = 'true';
  }


  testedQuestionsResultPrevious() {
    this.testedQuestionsResult = 'false';
    this.testedQuestions = 'true';
  }
  logout(){
    this.firebase.logout();
  }

  //covid checker
  covidCheck() {
    let count = 0;
    this.covidArray = [this.feverChills, this.cough, this.shortnessOfBreath, this.fatigue, this.muscleOrBodyAches,
    this.headache, this.lossOfTasteSmell, this.soreThroat, this.congestionRunnyNose, this.nauseaVomiting, this.diarrhea]
    for (let i = 0; i < this.covidArray.length; i++) {
      console.log(this.covidArray[i]);
      console.log(this.covidArray);
      if (this.covidArray[i] == 'true') {
        this.covidArray[i];
        count++;
      }
    }
    console.log(count);
    if (count > 1) {
      this.symptomCheck = 'true';
    }

  }

}
