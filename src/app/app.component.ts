import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public title = "WellNet";
  //User Preference API
  //saved DarkTheme is true or else false
  isDarkTheme = false;

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }
}
