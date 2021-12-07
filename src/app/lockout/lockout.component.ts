import { getLocaleDateFormat, getLocaleTimeFormat, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Covid19VerificationModel } from '../models/covid19-verification-model';
import { Covid19VerificationService } from '../services/covid19-verification.service';
import { FirebaseService } from '../user-auth/services/firebase.service';

@Component({
  selector: 'app-lockout',
  templateUrl: './lockout.component.html',
  styleUrls: ['./lockout.component.css']
})
export class LockoutComponent implements OnInit {

  public userId:number = 1;
  public time:any='';
  public auth:any ='';
  public interval:any='';
  
  constructor(private cvs:Covid19VerificationService, private firebaseService:FirebaseService, private router:Router) { 
  }

  ngOnInit(): void {
    if(this.firebaseService.autoSignIn())
      this.getTimestamp();
    else 
      this.router.navigate(['/login']);  
  }

  ngAfterViewInit(): void{
    this.interval = window.setInterval(() => this.setTime(),1000);
  }

  ngOnDestroy():void{
    window.clearInterval(this.interval);
  }

    // Update the count down every 1 second

  setTime() {
    let countDownDate = this.time.getTime()+1209600000-43200000+86400000;
    let now = new Date().getTime();
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

    document.getElementById("timer")!.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text and change covid status
    if (distance < 0) {
      document.getElementById("timer")!.innerHTML = "You may return to work";
      
    };
 
}


  getTimestamp() {
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    
    this.cvs.getFormServByString(userData.id).subscribe((data: Object) => {
      if(data!=null){
        let dateArray:any[] = Object.values(data);
        let dateTime=dateArray[2];
        let date = new Date(dateTime);
        this.time = date;
        return true;
      }
      else{
        return false;
      } 



    })
  }

  logout()
  {
    this.firebaseService.logout();
  }
}
