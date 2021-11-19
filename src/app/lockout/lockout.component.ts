import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lockout',
  templateUrl: './lockout.component.html',
  styleUrls: ['./lockout.component.css']
})
export class LockoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTime();
  }


}
  // Update the count down every 1 second
let x = setInterval(setTime, 1000);
function setTime() {

  
  
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    //let countDownDate = new Date(month+day+year+"08:00:00").getTime();
    let now = new Date().getTime();

    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

    document.getElementById("timer")!.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      document.getElementById("timer")!.innerHTML = "EXPIRED";
    }
  ;
}

