import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { NurseService } from 'src/app/services/nurse.service';
import { PatientService } from 'src/app/services/patient.service';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  patientsArray:any=[];

  constructor(private nurseService: NurseService, private firebaseService : FirebaseService, 
    private router : Router, private patientService: PatientService) { }


  /* Method Name : ngOnInit
    Description : This is the ngOnInit lifecycle hook
    : no Arguments
    Result : This on page load checks that the user is logged in with the firebaseService and
      Otherwise routes them to the log in page - this then parses the local storage for
      the user information relating to the logged in nurse - If the user is a doctor they
      are routed to the doctor page - finally once all initialization steps have been
      completed this class's getAll patients method is called to populate the page with all
      users
    Calls : nurse.component.ts getAllPatients mehtod 
  */
  ngOnInit(): void {
    console.log("before pipe");
    if(!this.firebaseService.autoSignIn())
      this.router.navigate(['login']);  
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    if(userData.role == "doctor")
      this.router.navigate(['doctor']);
    this.getAllPatients();
  }

  /* Method Name : getInfo
    Description : This function calls a method in the nurse service in order to route 
      the user to the profile page
    : No known references
    Calls : nurse.service.ts getUserInfo method
  */
  getInfo(){
    this.nurseService.getUserInfo();
  }

  /* Method Name : addPatient
    Description : This method calls an other method in the nurse service to route to the
      patient check in component
    : No known references
    Calls : nurse.service.ts addPatients method
  */
  addPatient(){
    this.nurseService.addPatients();
    console.log("Button Clicked");
  }

  /* Method Name : searchPatient
    Description : This method calls an other method in the nurse service to get a
      patient by their id : this is a deprecated method because upon integration of
      firebase into the project the primary key stopped being an integer
    : No Known references
    Calls : nurse.servcie.ts getPatientById
  */
  searchPatient(){
    this.nurseService.getPatientById(1);
  }

  /* Method Name : searchPatByFName
    Description : This method takes in a first name string then subscribes to the
      nurse service and passes this value to the service for a back end http
      get request
    Argument : firstName : A string representing the patient's first name
    Result : Sets the patientsArray array of Patients field of this class to the
      return value of the subscribed nurse service get request
    References : Called in the nurse.component.ts apply filter function,
      (event bound) within the nurse.component.html 
  */
  searchPatByFName(firstName: string){
    console.log("Button Clickd")
    this.nurseService.getPatientByFirstName(firstName).subscribe((response: Patient[])=> {
        this.patientsArray = response;
        console.log(this.patientsArray);
        console.log(response);
        console.log(typeof response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  /* Method Name : searchPatByFullName
      Description : This method takes in a first name string and last name string
        then subscribes to the nurse service and passes the values for a back end http
        get request
      Argument : firstName : A string representing the patients first name
      Argument : lastName : A string representing the patients last name
      Result : Sets the patientsArray array of Patients field of this class to the 
        return value of the subscribed nurse service get request
      References : Called in the nurse.component.ts applyfilter function,
        (event bound) within the nurse.component.html 
  */
  searchPatByFullName(firstName: string, lastName: string){
    this.nurseService.getPatientByFullName(firstName, lastName).subscribe((response: Patient[])=> {
        this.patientsArray = response;
        console.log(this.patientsArray);
        console.log(response);
        console.log(typeof response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /* Method Name : searchPatNameDate
      Description : This function takes in a firstName string, a lastName string and a
        date of birth string and then passes them to the nurse service for a http get
        request and subscribes to it
      Argument : firstName : A string representing a user firstName
      Argument : lastName : A string representing a user lastName
      Argument : dobField : A string representing the user's date of birth
      Result : Sets the patientsArray array of Patients field of this class to the 
        return value of the subscribed nurse service get request
      References : Called in the nurse.component.ts applyFilter function,
        (event bound) within the nurse.component.html file
  */
  searchPatNameDate(firstName: string, lastName:string, dobField : string){

    //console.log(dobField);

    let fullDate:string = dobField;
    console.log(firstName, lastName, fullDate);
    this.nurseService.getPatientByNameDOB(firstName, lastName, fullDate).subscribe(
      (response: Patient[])=> {
        this.patientsArray = response;
        console.log(this.patientsArray);
        console.log(response);
        console.log(typeof response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /* Method Name : getAllPatients
      Description : This calls the nurse service and subscribes to the corresponding
        http get request to obtain a list of all the patients
      : no Arguments
      Result : Sets the patientsArray array of Patients of this class to the
        return value of the subscribed nurse service get request
      References : Called in the nurse.component.ts ng.OnInit() lifecycle hook,
        Called in the nurse.component.ts applyFilter() function,
  */
  getAllPatients(){
    this.nurseService.getPatients().subscribe(
      (response: Patient[])=> {
        this.patientsArray = response;
                console.log(this.patientsArray);
        console.log(response);
        console.log(typeof response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /* Method Name : diagnosePatient
      Description : this is called when a button event bound to individual patients on
        the front end nurse page is clicked - this button is currently a heartbeat symbol
        - The patient service patient value is set to this patient and also
        now within the patientService an other diagnosePatient function is called
      Argument : patient : A Patient object representing the currently selected patient
      Result : The patient object is passed from the patient component to the patient
        service to begin diagnosing the patient
      References : (event bound) to the nurse.component.html page
  */
  diagnosePatient(patient: Patient){
    this.patientService.patient=patient;
    console.log(patient);
    this.patientService.diagnosePatient(patient);
  }

  /* Method Name : goBack
      Description : Was intended to route the user to the previous page which they were
      On
    : Not currently in use
  */
  goBack(){
    this.nurseService.goBack();
  }

  /* Method Name : logout
      Description : Was intended to log out the user
    : Not currently in use
  */
  logout(){
    this.firebaseService.logout();
  }

  /* Method Name : routeToAdd
      Description : Was indended to route the user to the add allergies and vaccines page
    : Not currently in use
  */
  routeToAdd(){
    this.router.navigate(["addAllergiesVaccines"]);
  }

  /* Method Name : applyfilter
    Description : This takes in; first name, last name, date of birth, and filter ;strings
      and depending upon what was entered selects which function within this class
      to call in order to submit the correct http get request in the nurse service
    Argument : firstName : A string representing the user's firstName
    Argument : lastName : A string representing the user's lastName
    Argument : dobField : A string representing the user's date of birth
    Argument : filter : A string holding a numeric value obtained from a
      select tag on the front end where each number reflects a specific drop down
      item - this is used within this function's switch case
    Result : This selects the correct function to call within the nurse.component.ts
      based upon a desired search And entered fields upon the html file
    References : (event bound) upon the nurse.component.html page
  */
  applyfilter(firstName: string, lastName:string, dobField : string, filter:string){

    console.log(filter);

    switch(filter){

      case "1":
        this.getAllPatients();
        break;
      case "2":
        this.searchPatByFName(firstName);
          break;
      case "3":
        this.searchPatByFullName(firstName, lastName);
        break;
      case "4":
        this.searchPatNameDate(firstName, lastName, dobField);
        break;
    }

  }

}
